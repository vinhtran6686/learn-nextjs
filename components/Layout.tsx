import Header from "./Header";
import styles from "../styles/Home.module.css";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};
type Props = {
  children: JSX.Element | JSX.Element[];
};

// const Layout: React.FC<Props> = (props) => (
//   <div style={layoutStyle}>
//     <Header />
//     {props.children}
//   </div>
// );

const Layout = (props: Props) => (
  <div className={styles.container}>
    <main className={styles.main}>
      <Header />
      {props.children}
    </main>
  </div>
);

export default Layout;
