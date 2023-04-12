import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Nav from "./Nav";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
