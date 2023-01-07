import { useIntl } from "react-intl";

import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, VStack } from "@chakra-ui/react";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import { Layout } from "shared/Layout";

import {
  getProductQuery,
  getProductQueryKey,
  getProductsQuery,
  useProductQuery,
} from "modules/products/infrastructure";
import { ProductDetails } from "modules/products/presentation";

const Product = () => {
  // todo: handle error
  const { formatMessage } = useIntl();
  const { query, push } = useRouter();
  const { data } = useProductQuery(query.productId as string);

  return (
    <>
      <Head>
        <title>{data?.title}</title>
      </Head>
      <Layout>
        <VStack display="stretch" spacing={6}>
          <Button
            leftIcon={<ArrowBackIcon />}
            variant="link"
            onClick={() => push("/products")}
          >
            {formatMessage({
              id: "products-back-to-list",
              defaultMessage: "Back to products' list",
            })}
          </Button>
          <ProductDetails product={data!} onBack={() => push("/products")} />
        </VStack>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const { products } = await getProductsQuery({ limit: 1000 });

  const paths = products.map((product) => ({
    params: {
      productId: product.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ productId: string }>) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: getProductQueryKey(params!.productId),
    queryFn: () => getProductQuery(params!.productId),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60 * 60 * 24,
  };
}

export default Product;
