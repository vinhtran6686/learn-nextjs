import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/Header";
import Layout from "../components/Layout";
// import Post from "../models/posts";
// interface IProps {
//   shows: Array<Post.RootObject>;
// }
const Home = () => {
  return (
    <Layout>
      <h1>Hello Next.js</h1>
      {/* <ul>
        {props.shows.map(({ show }) => (
          <li key={show.id}>
            <Link as={`/postDetail/${show.id}`} href={`/postDetail?id=${show.name}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul> */}
    </Layout>
  );
};
// export async function getStaticProps() {
//   const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
//   const data = await res.json();  
//   return {
//     props: { shows: data },
//   };
// }

export default Home;
