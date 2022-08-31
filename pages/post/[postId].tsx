import { useRouter } from "next/router";
import * as React from "react";
import Layout from "../../components/Layout";

export interface PostDetailPageProps {}

export default function PostId(props: PostDetailPageProps) {
  const router = useRouter();
  console.log(router);
  return (
    <Layout>
      <h1>{JSON.stringify(router.query)}</h1>
      <div>Title is {router.query.name}</div>
    </Layout>
  );
}
