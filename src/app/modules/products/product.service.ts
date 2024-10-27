import { IProduct } from "./product.interface"
import { Product } from "./product.model"

//create product
const createProductsService = async (payload:IProduct) => {
const data = await Product.create(payload)
return data
}

const getAllProductsService = async () => {

}

export const productsService = {
    createProductsService,
    getAllProductsService
}