import type { Metadata } from "next";
import BlogPostPreview from "@/components/BlogPostPreview"
import styles from "./page.module.css"

export const metadata: Metadata = {
    title: "Blog",
    description: "Blogové příspěvky Karla Vaňka",
  };

export default function Blog() {

    let articleIds = ["tam", "ten", "tamten"];

    return (
      <>
        <h1>Blog</h1>
        <div className={styles.articleboxparent}>
          <div className={styles.articlebox}>
            {articleIds.map((id) => {
              return <BlogPostPreview articleId={id} key={id}/>
            })}
          </div>
        </div>
      </>
  );
}