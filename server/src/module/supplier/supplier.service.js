
import supplierModel from "./supplier.model.js";

export const createsupplierService = async (data) => {
    const {name, contact, email, category,type,product,buyingPrice} = data;
    const exists = await supplierModel.findOne({$or: [{ contact }, { email }]});
    if (exists) {
        throw new Error("Supplier already exists!");
    }
    const supplier = await supplierModel.create({name, contact, email, category,product,type,buyingPrice});

     const createdSupplier = await supplierModel.findById(supplier._id)
        .populate('product', 'name -_id')
        .populate('category', 'name -_id').select('-buyingPrice -__v')

    return createdSupplier;
}

export const getAllSupplierService = async()=>{
    const suppliers = await supplierModel.find().select('-buyingPrice');

    return suppliers;
}

export const getSupplierService = async (data) => {
    if (!data.name && !data.email) {
        throw new Error("Name or email is required");
    }

    const supplier = await supplierModel.findOne({
        $or: [
            { name: data.name },
            { email: data.email }
        ]
    });

    if (!supplier) throw new Error("Supplier not found!");

    return supplier.toObject();
};

export const updateSupplierService = async(filter,data)=>{
    const supplier = await supplierModel.findOneAndUpdate({$or:[{name: filter.name},{email: filter.email}]},data,{new:true});
    if(!supplier) throw new Error("Supplier not found!");
    return supplier;
}
export const deleteSupplierService = async(supplier_id)=>{
    const supplier = await supplierModel.findByIdAndDelete( supplier_id);
    return supplier;
}

