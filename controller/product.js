const fs=require('fs');
const model=require('../model/product.js')
const mongoose = require('mongoose');
const Product=model.Product;
// Create
exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body); // Create a new product instance using the request body
        const savedProduct = await product.save(); // Save the product to the database and wait for the operation to complete
        console.log(savedProduct); // Log the saved product
        res.status(201).json(savedProduct); // Respond with the saved product
    } catch (error) {
        console.error(error);
        res.status(400).json(error); // Respond with the error if there's an issue with saving the product
    }
};



exports.getAllProducts=async(req,res)=>{
    const products = await Product.find();
    res.json(products);
};
exports.getProduct=async(req,res)=>{
    const id = req.params.id;
    const product = await Product.findById(id).exec();
    res.json(product);
};
exports.replaceProduct=async(req,res)=>{
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndReplace({_id:id},req.body)
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(doc);
    }
};  
exports.updateProduct=async(req,res)=>{
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
};
exports.deleteProduct=async(req,res)=>{
    const id = req.params.id;
    try{
        const doc = await Product.findOneAndDelete({_id:id},req.body,{new:true})
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
};
