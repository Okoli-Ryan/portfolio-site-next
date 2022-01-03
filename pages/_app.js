import '../styles/globals.css'
import Layout from "../components/layout";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  const url = `https://localhost:3000${router.route}`;

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp
