import type { Metadata } from "next";
import BlogPostPreview from "@/components/blog/BlogPostPreview"
import styles from "./page.module.css"
import Article from "@/models/article";
import { ArticleType } from "@/types/blog";
import { GetAllArticles } from "@/data/articles";
import BlogPostPreviewColumn from "@/components/blog/BlogPostPreviewColumn";

export const metadata: Metadata = {
    title: "Blog",
    description: "Blogové příspěvky Karla Vaňka",
  };

export default async function Blog() {

  
    const articles = await GetAllArticles();

    

    return (
      <>
        <h1>Blog</h1>
        <div className={styles.articleboxparent}>
          <div className={styles.articlebox}>
            <BlogPostPreviewColumn />
          </div>
        </div>
      </>
  );
}