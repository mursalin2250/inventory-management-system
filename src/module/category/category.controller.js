import { createCategoryService, viewAllCategoryService, viewCategoryService } from "./category.service.js";

export const createCategory = async (req,res) => {
    try {
        const category = await createCategoryService(req.body);
        res.status(200).json({success: true, status_code: 200, category: category});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, status_code: 500, message: error.message});
    }
}

export const viewAllCategory = async (req,res) => {
    try {
        const category = await viewAllCategoryService();
        res.status(200).json({success: true, status_code: 200, categorys: category});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, status_code: 500, message: error.message})
    }
}

export const viewCategory = async (req,res) => {
    try {
        const category = await viewCategoryService(req.query.id);
        res.status(200).json({success: true, status_code: 200, category: category});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, status_code: 500, message: error.message})
    }
}



