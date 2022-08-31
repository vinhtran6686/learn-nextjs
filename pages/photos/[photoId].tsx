import { useRouter } from "next/router";
import * as React from "react";

export interface PhotoDetailPageProps {}

export default function PhotoId(props: PhotoDetailPageProps) {
  const router = useRouter();
  console.log(router);
  return <>
    <div>This is Photo id page  </div>
    {/* http://localhost:3000/photos/123123 */}
    {/* http://localhost:3000/photos/123123?abc=123 */}
    {/* {"abc":"123","photoId":"123123"} */}
    {/* abc is query param, photoId is path param or route param */}
    {JSON.stringify(router.query)}
  </>;
}
