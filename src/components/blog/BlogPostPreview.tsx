"use client";

import Image from "next/image";
import styles from "./BlogPostPreview.module.css"

type Props = {
    title: String;
    perex: String;
    date: Date;
  };

const BlogPostPreview = (props : Props) => {
    const date = new Date(props.date);
    return(
        
        <div className={styles.mainbox}>
            <Image className={styles.imagestyle}
                src = "/1702272510.avif"
                width={0.9*408}
                height={0.9*275}
                alt="Article title"
            />
            <div className={styles.textstyle}>
                <h1 className={styles.articleh1}>{props.title}</h1>
                <h3>{`${date.getDay()}. ${date.getMonth()}. ${date.getFullYear()}`}</h3>
                <p className={styles.articlep}>{props.perex}</p>
            </div>
        </div>
    );
}

export default BlogPostPreview;