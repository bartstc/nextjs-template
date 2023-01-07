import React from "react";
import { useIntl } from "react-intl";

import {
  chakra,
  Box,
  Button,
  HStack,
  Text,
  VStack,
  SimpleGrid,
  GridItem,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useSecondaryTextColor } from "theme";

import { PageHeader } from "shared/Layout";
import { useNotImplementedYetToast } from "shared/Toast";

import { IProduct } from "../types";
import { StarRating } from "./StarRating";
import { useCategoryLabel } from "./useCategoryLabel";

interface IProps {
  product: IProduct;
  onBack: () => void;
}

const ProductDetails = ({ product, onBack }: IProps) => {
  const { formatMessage } = useIntl();
  const categoryLabel = useCategoryLabel(product.category);
  const secondaryColor = useSecondaryTextColor();
  const notImplemented = useNotImplementedYetToast();

  return (
    <SimpleGrid
      w="100%"
      maxW="1000px"
      columns={{ base: 1, lg: 2 }}
      gap={{ base: 6, md: 8 }}
    >
      <GridItem colSpan={1}>
        <Box overflow="hidden" rounded="xl">
          <Box
            h={{ base: 64, md: "lg" }}
            w="100%"
            bgSize="cover"
            bgPos="center"
            style={{
              backgroundImage: `url(${product.image})`,
            }}
          />
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <VStack spacing={{ base: 1, lg: 3 }} w="100%" align="start">
          <PageHeader
            title={product.title}
            description={formatMessage(
              {
                id: "products-detail-collection",
                defaultMessage: "A part of our {category} collection.",
              },
              {
                category: (
                  <chakra.span fontStyle="italic">{categoryLabel}</chakra.span>
                ),
              }
            )}
          />
          <HStack w="100%" height="24px" spacing={4}>
            <Text fontWeight="semibold" fontSize={{ base: "lg", md: "xl" }}>
              ${product.price}
            </Text>
            <Divider orientation="vertical" />
            <StarRating rating={product.rating.rate} />
            <Button variant="link" colorScheme="orange">
              {formatMessage(
                {
                  id: "products-details-reviews",
                  defaultMessage: "See all {number} reviews",
                },
                { number: product.rating.count }
              )}
            </Button>
          </HStack>
          <Text
            color={secondaryColor}
            fontSize={{ base: "md", md: "lg" }}
            py={{ base: 4, md: 6 }}
          >
            {product.description}
          </Text>
          <VStack w="100%">
            <Button w="100%" colorScheme="orange" onClick={notImplemented}>
              {formatMessage({
                id: "products-add-to-cart",
                defaultMessage: "Add to cart",
              })}
            </Button>
            <Button w="100%" variant="outline" onClick={onBack}>
              {formatMessage({
                id: "products-back-to-list",
                defaultMessage: "Back to products' list",
              })}
            </Button>
          </VStack>
          <Accordion w="100%" pt={4} defaultIndex={[0]}>
            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {formatMessage({
                    id: "products-details-features",
                    defaultMessage: "Features",
                  })}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {formatMessage({
                    id: "products-details-care",
                    defaultMessage: "Care",
                  })}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {formatMessage({
                    id: "products-details-shipping",
                    defaultMessage: "Shipping",
                  })}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {formatMessage({
                    id: "products-details-returns",
                    defaultMessage: "Returns",
                  })}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      </GridItem>
    </SimpleGrid>
  );
};

export { ProductDetails };
