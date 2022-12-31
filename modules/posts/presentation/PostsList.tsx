import { useState } from "react";

import { Button } from "@chakra-ui/react";

import { usePostsQuery } from "../infrastructure";

export const PostList = () => {
  const [postCount, setPostCount] = useState(10);
  const { data, isLoading, isFetching } = usePostsQuery(postCount);

  if (isLoading) return <div>Loading</div>;

  return (
    <section>
      <ul>
        {data?.map((post, index) => (
          <li key={post.id}>
            <div>
              <span>{index + 1}. </span>
              <a href="#">{post.title}</a>
            </div>
          </li>
        ))}
      </ul>
      {postCount <= 90 && (
        <Button
          onClick={() => setPostCount(postCount + 10)}
          isDisabled={isFetching}
        >
          {isFetching ? "Loading..." : "Show More"}
        </Button>
      )}
      <style jsx>{`
        section {
          padding-bottom: 20px;
        }

        li {
          display: block;
          margin-bottom: 10px;
        }

        div {
          align-items: center;
          display: flex;
        }

        a {
          font-size: 14px;
          margin-right: 10px;
          text-decoration: none;
          padding-bottom: 0;
          border: 0;
        }

        span {
          font-size: 14px;
          margin-right: 5px;
        }

        ul {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </section>
  );
};
