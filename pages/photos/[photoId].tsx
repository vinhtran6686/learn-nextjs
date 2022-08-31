import { useRouter } from "next/router";
import * as React from "react";

export interface PhotoDetailPageProps {}

export default function PhotoId(props: PhotoDetailPageProps) {
  const router = useRouter();
  console.log(router);
  return <div>This is Photo id page</div>;
}
