import categoryModel from "./category.model.js";

export const createCategoryService = async (data) => {

    const category = await categorytModel.findOne({sku: data.sku});
    
    if(category) {
        throw new Error("Category already exists!");
    }
    const newCategory = await CategoryModel.create(data);
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
    const category = await categoryModel.findOne(id);
    console.log(category);

    if(!category) {
        throw new Error("Category not found!");
    }

    return category;
}

