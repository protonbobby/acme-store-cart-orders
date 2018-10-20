const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
});

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
    type: conn.Sequelize.UUID, //Universally Unique IDentifier
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
  //productId
  //orderId
});

//RELATIONSHIPS
LineItem.belongsTo(Order); //creates --> orderId on LineItem
LineItem.belongsTo(Product); //creates --> productId on LineItem
Order.hasMany(LineItem); //creates --> orderId on LineItem

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

        Order.create({
          id: '7d439932-62d3-4a87-812f-0127989c879e',
          status: 'ORDER'
        }),

        LineItem.create({
          quantity: 3,
          productId: 1,
          orderId: '7d439932-62d3-4a87-812f-0127989c879e'
        })
      ])
    })
    .then(() => { console.log('DB synced and seeded.') });
};

module.exports = {
  models: {
    Product,
    Order,
    LineItem,
  },
  syncAndSeed,
};
