import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "../context/Context";
import Header from "../components/Header/header";
import Generator from "../components/Generator/generator";
import Footer from "../components/Footer/footer";
import { GetStaticProps } from "next";

export default function Home() {
  const { deneme } = useContext(Context);
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <Generator />
      <Footer />

      {/* <p>{deneme}</p> */}
    </Layout>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// };
