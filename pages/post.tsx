import Layout from "../components/Layout";
import Link from "next/link";
import Post from "../models/posts";
import { loadPosts } from "../libs/loadPost";

interface IProps {
  shows: Array<Post.RootObject>;
}
type TPostLink = {
  id: number;
  name: string;
};

const PostLink: React.FC<TPostLink> = ({ id, name }) => (
  <li>
    <Link as={`/postDetail?id=${id}`} href={`/postDetail?name=${name}`}>
      <a>{name}</a>
    </Link>
  </li>
);

const Post: React.FC<IProps> = ({ shows }) => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {shows.map(({ show }, index) => (
        <PostLink key={index} id={show.id} name={show.name} />
      ))}
    </ul>
  </Layout>
);
export async function getStaticProps() {
  const data = await loadPosts(`?q=batman`);
  return {
    props: { shows: data },
  };
}

export default Post;
