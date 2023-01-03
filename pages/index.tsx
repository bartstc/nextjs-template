import Head from "next/head";

import { VStack, Box } from "@chakra-ui/react";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import {
  FeatureSection,
  HeroSection,
  PricingSection,
} from "modules/marketing/presentation";
import { getPostsQuery } from "modules/posts/infrastructure";

import { ToggleModeButton } from "../shared/Layout";

const Home = () => {
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
      <ToggleModeButton />
      <Box px={{ base: 3, md: 4 }} maxW="1400px" m="0 auto">
        <VStack display="stretch" spacing={{ base: 8, lg: 20 }}>
          <HeroSection />
          <FeatureSection />
          <PricingSection />
        </VStack>
      </Box>
    </>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts", 10],
    queryFn: () => getPostsQuery(10),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
