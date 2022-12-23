import { dehydrate, QueryClient } from "@tanstack/react-query";

import { Layout, Header, Heading } from "shared/Layout";

import { getPostsQuery } from "modules/posts/infrastructure";
import { PostList } from "modules/posts/presentation";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Heading>ℹ️ This page shows how to use SSG with React-Query.</Heading>
      <PostList />
    </Layout>
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
