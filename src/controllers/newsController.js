import { createService, findAllService } from "../services/newsServices.js";

const create = async (req, res) => {
  try {
    const { title, text, banner } = req.body;

    if (!title || !banner || !text) {
      res.status(400).send({ message: "Submit all fields for registration" });
    }

    await createService({title, text, banner, user:{_id:"65d673ca35ac897c79922c0e"}})

    res.send("created");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const findAll = async (req, res) => {
  const news = await findAllService()
  if (news.length === 0) {
    return res.status(400).send("There are no registered news");
  }
  res.send(news);
};

export { create, findAll };
