import mongoose from 'mongoose';

var Schema = mongoose.Schema;

var Post = new Schema({
  title: {
    type: String,
    required: [true, 'Please, set the title of post.'],
  },
  text: {
    type: String,
    required: [true, 'Please, set the text of the post'],
  },
  image: {
    type: String,
    required: [true, 'Please, set the image of the post'],
  },
  date: {
    type: Date,
    required: [true, 'Please, set the date of the post'],
  },
});

mongoose.models = {};

var Post = mongoose.model('Post', Post);

export default Post;
