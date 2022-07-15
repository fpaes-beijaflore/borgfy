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
  const { method } = req;
  await cors(req, res);

  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Cache-Control', 's-maxage=120', 'stale-while-revalidate');

  switch (method) {
    case 'GET':
      const { _id } = req.query;
      const post = await Post.findOne({ _id });
      res.status(200).json(post);
      break;

    case 'DELETE':
      try {
        const { _id } = req.query;
        if (!_id) {
          return res.status(400).json({
            success: false,
            data: { error: 'Please, set the id of post.' },
            type: 'id',
          });
        }
        const deleted_post = await Post.findByIdAndRemove({ _id });
        return res.status(200).json({ success: true, data: deleted_post });
      } catch (err) {
        res.status(400).json({ err: err.message });
      }
      break;

    default:
  }
}

export default connectDB(handler);
