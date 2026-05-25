import categoryModel from "./category.model.js";

export const createCategoryService = async (data) => {
    const category = await categoryModel.findOne({code: data.code});
    
    if(category) {
        throw new Error("Category already exists!");
    }
    const newCategory = await categoryModel.create(data);
    return newCategory;
}

export const viewAllCategoryService = async () => {
    const category = await categoryModel.find();

    if(!category || category.length === 0) {
        throw new Error("Add categorys to view them");
    }

    return category;
}

export const viewCategoryService = async (id) => {
    const category = await categoryModel.findOne({_id: id}).populate("products", "-_id name description price stock status sku");

    if(!category) {
        throw new Error("Category not found!");
    }

    return category;
}

