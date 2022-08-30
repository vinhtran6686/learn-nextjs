const Slug = (props: any) => {
  return <p>This is slug</p>;
};

export async function getStaticProps(abc: any) {
  console.log(abc);
  return {
    props: {},
  };
}

export async function getStaticPaths(abc: any) {
  console.log(abc);
  return {
    props: {},
  };
}
export default Slug;
