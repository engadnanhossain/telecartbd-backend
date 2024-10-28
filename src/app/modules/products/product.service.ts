import { IProduct } from "./product.interface"
import { Product } from "./product.model"

//create product
const createProductsService = async (payload:IProduct) => {
const data = await Product.create(payload)
return data
}


// get all product
const getAllProductsService = async () => {
const data = await Product.find();
return data
}


//get single product
const getSingleProductService = async (id: string) => {
    const data = await Product.findById({_id:id});
    return data
}


//update product
const updateProductService = async (payload:IProduct, id: string) => {
const data = await Product.findByIdAndUpdate(id, payload);
return data
}

export const productsService = {
    createProductsService,
    getAllProductsService,
    getSingleProductService,
    updateProductService
}