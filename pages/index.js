import ArticleList from "@/components/ArticleList";
import Head from "next/head";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name="keywords" content="web development, programming" />
      </Head>

      <ArticleList articles={articles} />
    </div>
  );
}

// fetch data and pass into your page as props
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  //  return the articles we fetched as props
  return {
    props: {
      articles,
    },
  };
};
