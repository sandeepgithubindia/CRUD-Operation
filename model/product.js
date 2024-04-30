const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = new Schema({
    title: {type:String, required :true,unique: true}, // String is shorthand for {type: String}
    description: {type:String, required :true},
    discountPercentage: {type:Number,min:[0,'Wrong min discount'], max:[50,'Wrong Max discount']},
    price: {type:Number, min:[0,'Wrong price']},
    rating:{type:Number, min:[0,'Wrong min rating'],max:[5,'wrong max rating']},
    brand:{type:String, required :true},
    category:{type:String, required :true},
    thumbnail:{type:String, required :true},
    images:[ String ]
});

exports.Product = mongoose.model('Product', productSchema);