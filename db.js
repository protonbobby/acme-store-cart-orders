const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
})

const Product = conn.define('product', {
  name: {
    type: conn.Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
});

const Order = conn.define('order', {
  id: {
    type: conn.Sequelize.UUID,
    defaultValue: conn.Sequelize.UUIDV4,
    primaryKey: true
  },
  status: {
    type: conn.Sequelize.ENUM('CART', 'ORDER'),
    allowNull: false,
    defaultValue: 'CART'
  }
});

const LineItem = conn.define('lineItem', {
  quantity: {
    type: conn.Sequelize.INTEGER,
    defaultValue: 1
  },
});

const syncAndSeed = () => {
  conn.sync({ force: true })
    .then(() => {
      Promise.all([
        Product.create({
          name: 'Tortillas'
        }),
        Product.create({
          name: 'Cheese'
        }),
        Product.create({
          name: 'Salsa'
        }),
        Product.create({
          name: 'Limes'
        }),
      ])
    })
    .then(() => { console.log('DB synced and seeded.') })
}

module.exports = {
  models: {
    Product,
    Order,
    LineItem,
  },
  syncAndSeed,
}
