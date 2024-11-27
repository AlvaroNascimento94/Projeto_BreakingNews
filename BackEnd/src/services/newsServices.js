import newsRepositories from "../repositories/newsRepositories.js";

async function createNewsService({ title, banner, text }, userId) {
  if (!title || !banner || !text)
    throw new Error("Submit all field for registration");
  
  const { id } = await newsRepositories.createNewsRepository(
    title,
    banner,
    text,
    userId
  );

  return {
    message: "Post created sucessfully",
    post: { id, title, banner, text },
  };
}

async function findAllNewsService(limit, offset, currentUrl) {
  limit = Number(limit);
  offset = Number(offset);

  if (!limit) {
    limit = 5;
  }

  if (!offset) {
    offset = 1;
  }

  const news = await newsRepositories.findAllNewsRepository(offset,limit)

  const total = await newsRepositories.countNews()

  const next = offset + limit;
  const nextUrl =
    next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

  const previous = offset - limit < 0 ? null : offset - limit;
  const previousUrl =
    previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;

  //posts.shift();

  return{
    nextUrl,
    previousUrl,
    limit,
    offset,
    total,

    results: news.map((post) =>({
      id: post._id,
      title:post.title,
      banner: post.banner,
      text: post.text,
      likes: post.likes,
      comments: post.comments,
      name:post.user.name,
      username: post.user.username,
      avatar: post.user.avatar,
    }))
  }
}

async function topNewsService() {
  const news = await newsRepositories.topNewsRepository();

  if (!news) throw new Error("There is no registered news");

  return {
    news: {
      id: news._id,
      title: news.title,
      banner: news.banner,
      text: news.text,
      likes: news.likes,
      comments: news.comments,
      name: news.user.name,
      username: news.user.username,
      avatar: news.user.avatar,
    },
  };
}

async function searchNewsService(title) {
  const foundNews = await newsRepositories.searchNewsRepository(title);

  if (foundNews.length === 0)
    throw new Error("There are no news with this title");

  return {
    foundNews: foundNews.map((news) => ({
      id: news._id,
      title: news.title,
      banner: news.banner,
      text: news.text,
      likes: news.likes,
      comments: news.comments,
      name: news.user.name,
      username: news.user.username,
      avatar: news.user.avatar,
    })),
  };
}

async function findNewsByIdService(id) {
  const news = await newsRepositories.findNewsByIdRepository(id);

  if (!news) throw new Error("News not found");

  return {
    id: news._id,
    title: news.title,
    banner: news.banner,
    text: news.text,
    likes: news.likes,
    comments: news.comments,
    name: news.user.name,
    username: news.user.username,
    avatar: news.user.avatar,
  };
}

async function findNewsByUserIdService(id) {
  const news = await newsRepositories.findNewsByUserIdRepository(id);

  return {
    newsByUser: news.map((post) => ({
      id: post._id,
      title: post.title,
      banner: post.banner,
      text: post.text,
      likes: post.likes,
      comments: post.comments,
      name: post.user.name,
      username: post.user.username,
      avatar: post.user.avatar,
    })),
  };
}

async function updateNewsService(id, title, banner, text, userId) {
  if (!title && !banner && !text)
    throw new Error("Submit at least one field to update the news");

  const news = await newsRepositories.findNewsByIdRepository(id);

  if (!news) throw new Error("Post not found");

  if (news.user._id != userId) throw new Error("You didn't create this news");

  await newsRepositories.updateNewsRepository(id, title, banner, text);
}

async function deleteNewsService(id, userId) {
  const news = await newsRepositories.findNewsByIdRepository(id);

  if (!news) throw new Error("News not found");

  if (news.user._id != userId) throw new Error("You didn't delete this news");

  await newsRepositories.deleteNewsRepository(id);
}

async function likeNewsService(id, userId) {
  const postLiked = await postServices.likesService(id, userId);

  if (postLiked.lastErrorObject.n === 0) {
    await postService.likesDeleteService(id, userId);
    return { message: "Like successfully removed" };
  }

  return { message: "Like done successfully" };
}

async function commentPostService(newsId, message, userId) {
  if (!message) throw new Error("Write a message to comment");

  const news = await newsRepositories.findNewsByIdRepository(newsId);

  if (!news) throw new Error("News not found");

  await newsRepositories.commentsRepository(newsId, message, userId);
}

async function commentDeletePostService(newsId, userId, idComment) {
  const news = await newsRepositories.findNewsByIdRepository(newsId);

  if (!news) throw new Error("News not found");

  await newsRepositories.commentsDeleteRepository(newsId, userId, idComment);
}

export default {
  createNewsService,
  findAllNewsService,
  topNewsService,
  searchNewsService,
  findNewsByIdService,
  findNewsByUserIdService,
  updateNewsService,
  deleteNewsService,
  likeNewsService,
  commentPostService,
  commentDeletePostService,
};