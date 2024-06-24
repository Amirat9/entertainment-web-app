import { Schema, model, models } from 'mongoose';

const thumbnailSchema = new Schema(
  {
    trending: {
      small: { type: String, required: false },
      large: { type: String, required: false },
    },
    regular: {
      small: { type: String, required: true },
      medium: { type: String, required: true },
      large: { type: String, required: true },
    },
  },
  { _id: false }
);

const contentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    isBookmarked: {
      type: Boolean,
      required: true,
    },
    isTrending: {
      type: Boolean,
      default: false,
      required: true,
    },
    thumbnail: {
      type: thumbnailSchema,
      required: true,
    },
  },
  { _id: true }
);

const Content = models.Content || model('Content', contentSchema);

export default Content;
