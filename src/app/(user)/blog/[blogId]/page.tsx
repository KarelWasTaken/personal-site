import { notFound } from "next/navigation"
import { Metadata } from "next";

type Props = {
    params: {
        blogId: string;
    };
};

export const generateMetadata = ({params}:Props): Metadata => {
    return{
        title: "Blogový příspěvek " + params.blogId
    };
}

export default function BlogPost({params}:Props) {
    if(params.blogId == "neexistuje") notFound();
    return <h1>Blog post {params.blogId}</h1>;
}