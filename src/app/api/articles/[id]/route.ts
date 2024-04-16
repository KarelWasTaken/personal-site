import connectMongoDB from "@/libs/mongodb";
import Article from "@/models/article";
import { NextRequest, NextResponse } from "next/server";

type Props = {
    params: {
        id: string;
    };
};

export async function PUT(request: NextRequest,{params} : Props) {
    const { id } = params;
    const { newTitle: title, newPerex: perex, newDate: date} = await request.json();
    await connectMongoDB();
    await Article.findByIdAndUpdate(id, {title, perex, date});
    return NextResponse.json({message: "Article updated"}, {status: 200})
}

export async function GET(request: NextRequest, {params} : Props){
    const { id } = params;
    await connectMongoDB();
    const article = await Article.findOne({_id: id});
    return NextResponse.json({article}, {status: 200});
}