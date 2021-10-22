import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
