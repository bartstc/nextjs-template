import { useQuery } from "@tanstack/react-query";

import { httpService } from "utils/http";

import { IPost } from "../types";

export const getPostsQuery = async (limit = 10) => {
  const posts = await httpService.get<IPost[]>("posts");
  return posts.filter((post) => (post.id as unknown as number) <= limit);
};

export const usePostsQuery = (limit = 10) => {
  return useQuery({
    queryKey: ["posts", limit],
    queryFn: () => getPostsQuery(limit),
  });
};
