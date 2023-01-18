import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { httpService } from "utils/http";

import { ICart } from "../types";

export const getCartQueryKey = (cartId: string) => ["carts", cartId];

export const getCartQuery = async (cartId: string): Promise<ICart> => {
  return await httpService.get<ICart>(`carts/${cartId}`);
};

export const useCartQuery = (
  cartId: string,
  options?: UseQueryOptions<ICart>
) => {
  return useQuery({
    queryKey: getCartQueryKey(cartId),
    queryFn: () => getCartQuery(cartId),
    ...options,
  });
};
