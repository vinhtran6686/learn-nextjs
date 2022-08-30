import Layout from "../components/Layout";
import { withRouter } from "next/router";

const PostDetail = withRouter((props) => { 
  return (
    <Layout>
      <h1>{props.router.query.name}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
});

export async function getStaticProps(abc:any) { 
  return {
    props:{}
  }
}
 
export default PostDetail;
