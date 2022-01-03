import Header from "./header";
import Head from "next/head";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      <Head>
        <title>Okoli Ugochuwku Portfolio site</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
