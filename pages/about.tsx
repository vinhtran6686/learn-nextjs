import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout";

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const route = useRouter();
  console.log("router query: ",route.query)
  return (
    <Layout>
      <h1>About Next.js</h1>
    </Layout>
  );
}
