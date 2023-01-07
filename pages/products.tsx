import { useState } from "react";
import { useIntl } from "react-intl";

import Head from "next/head";

import { SettingsIcon } from "@chakra-ui/icons";
import { Button, VStack } from "@chakra-ui/react";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import { Layout, PageHeader } from "shared/Layout";
import { useNotImplementedYetToast } from "shared/Toast";

import {
  getProductsQuery,
  getProductsQueryKey,
  useProductsQuery,
} from "modules/products/infrastructure";
import { ProductsList } from "modules/products/presentation";

import { IQueryParams } from "../types";

const Home = () => {
  const { formatMessage } = useIntl();
  const notImplemented = useNotImplementedYetToast();
  // todo: handle error
  // todo: handle url query
  const [params, setParams] = useState<IQueryParams>(defaultParams);
  const { data, isLoading, isFetching } = useProductsQuery(params, {
    keepPreviousData: true,
  });

  if (isLoading || !data) {
    return <h1>Loading ...</h1>;
  }

  const noMoreProducts = data.meta.total <= params.limit;

  return (
    <>
      <Head>
        <title>Products List</title>
      </Head>
      <Layout>
        <VStack display="stretch" spacing={10}>
          <PageHeader
            title={formatMessage({
              id: "products-list-title",
              defaultMessage: "Products list",
            })}
            description={formatMessage({
              id: "products-list-description",
              defaultMessage: "Explore what we have in the store for you.",
            })}
          >
            <Button leftIcon={<SettingsIcon />} onClick={notImplemented}>
              {formatMessage({
                id: "products-more-filters",
                defaultMessage: "More filters",
              })}
            </Button>
          </PageHeader>
          <ProductsList products={data.products} />
          <Button
            w="100%"
            onClick={() =>
              setParams((params) => ({
                ...params,
                limit: (params?.limit ?? 10) + 10,
              }))
            }
            isLoading={isFetching}
            isDisabled={noMoreProducts}
          >
            {noMoreProducts
              ? formatMessage({
                  id: "products-no-more",
                  defaultMessage: "No more products",
                })
              : formatMessage({
                  id: "products-show-more",
                  defaultMessage: "Show more products",
                })}
          </Button>
        </VStack>
      </Layout>
    </>
  );
};

const defaultParams: IQueryParams = { limit: 10, sort: "asc" };

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: getProductsQueryKey(defaultParams),
    queryFn: () => getProductsQuery(defaultParams),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
