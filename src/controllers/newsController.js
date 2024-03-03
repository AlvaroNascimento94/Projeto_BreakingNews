import {
  createService,
  findAllService,
  countNews,
  topNewsService,
  findByIdService
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

export const findById = async (req, res) =>{
try {
  const {id} = req.params
  
  const news = await findByIdService(id)

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
  })
} catch (error) {
  res.status(500).send({ message: error.message });
}
}