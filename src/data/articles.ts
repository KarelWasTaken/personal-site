import connectMongoDB from "@/libs/mongodb";
import Article from "@/models/article";
import { ArticleType } from "@/types/blog";
import { getServerSession } from "next-auth";

export async function AddArticle(article: ArticleType){
    const session = await getServerSession()
    if(!session) return false;
        
    const {title, perex, date} = await article;
    await connectMongoDB();
    await Article.create({title, perex, date});
    return true;
}

export async function GetAllArticles(limit = 10, skip = 0){
    await connectMongoDB();
    const articles = await Article.find().sort({date: -1}).limit(limit).skip(skip);
    return articles;
}

export async function DeleteArticle(id: string) {
    const session = await getServerSession()
    if(!session) return false;

    await connectMongoDB();
    await Article.findByIdAndDelete(id);
    return true;
}