import type { Metadata } from "next";
import BlogPostPreview from "@/components/BlogPostPreview"
import styles from "./page.module.css"
import Article from "@/models/article";
import { ArticleType } from "@/types/blog";

export const metadata: Metadata = {
    title: "Blog",
    description: "Blogové příspěvky Karla Vaňka",
  };

const getArticles = async() => {
  try {
    const res = await fetch(process.env.BASE_URL + 'api/articles', {
      cache: "no-store",
    });

    if(!res.ok) throw new Error('Failed to fetch topics');
    return res.json();
  } catch (error) {
    console.log("Error loading topics ", error)
  }

};

export default async function Blog() {

    const { articles } = await getArticles();

    return (
      <>
        <h1>Blog</h1>
        <div className={styles.articleboxparent}>
          <div className={styles.articlebox}>
            {articles.map((article : ArticleType) => {
              return <BlogPostPreview title={article.title} perex={article.perex} date={article.date} key={article.id}/>
            })}
          </div>
        </div>
      </>
  );
}