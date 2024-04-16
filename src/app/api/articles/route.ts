import connectMongoDB from "@/libs/mongodb";
import Article from "@/models/article";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    const {title, perex, date} = await request.json();
    await connectMongoDB();
    await Article.create({title, perex, date});
    return NextResponse.json({message: "Article Created"}, {status: 201});
}

export async function GET(){
    await connectMongoDB();
    const articles = await Article.find();
    return NextResponse.json({articles});
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Article.findByIdAndDelete(id);
    return NextResponse.json({message: "Topic deleted"}, {status: 200})
}