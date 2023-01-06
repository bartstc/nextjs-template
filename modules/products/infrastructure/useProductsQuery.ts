import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { IMeta, IQueryParams } from "types";

import { buildUrl } from "utils";
import { httpService } from "utils/http";

import { IProduct } from "../types";
import { IProductDto } from "./types";

const defaultParams = { limit: 10 };

export const getProductsQueryKey = (params: IQueryParams = defaultParams) => [
  "products",
  params,
];

interface ICollection {
  products: IProduct[];
  meta: IMeta;
}

export const getProductsQuery = async (
  params: IQueryParams = defaultParams
): Promise<ICollection> => {
  return await httpService
    .get<IProductDto[]>(buildUrl("products", params))
    .then((res) => ({
      products: res,
      meta: {
        ...params,
        total: 20,
      },
    }));
};

export const useProductsQuery = (
  params: IQueryParams = defaultParams,
  options?: UseQueryOptions<ICollection>
) => {
  return useQuery({
    queryKey: getProductsQueryKey(params),
    queryFn: () => getProductsQuery(params),
    ...options,
  });
};
