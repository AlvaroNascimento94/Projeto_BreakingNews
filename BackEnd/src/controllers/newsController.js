import {
  createService,
  findAllService,
  countNews,
  topNewsService,
  findByIdService,
  searchByTitleService,
  byUserService,
  updateService,
  deleteService,
  likeNewsService,
  deleteLikeNews,
  addComentService,
  deleteCommentService,
} from "../services/newsServices.js";

export const create = async (req, res) => {
  try {
    const { title, text, banner } = req.body;

    if (!title || !banner || !text) {
      res.status(400).send({ message: "Submit all fields for registration" });
    }

    await createService({
      title,
      text,
      banner,
      user: req.userId,
    });

    res.send("created");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findAll = async (req, res) => {
  try {
    let { limit, offset } = req.query;

    limit = Number(limit);
    offset = Number(offset);

    if (!limit) {
      limit = 5;
    }

    if (!offset) {
      offset = 0;
    }

    const news = await findAllService(offset, limit);
    const total = await countNews();
    const currentURL = req.baseUrl;

    const next = offset + limit;
    const nextURL =
      next < total ? `${currentURL}?limit=${limit}&offset=${next}` : null;

    const previous = offset - limit < 0 ? null : offset - limit;
    const previousURL =
      previous !== null
        ? `${currentURL}?limit=${limit}&offset=${previous}`
        : null;

    if (news.length === 0) {
      return res.status(400).send("There are no registered news");
    }
    res.send({
      nextURL,
      previousURL,
      limit,
      offset,
      total,
      results: news.map((itens) => ({
        id: itens._id,
        title: itens.title,
        text: itens.text,
        banner: itens.banner,
        likes: itens.likes,
        comments: itens.comments,
        name: itens.user.name,
        username: itens.user.username,
        userAvatar: itens.user.avatar,
      })),
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const topNews = async (req, res) => {
  try {
    const news = await topNewsService();
    if (!news) {
      return res.status(400).send({ message: "There is no registered post" });
    }

    res.send({
      news: {
        id: news._id,
        title: news.title,
        text: news.text,
        banner: news.banner,
        likes: news.likes,
        comments: news.comments,
        name: news.user.name,
        username: news.user.username,
        userAvatar: news.user.avatar,
      },
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findById = async (req, res) => {
  try {
    const { id } = req.params;

    const news = await findByIdService(id);

    return res.send({
      news: {
        id: news._id,
        title: news.title,
        text: news.text,
        banner: news.banner,
        likes: news.likes,
        comments: news.comments,
        name: news.user.name,
        username: news.user.username,
        userAvatar: news.user.avatar,
      },
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const searchByTitle = async (req, res) => {
  try {
    const { title } = req.query;

    const news = await searchByTitleService(title);

    if (news.length === 0) {
      return res
        .status(400)
        .send({ message: "There are no news with this title" });
    }

    return res.send({
      result: news.map((itens) => ({
        id: itens._id,
        title: itens.title,
        text: itens.text,
        banner: itens.banner,
        likes: itens.likes,
        comments: itens.comments,
        name: itens.user.name,
        username: itens.user.username,
        userAvatar: itens.user.avatar,
      })),
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const byUser = async (req, res) => {
  try {
    const id = req.userId;
    const news = await byUserService(id);

    return res.send({
      result: news.map((itens) => ({
        id: itens._id,
        title: itens.title,
        text: itens.text,
        banner: itens.banner,
        likes: itens.likes,
        comments: itens.comments,
        name: itens.user.name,
        username: itens.user.username,
        userAvatar: itens.user.avatar,
      })),
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { title, text, banner } = req.body;
    const { id } = req.params;

    if (!title && !banner && !text) {
      res.status(400).send({ message: "Submit all fields for registration" });
    }

    const news = await findByIdService(id);

    if (String(news.user._id) !== req.userId) {
      return res.status(400).send({
        message: " You didn't updat this post",
      });
    }
    await updateService(id, title, text, banner);

    return res.send({ message: "Post successfully updated!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await findByIdService(id);

    if (String(news.user._id) !== req.userId) {
      return res.status(400).send({ message: "You didn't delete this post" });
    }

    await deleteService(id);

    return res.send({ message: "News deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const likeNews = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;
    const newsLike = await likeNewsService(id, userId);

    if (!newsLike) {
      await deleteLikeNews(id, userId);
      return res.status(200).send({ message: "Like successfully removed" });
    }

    res.send({ message: "Like done successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;
    const { comment } = req.body;

    if (!comment) {
      return re.status(400).send({ message: "Write a message to comment" });
    }

    await addComentService(id, comment, userId);

    return res.send({ message: "Commet successfully completd!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const { idNews, idComment } = req.params;
    const userId = req.userId;

    const commentDeleted = await deleteCommentService(
      idNews,
      idComment,
      userId
    );

    const commentFinder = commentDeleted.comments.find((comment) => comment.idComment===idComment)

    if(!commentFinder){
      return res.status(404).send({message:"Comment not found!"})
    }

    if(commentFinder.userId !== userId){
      return res.status(400).send({message:"You can't delete this comment"})
    }
    console.log(commentDeleted);

    return res.send({ message: "Commet successfully removed!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
