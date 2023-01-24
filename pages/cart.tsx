import { useIntl } from "react-intl";

import Head from "next/head";

import { VStack } from "@chakra-ui/react";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import { Layout, PageHeader } from "shared/Layout";

import {
  getCartProductsQuery,
  getCartProductsQueryKey,
  useCartProductsQuery,
} from "modules/carts/infrastructure";
import { CartsList, ClearCartButton } from "modules/carts/presentation";

interface IProps {
  cartId: number;
}

const Cart = ({ cartId }: IProps) => {
  const { formatMessage } = useIntl();
  // todo: handle error
  const { data, isLoading } = useCartProductsQuery(cartId);

  if (isLoading || !data) {
    return <h1>Loading ...</h1>;
  }

  return (
    <>
      <Head>
        <title>Your cart</title>
      </Head>
      <Layout>
        <VStack display="stretch" spacing={10}>
          <PageHeader
            title={formatMessage({
              id: "cart-title",
              defaultMessage: "List of selected products",
            })}
            description={formatMessage({
              id: "cart-description",
              defaultMessage: "These are all products that you yet chose.",
            })}
          >
            <ClearCartButton cartId={cartId} />
          </PageHeader>
          <CartsList
            cartProducts={data.map((product) => ({
              id: product.id,
              title: product.title,
              price: product.price,
              imageUrl: product.image,
              category: product.category,
              quantity: product.quantity,
            }))}
          />
        </VStack>
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  // todo: use msw lib for mocking
  const userCartId = 1;

  await queryClient.prefetchQuery({
    queryKey: getCartProductsQueryKey(userCartId),
    queryFn: () => getCartProductsQuery(userCartId),
  });

  return {
    props: {
      cartId: userCartId,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Cart;
