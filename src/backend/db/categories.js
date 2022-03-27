import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Apparel",
    img:"https://cdn.shopify.com/s/files/1/1796/6745/products/Apex-Maggie-Jacket-Front_800x.png?v=1644057091",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "Collectibles",
    img:"https://cdn.shopify.com/s/files/1/1796/6745/products/HypebeastBox-1_800x.jpg?v=1644605256",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "Accessories",
    img:"https://cdn.shopify.com/s/files/1/1796/6745/products/Apex-NessieBlanket-Folded_800x.png?v=1644057090",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
];
