import mongoose, {Schema} from "mongoose";

const articleSchema = new Schema(
    {
        title: String,
        perex: String,
        date: Date,
    }
);

const Article = mongoose.models.Article || mongoose.model('Article', articleSchema);

export default Article;