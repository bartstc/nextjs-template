import { useQuery } from "@tanstack/react-query";

import { IQueryParams } from "types";

import { buildUrl } from "utils";
import { httpService } from "utils/http";

import { IProduct } from "../types";
import { IProductDto } from "./types";

export const getProductsQueryKey = (params: IQueryParams = {}) => [
  "products",
  params,
];

export const getProductsQuery = async (
  params: IQueryParams = {}
): Promise<IProduct[]> => {
  return await httpService.get<IProductDto[]>(buildUrl("products", params));
};

export const useProductsQuery = (params: IQueryParams = {}) => {
  return useQuery({
    queryKey: getProductsQueryKey(params),
    queryFn: () => getProductsQuery(params),
  });
};
