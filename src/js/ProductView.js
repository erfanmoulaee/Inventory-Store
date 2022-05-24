import Storage from "./Storage.js";

const addNewProductBtn = document.getElementById("add-new-product");
const searchInput = document.querySelector("#search-input");
const selectedSort = document.querySelector("#sort-products");

class ProductView {
  constructor() {
    addNewProductBtn.addEventListener("click", (e) => this.addNewProduct(e));

    this.products = [];
  }
  setApp() {
    this.products = Storage.getAllProducts();
  }
  addNewProduct(e) {
    e.preventDefault();
    const title = document.querySelector("#product-title").value;
    const quantity = document.querySelector("#product-quantity").value;
    const category = document.querySelector("#product-category").value;
    if (!title || !category || !quantity) return;
    Storage.saveProducts({ title, category, quantity });
    this.products = Storage.getAllProducts();
    this.createProductsList(this.products);
  }
  createProductsList(products) {
    // const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    let result = "";
    products.forEach((item) => {
      const selectedCategory = Storage.getAllCategories().find(
        (c) => c.id == item.category
      );

      result += `<div class="flex items-center justify-between mb-2 w-full min-w-[400px]">
      <span class="text-slate-400">${item.title}</span>
      <div class="flex items-center gap-x-3">
        <span class="text-slate-400">${new Date().toLocaleDateString(
          "fa-IR"
        )}</span>
        <span class="block px-7 py-3 text-slate-400  text-sm rounded-2xl">${
          selectedCategory.title
        }</span>
        <span
          class="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">${
            item.quantity
          }</span>
        <button class="delete-product border px-2 py-o.5 rounded-2xl border-red-400 text-red-400 delete-product" 
        data-product-id=${item.id}>حذف کردن</button>
      </div>
    </div>`;
    });

    const productsDOM = document.getElementById("products-list");
    productsDOM.innerHTML = result;
  }
}

export default new ProductView();
