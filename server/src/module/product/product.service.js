import productModel from "./product.model.js";
import categoryModel from "../category/category.model.js";

export const createProductService = async (data) => {
    const product = await productModel.findOne({sku: data.sku});
    
    if(product) {
        throw new Error("Product already exists!");
    }
    const newProduct = await productModel.create(data);
    await categoryModel.updateOne({_id:newProduct.category}, {$push: {products: newProduct._id}});
    return newProduct;
}

export const viewAllProductService = async () => {
    const product = await productModel.find().populate("category", "-_id name code status").select("-__v");

    if(!product || product.length === 0) {
        throw new Error("Add products to view them");
    }

    return product;
}

export const viewProductService = async (id) => {
    const product = await productModel.findOne({_id: id}).populate("category", "-_id name code status").select("-__v");

    if(!product) {
        throw new Error("Product not found!");
    }

    return product;
}


