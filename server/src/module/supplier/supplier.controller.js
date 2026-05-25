import {createsupplierService,
    getAllSupplierService,
    getSupplierService,
    updateSupplierService,
    deleteSupplierService} from "./supplier.service.js"


export const createSupplier = async (req,res) => {
    try {
        const supplier = await createsupplierService(req.body);
        res.status(201).json({message: "Supplier created successfully!", supplier});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}
 export const getAllSupplier = async(req,res)=>{
    try {
        const supplier = await getAllSupplierService();
        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
 };
 
export const getSupplier = async (req, res) => {
    try {
        const supplier = await getSupplierService(req.query);
        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


 export const updateSupplier= async(req,res)=>{
    try {
        const updatedSupplier = await updateSupplierService(req.query,req.body);
        res.status(200).json({message:"updated.",updatedSupplier})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
 };

 export const deleteSupplier = async(req,res)=>{
    try {
      const deletedSupplier= await deleteSupplierService(req.params);
        res.status(200).json({message:"Supplier deleted successfully"})
    } catch (error) {
        res.status(500).json({message:error.message})
    } 
 };

