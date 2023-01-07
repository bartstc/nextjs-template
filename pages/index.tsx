import Head from "next/head";

import { VStack } from "@chakra-ui/react";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import { Layout } from "shared/Layout";

import {
  FeatureSection,
  HeroSection,
  PricingSection,
} from "modules/marketing/presentation";
import {
  getProductsQuery,
  getProductsQueryKey,
  useProductsQuery,
} from "modules/products/infrastructure";

const Home = () => {
  // todo: handle error
  const { data } = useProductsQuery();

  return (
    <>
      <Head>
        <title>E-commerce Demo App</title>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout maxW="1340px">
        <VStack display="stretch" spacing={{ base: 8, lg: 20 }}>
          <HeroSection productNumber={data?.meta.total ?? 0} />
          <FeatureSection />
          <PricingSection />
        </VStack>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: getProductsQueryKey(),
    queryFn: () => getProductsQuery(),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60 * 60 * 24,
  };
}

export default Home;
