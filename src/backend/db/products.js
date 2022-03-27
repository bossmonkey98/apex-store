import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    catagory:"Apperal",
    title:"MAD MAGGIE JACKET",
    img:"https://cdn.shopify.com/s/files/1/1796/6745/products/Apex-Maggie-Jacket-Front_800x.png?v=1644057091",
    desc:"Intimidate your enemies with Mad Maggie’s durable denim jacket, featuring patch artwork.",
    price: 90,
  },
  {
    catagory:"Collectibles",
    title:"MAD MAGGIE JACKET",
    img:"https://cdn.shopify.com/s/files/1/1796/6745/products/Apex-Maggie-Jacket-Front_800x.png?v=1644057091",
    desc:"Intimidate your enemies with Mad Maggie’s durable denim jacket, featuring patch artwork.",
    price: 90,
  },
  {
    _id: uuid(),
        catagory:"Accessories",
        title:"MAD MAGGIE JACKET",
        img:"https://cdn.shopify.com/s/files/1/1796/6745/products/Apex-Maggie-Jacket-Front_800x.png?v=1644057091",
        desc:"Intimidate your enemies with Mad Maggie’s durable denim jacket, featuring patch artwork.",
        price: 90,
  },
];
