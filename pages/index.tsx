import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import Link from "next/link";
import Header from "../components/Header/header";
import Generator from "../components/Generator/generator";
import Footer from "../components/Footer/footer";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Generator />
      <Footer />
    </Layout>
  );
}
