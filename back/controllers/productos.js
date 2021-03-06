const obj = {};
const { Product, Categories } = require("../models/index");
const sequelize = require("sequelize");
const Op = sequelize.Op;

// filtra por un nombre
obj.search = (req, res, next) => {
  Product.findAll({
    where: {
      name: {
        [Op.like]: `%${req.params.name}%`
      }
    }
  })
    .then(producto => {
      res.send(producto);
    })
    .catch(next);
};

// busco todos los productos
obj.allProductos = (req, res, next) => {
  Product.findAll({
    include: [{ model: Categories }]
  })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(next);
};

//busco los productos por id
obj.productoId = (req, res, next) => {
  Product.findOne({
    include: [{ model: Categories }],
    where: {
      id: req.params.id
    }
  })
    .then(producto => res.send(producto))
    .catch(next);
};

//creo un nuevo producto
obj.createProducto = (req, res, next) => {
  Product.create(req.body)
    .then(productoCreado => {
      if(req.body.tipo.length >= 1){
        req.body.tipo.map(Element => {
          return productoCreado.addCategories(Element)
        })
      };
      res.status(200).send(productoCreado);
    })
    .catch(next);
};

//modifico un producto
obj.modificarProducto = (req, res, next) => {
  Product.update(req.body, {
    where: {
      id: Number(req.params.id)
    },
    returning: true,
    plain: true
  })
    .then(productoActualizado => {
      res.status(200).send(productoActualizado);
    })
    .catch(next);
};

// borro un producto
obj.DeleteProducto = (req, res, next) => {
  Product.destroy({
    where: {
      id: Number(req.params.id)
    }
  })
    .then(() => res.sendStatus(200))
    .catch(next);
};

module.exports = obj;
