import express from "express";

import { 
 createSupplier,
 getAllSupplier,
 getSupplier,
 updateSupplier,
 deleteSupplier
} from "./supplier.controller.js";


const router = express.Router();

router.post("/", createSupplier);
router.get('/',getSupplier);
router.get('/all',getAllSupplier)
router.put('/',updateSupplier)
router.delete('/:id',deleteSupplier)


export default router;