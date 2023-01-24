import { useIntl } from "react-intl";

import { useToast } from "shared/Toast";

export const useClearCartNotifications = () => {
  const { formatMessage } = useIntl();
  const toast = useToast();

  const success = () =>
    toast({
      status: "success",
      title: formatMessage({
        id: "clear-cart-success-title",
        defaultMessage: "Clear cart",
      }),
      description: formatMessage({
        id: "clear-cart-success-description",
        defaultMessage: "Your cart has been successfully cleared.",
      }),
    });

  const failure = () =>
    toast({
      status: "error",
      title: formatMessage({
        id: "clear-cart-success-title",
        defaultMessage: "Clear cart",
      }),
      description: formatMessage({
        id: "clear-cart-failure-description",
        defaultMessage:
          "Something went wrong with clearing your cart. Pleas try again or contact us.",
      }),
    });

  return [success, failure] as const;
};
