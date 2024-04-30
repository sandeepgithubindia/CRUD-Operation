require('dotenv').config()
const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose');

const server = express();
const productRouter=require('./routes/product')
const userRouter=require('./routes/user')
console.log('env',process.env.DB_PASSWORD)

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecomerse');
  console.log('database connected')
}


//bodyParser
server.use(express.json());
server.use(morgan('default'))
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);

//Excute by chaining
// server.get('/products',productController.getAllProducts)
// .get('/products/:id',productController.getProduct)
// .post('/products',productController.postProduct)
// .put('/products/:id',productController.putProduct)
// .patch('/products/:id',productController.patchProduct)
// .delete('/products/:id',productController.deleteProduct);

// Excute by Routing
server.listen(8090,()=>{
    console.log('server started')
});