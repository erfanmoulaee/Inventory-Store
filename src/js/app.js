import CategoryView from "./CategoryView.js";
import ProductView from "./ProductView.js";

document.addEventListener("DOMContentLoaded", () => {
  // setApp => categories : OK
  CategoryView.setApp();
  ProductView.setApp();
  // create categories options
  CategoryView.createCategoriesList();
  //
  ProductView.createProductsList(ProductView.products);
});
//target :
// 1. create category
// 2. create product based on selected category
// 3. edit product
// 4. remove product
// 5. save product in local storage
//  --> storage class for hanle application methods
//  --> product view class
//  --> categoryview class
//  --> main and app class
