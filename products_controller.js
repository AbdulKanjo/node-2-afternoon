const create = (req, res, next) => {
  const db = req.app.get("db");
  const { name, description, price, imageurl } = req.body;
  db.create_product([name, description, price, imageurl])
    .then(() => res.status(200).send())
    .catch(e => res.status(500).send("Something is wrong"));
};

const getOne = (req, res, next) => {
  const db = req.app.get("db");
  db.read_product([req.params.id]).then(product =>
    res
      .status(200)
      .send(product)
      .catch(e => res.status(500).send("Something is wrong"))
  );
};

const getAll = (req, res, next) => {
  const db = req.app.get("db");
  db.read_products()
    .then(products => res.status(200).send(products))
    .catch(e => res.status(500).send("Something is wrong"));
};

const update = (req, res, next) => {
  const db = req.app.get("db");
  db.update_product([req.params.id, query.desc])
    .then(() => res.status(200))
    .catch(e => res.status(500).send("Something is wrong"));
};

const deleteProduct = (req, res, next) => {
  const db = res.app.get("db");
  db.delete_product([req.params.ids])
    .then(() => res.status(200).send("User successfully deleted"))
    .catch(e => res.status(500).send("Something is wrong"));
};

module.exports = {
  create,
  getOne,
  getAll,
  deleteProduct,
  update
};
