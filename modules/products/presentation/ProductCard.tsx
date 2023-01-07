import { useIntl } from "react-intl";

import { useRouter } from "next/router";

import { Box, Text, VStack, HStack, Button } from "@chakra-ui/react";
import { useSecondaryTextColor } from "theme";

import { useNotImplementedYetToast } from "shared/Toast";

import { Category } from "../types";
import { useCategoryLabel } from "./useCategoryLabel";

interface IProps {
  id: number;
  title: string;
  category: Category;
  price: number;
  imageUrl: string;
}

const ProductCard = ({ title, category, price, imageUrl, id }: IProps) => {
  const { push } = useRouter();
  const { formatMessage } = useIntl();
  const categoryLabel = useCategoryLabel(category);
  const categoryColor = useSecondaryTextColor();
  const notImplemented = useNotImplementedYetToast();

  return (
    <VStack spacing={3} overflow="hidden" rounded="lg">
      <Box
        onClick={() => push(`/products/${id}`)}
        cursor="pointer"
        h={64}
        w="lg"
        bgSize="cover"
        bgPos="center"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <VStack w="100%" spacing={0} align="flex-start">
        <HStack
          w="100%"
          justify="space-between"
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="semibold"
          spacing={6}
        >
          <Text
            isTruncated
            onClick={() => push(`/products/${id}`)}
            cursor="pointer"
          >
            {title}
          </Text>
          <Text>${price}</Text>
        </HStack>
        <Text
          fontStyle="italic"
          fontSize={{ base: "sm", md: "md" }}
          color={categoryColor}
        >
          {categoryLabel}
        </Text>
      </VStack>
      <Button w="100%" onClick={notImplemented}>
        {formatMessage({
          id: "products-add-to-cart",
          defaultMessage: "Add to cart",
        })}
      </Button>
    </VStack>
  );
};

export { ProductCard };
