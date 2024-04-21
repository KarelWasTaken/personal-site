import { GetAllArticles } from "@/data/articles";
import connectMongoDB from "@/libs/mongodb";
import Article from "@/models/article";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    const session = await getServerSession()
    if(!session) return NextResponse.json({message: "Not authenticated"}, {status: 401})
        
    const {title, perex, date} = await request.json();
    await connectMongoDB();
    await Article.create({title, perex, date});
    return NextResponse.json({message: "Article Created"}, {status: 201});
}

export async function GET(request: NextRequest){

    const url = new URL(request.url);
    let limit : number = 10;
    let skip : number = 0;
    try{
        url.searchParams.get('limit') && (limit = parseInt(url.searchParams.get('limit')!));
        url.searchParams.get('skip') && (skip = parseInt(url.searchParams.get('skip')!));
    } catch{
        console.log("Invalid props")
    }
    const articles = await GetAllArticles(limit, skip);
    return NextResponse.json({articles});
}

export async function DELETE(request: NextRequest) {
    const session = await getServerSession()
    if(!session) return NextResponse.json({message: "Not authenticated"}, {status: 401})

    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Article.findByIdAndDelete(id);
    return NextResponse.json({message: "Topic deleted"}, {status: 200})
}