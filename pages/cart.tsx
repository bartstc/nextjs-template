import { useIntl } from "react-intl";

import Head from "next/head";

import { DeleteIcon } from "@chakra-ui/icons";
import { Button, VStack } from "@chakra-ui/react";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import { Layout, PageHeader } from "shared/Layout";
import { useNotImplementedYetToast } from "shared/Toast";

import {
  getCartQuery,
  getCartQueryKey,
  useCartQuery,
} from "modules/carts/infrastructure";

interface IProps {
  cartId: number;
}

const Cart = ({ cartId }: IProps) => {
  const { formatMessage } = useIntl();
  const notImplemented = useNotImplementedYetToast();
  // todo: handle error
  const { data, isLoading } = useCartQuery(cartId);

  if (isLoading || !data) {
    return <h1>Loading ...</h1>;
  }

  console.log(data);

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
            <Button leftIcon={<DeleteIcon />} onClick={notImplemented}>
              {formatMessage({
                id: "cart-clear-all",
                defaultMessage: "Clear cart",
              })}
            </Button>
          </PageHeader>
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
    queryKey: getCartQueryKey(userCartId),
    queryFn: () => getCartQuery(userCartId),
  });

  return {
    props: {
      cartId: userCartId,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Cart;
