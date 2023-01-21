import { ComponentProps, Fragment } from "react";
import { useIntl } from "react-intl";

import { useRouter } from "next/router";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  VStack,
  HStack,
  Button,
  Text,
  Divider,
  Center,
} from "@chakra-ui/react";
import { useSecondaryTextColor } from "theme";

import { useNotImplementedYetToast } from "shared/Toast";

import { CartItem } from "./CartItem";

interface IProps {
  cartProducts: ComponentProps<typeof CartItem>[];
}

const CartsList = ({ cartProducts }: IProps) => {
  const { formatMessage } = useIntl();
  const { push } = useRouter();
  const notImplemented = useNotImplementedYetToast();

  const secondaryColor = useSecondaryTextColor();

  const subtotal = cartProducts
    .map((cart) => cart.price)
    .reduce((a, b) => a + b, 0);

  return (
    <VStack w="100%" spacing={8}>
      {cartProducts.map((cart) => (
        <Fragment key={cart.id}>
          <CartItem {...cart} />
          <Divider />
        </Fragment>
      ))}
      <VStack w="100%" align="start" spacing={1}>
        <HStack
          w="100%"
          align="flex-start"
          justify="space-between"
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="semibold"
        >
          <Text>
            {formatMessage({
              id: "carts-list-subtotal",
              defaultMessage: "Subtotal",
            })}
          </Text>
          <Text>${subtotal}</Text>
        </HStack>
        <Text fontSize="sm" color={secondaryColor}>
          {formatMessage({
            id: "carts-list-shipment-description",
            defaultMessage:
              "Shipping and taxes will be calculated at checkout.",
          })}
        </Text>
      </VStack>
      <VStack w="100%">
        <Button w="100%" colorScheme="orange" onClick={notImplemented}>
          {formatMessage({
            id: "carts-list-checkout",
            defaultMessage: "Checkout",
          })}
        </Button>
        <HStack>
          <Text fontSize="sm">
            {formatMessage({ id: "or", defaultMessage: "or" })}
          </Text>
          <Button
            size="sm"
            variant="link"
            colorScheme="orange"
            rightIcon={<ArrowForwardIcon />}
            onClick={() => push("/products")}
          >
            {formatMessage({
              id: "carts-list-continue-shopping",
              defaultMessage: "Continue shopping",
            })}
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export { CartsList };
