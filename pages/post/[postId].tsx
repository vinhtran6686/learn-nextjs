import { useRouter } from "next/router";
import * as React from "react";

export interface PostDetailPageProps {}

export default function PostId(props: PostDetailPageProps) {
  const router = useRouter();
  console.log(router);
  return <div>This is post id page</div>;
}
