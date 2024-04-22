"use client";

import { ArticleType } from "@/types/blog";
import Image from "next/image";
import BlogPostPreview from "./BlogPostPreview";
import { useEffect, useState } from "react";
import styles from "./BlogPostPreviewColumn.module.scss"


type Props = {
    rendered: number;
  };


const BlogPostPreviewColumn = (props: Props) => {
    const renderPerBlock = 3;
    

    //let articles : ArticleType[] = [];
    const [articless, setArticles] = useState([]);
    const [articlesRendered, setArticlesRendered] = useState(props?.rendered ? props.rendered : 0);
    const [stop, setStop] = useState(false);
    

    useEffect(() => {
        const url = new URL('http://localhost:3000/api/articles'); // Assuming your API route is at '/api/articles'
        url.searchParams.append('limit', renderPerBlock.toString()); // Add query parameters
        url.searchParams.append('skip', articlesRendered.toString());
        setArticlesRendered(articlesRendered + renderPerBlock);
        fetch(url.toString())
            .then((res) => res.json())
            .then(({articles}) => {
                setArticles(articles)
        })
    }, [])

    const clickedButton = () =>{
        const url = new URL('http://localhost:3000/api/articles'); // Assuming your API route is at '/api/articles'
        url.searchParams.append('limit', renderPerBlock.toString()); // Add query parameters
        url.searchParams.append('skip', articlesRendered.toString());
        setArticlesRendered(articlesRendered + renderPerBlock);
        fetch(url.toString())
            .then((res) => res.json())
            .then(({articles}) => {
                setArticles(articless.concat(articles));
                if(renderPerBlock != articles.length) setStop(true);
        })
    }

    return(
        <>
            {articless.length > 0 ? 
                articless.map((article : ArticleType) => { return <BlogPostPreview title={article.title} perex={article.perex} date={article.date} key={article.id}/>})
            : <p>Loading...</p>}
            {!stop && <button className={styles.button} onClick={clickedButton}>Hello</button>}
        </>
    );
}

export default BlogPostPreviewColumn;