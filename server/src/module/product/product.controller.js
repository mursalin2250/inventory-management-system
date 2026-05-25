import { createProductService, viewAllProductService, viewProductService } from "./product.service.js";

export const createProduct = async (req,res) => {
    try {
        const product = await createProductService(req.body);
        res.status(200).json({success: true, status_code: 200, product: product});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, status_code: 500, message: error.message});
    }
}

export const viewAllProduct = async (req,res) => {
    try {
        const product  = await viewAllProductService();
        res.status(200).json({success: true, status_code: 200, products: product});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, status_code: 500, message: error.message})
    }
}

export const viewProduct = async (req,res) => {
    try {
        const product = await viewProductService(req.query.id);
        res.status(200).json({success: true, status_code: 200, product: product});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, status_code: 500, message: error.message})
    }
}

