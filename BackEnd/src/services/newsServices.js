<<<<<<< HEAD
import News from "../models/News.js";

export const createService = (body) => News.create(body);

export const findAllService = async (offset, limit) =>
  await News.find()
    .sort({ _id: -1 })
    .skip(offset)
    .limit(limit)
    .populate("user")
    .populate("likes")
    .populate("comments");

export const countNews = () => News.countDocuments();

export const topNewsService = () =>
  News.findOne().sort({ _id: -1 }).populate("user");

export const findByIdService = (id) => News.findById(id).populate("user");

export const searchByTitleService = (title) =>
  News.find({
    title: { $regex: `${title || ""}`, $options: "i" },
  })
    .sort({ _id: -1 })
    .populate("user");

export const byUserService = (id) =>
  News.find({ user: id }).sort({ _id: -1 }).populate("user");

export const updateService = (id, title, text, banner) =>
  News.findOneAndUpdate(
    { _id: id },
    { title, text, banner },
    { rawResult: true }
  );

export const deleteService = (id) => News.findOneAndDelete({ _id: id });

export const likeNewsService = (idNews, userId) =>
  News.findOneAndUpdate(
    { _id: idNews, "likes.userId": { $nin: [userId] } },
    { $push: { likes: { userId, createsAt: new Date() } } }
  );

export const deleteLikeNews = (idNews, userId) =>
  News.findOneAndUpdate({ _id: idNews }, { $pull: { likes: { userId } } });

export const addComentService = (idNews, comment, userId) => {
  const idComment = Math.floor(Date.now() * Math.random()).toString(36);

  return News.findOneAndUpdate(
    { _id: idNews },
    {
      $push: {
        comments: { idComment, userId, comment, createsAt: new Date() },
      },
    }
  );
};

export const deleteCommentService = (idNews, idComment, userId) =>
  News.findByIdAndUpdate(
    { _id: idNews },
    { $pull: { comments: { idComment, userId } } }
  );
=======
import News from "../models/News.js";

export const createService = (body) => News.create(body);

export const findAllService = async (offset, limit) =>
  await News.find()
    .sort({ _id: -1 })
    .skip(offset)
    .limit(limit)
    .populate("user")
    .populate("likes")
    .populate("comments");

export const countNews = () => News.countDocuments();

export const topNewsService = () =>
  News.findOne().sort({ _id: -1 }).populate("user");

export const findByIdService = (id) => News.findById(id).populate("user");

export const searchByTitleService = (title) =>
  News.find({
    title: { $regex: `${title || ""}`, $options: "i" },
  })
    .sort({ _id: -1 })
    .populate("user");

export const byUserService = (id) =>
  News.find({ user: id }).sort({ _id: -1 }).populate("user");

export const updateService = (id, title, text, banner) =>
  News.findOneAndUpdate(
    { _id: id },
    { title, text, banner },
    { rawResult: true }
  );

export const deleteService = (id) => News.findOneAndDelete({ _id: id });

export const likeNewsService = (idNews, userId) =>
  News.findOneAndUpdate(
    { _id: idNews, "likes.userId": { $nin: [userId] } },
    { $push: { likes: { userId, createsAt: new Date() } } }
  );

export const deleteLikeNews = (idNews, userId) =>
  News.findOneAndUpdate({ _id: idNews }, { $pull: { likes: { userId } } });

export const addComentService = (idNews, comment, userId) => {
  const idComment = Math.floor(Date.now() * Math.random()).toString(36);

  return News.findOneAndUpdate(
    { _id: idNews },
    {
      $push: {
        comments: { idComment, userId, comment, createsAt: new Date() },
      },
    }
  );
};

export const deleteCommentService = (idNews, idComment, userId) =>
  News.findByIdAndUpdate(
    { _id: idNews },
    { $pull: { comments: { idComment, userId } } }
  );
>>>>>>> fb4a0ca7ec53b1c6ad947560f590137ca102458e
