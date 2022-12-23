import { Layout, Header, Heading } from "shared/Layout";

import { PostList } from "modules/posts/presentation";

const ClientOnly = () => {
  return (
    <Layout>
      <Header />
      <Heading>ℹ️ This data is loaded on client and not prefetched</Heading>
      <PostList />
    </Layout>
  );
};

export default ClientOnly;
