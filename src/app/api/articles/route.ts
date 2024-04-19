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

export async function GET(req: NextRequest){
    await connectMongoDB();
    const articles = await Article.find();
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