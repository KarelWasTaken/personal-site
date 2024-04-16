"use client";

import Image from "next/image";
import styles from "./BlogPostPreview.module.css"

type Props = {
    articleId: string;
  };

const BlogPostPreview = (props : Props) => {
    return(
        
        <div className={styles.mainbox}>
            <Image className={styles.imagestyle}
                src = "/1702272510.avif"
                width={0.9*408}
                height={0.9*275}
                alt="Article title"
            />
            <div className={styles.textstyle}>
                <h1 className={styles.articleh1}>Nadpis článku</h1>
                <h3>23. 10. 2024</h3>
                <p className={styles.articlep}>Popis článku lorem ipsum dolor sit amet et lorem ipsum dolor sit amet etlorem ipsum dolor sit amet etlorem ipsum dolor sit amet etlorem ipsum dolor sit amet etlorem ipsum dolor sit amet et.</p>
            </div>
        </div>
    );
}

export default BlogPostPreview;