import { useIntl } from "react-intl";

import { useToast } from "./useToast";

export const useNotImplementedYetToast = () => {
  const { formatMessage } = useIntl();
  const toast = useToast();

  return () =>
    toast({
      status: "info",
      title: formatMessage({
        id: "toast-not-implemented-yet-title",
        defaultMessage: "Feature not available yet",
      }),
      description: formatMessage({
        id: "toast-not-implemented-yet-description",
        defaultMessage: "We are working on it day and night :))",
      }),
    });
};
