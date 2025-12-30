const mongoose =require('mongoose');
const orderSchema=new mongoose.schema({
  productName: {
    type:String,
    require:true
  },
  orderValue: {
    type:Number,
    require:true
  },
  quantity: {
   type:Number,
   require:true
  },
  orderId: {
   type:Number,
   unique:true,
   require :true
  },
  expectedDelivary: {
   type:Date,
   require :true
  },
  status: {
    type:String,
    enum:["delayed","confimed","returned","out of delivery"],
    default:"confirmed"
  },
},{timestamps:true}
);

module.exports=mongoose.model("order",orderSchema);