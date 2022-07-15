import Cors from 'cors';
import Post from '../../../models/Post';
import connectDB from '../../../util/mongodb';
import initMiddleware from '../../../lib/init-middleware';

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  })
);

async function handler(req, res) {
  await cors(req, res);
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const posts = await Post.find({}).sort({ _id: -1 });
        res.status(200).json(posts);
      } catch (err) {
        res.status(400).json({ err: err.message });
      }
      break;

    case 'POST':
      try {
        const { title, text, image, date } = req.body;
        if (!title) {
          return res.status(200).json({
            success: false,
            data: { error: 'Please, set the title of post.' },
            type: 'title',
          });
        }

        if (!date) {
          return res.status(200).json({
            success: false,
            data: { error: 'Please, set the date of post.' },
            type: 'date',
          });
        }

        if (!image) {
          return res.status(200).json({
            success: false,
            data: { error: 'Please, set the image of post.' },
            type: 'image',
          });
        }

        if (!text) {
          return res.status(200).json({
            success: false,
            data: { error: 'Please, set the text of post.' },
            type: 'text',
          });
        }

        const post = await Post.create({ title, text, image, date });
        res.status(201).json({ success: true, data: post });
      } catch (err) {
        return res.status(400).json({ err: err.message });
      }
      break;

    default:
  }
}

export default connectDB(handler);
