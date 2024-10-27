import { Types } from "mongoose"

export type IProduct = {
    name: string
    model: string
    image: string
    category: {
        id: Types.ObjectId,
        name: string
    },
    subcategory: {
        id: Types.ObjectId,
        name: string,
    };
    brand: string
    status: string
    purchasePrice: number
    discountPercentage: number
    sellingPrice: number
    quantity: number
    alertQuantity: number
    totalSale: number
}