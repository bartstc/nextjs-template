import { useIntl } from "react-intl";

import { Category } from "../types";

export const useCategoryLabel = (category: Category) => {
  const { formatMessage } = useIntl();
  const message = messages[category];

  return formatMessage(message) ?? category;
};

const messages = {
  [Category.Women_clothing]: {
    id: "products-category-women-clothing",
    defaultMessage: "Women's clothing",
  },
  [Category.Men_clothing]: {
    id: "products-category-men-clothing",
    defaultMessage: "Men's clothing",
  },
  [Category.Jewelery]: {
    id: "products-category-jewelery",
    defaultMessage: "Jewelery",
  },
  [Category.Electronics]: {
    id: "products-category-electronics",
    defaultMessage: "Electronics",
  },
};
