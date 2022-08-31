import Layout from "../components/Layout";
import Link from "next/link";
import Post from "../models/posts";
import { loadPosts } from "../libs/loadPost";
import { GetStaticPathsContext, GetStaticProps } from "next";

interface PostProps {
  shows: Array<Post.RootObject>;
}
type TPostLink = {
  id: number;
  name: string;
};

const PostLink: React.FC<TPostLink> = ({ id, name }) => (
  <li>
    <Link as={`/post/${id}?name=${name}`} href={`/post/${id}?name=${name}`}>
      <a>{name}</a>
    </Link>
  </li>
);

const Post: React.FC<PostProps> = ({ shows }) => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {shows.map(({ show }, index) => (
        <PostLink key={index} id={show.id} name={show.name} />
      ))}
    </ul>
  </Layout>
);

export const getStaticProps: GetStaticProps<PostProps> = async (
  context: GetStaticPathsContext
) => {
  console.log("context:", context);
  const data = await loadPosts(`?q=batman`);
  return {
    props: { shows: data },
  };
};

export default Post;
