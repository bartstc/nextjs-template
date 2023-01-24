/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { useIntl } from "react-intl";

import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { useClearCart } from "../../infrastructure";
import { useClearCartNotifications } from "./useClearCartNotifications";

interface IProps {
  cartId: number;
}

const ClearCartButton = ({ cartId }: IProps) => {
  const { formatMessage } = useIntl();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const [clear, isLoading] = useClearCart(cartId);
  const [notifySuccess, notifyFailure] = useClearCartNotifications();

  return (
    <>
      <Button leftIcon={<DeleteIcon />} onClick={onOpen} isLoading={isLoading}>
        {formatMessage({
          id: "cart-clear-all",
          defaultMessage: "Clear cart",
        })}
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef as any}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {formatMessage({
                id: "cart-clear-all",
                defaultMessage: "Clear cart",
              })}
            </AlertDialogHeader>

            <AlertDialogBody>
              {formatMessage({
                id: "alert-confirm-label",
                defaultMessage:
                  "Are you sure? You can't undo this action afterwards. (because this app uses a fake API, this delete request will be mocked and won't affect the cart)",
              })}
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef as any} onClick={onClose}>
                {formatMessage({ id: "cancel", defaultMessage: "Cancel" })}
              </Button>
              <Button
                colorScheme="red"
                onClick={async () => {
                  try {
                    await clear();
                    notifySuccess();
                  } catch {
                    notifyFailure();
                  } finally {
                    onClose();
                  }
                }}
                isLoading={isLoading}
                ml={3}
              >
                {formatMessage({ id: "confirm", defaultMessage: "Confirm" })}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export { ClearCartButton };
