const products = [
  {
    id: 1,
    title: "عدس",
    category: "حبوبات",
    createdAt: "2021-10-31T15:02:00.411Z",
  },
  {
    id: 2,
    title: "کنسرو بادمجان",
    category: "کتسرو",
    createdAt: "2021-10-31T15:03:23.556Z",
  },
  {
    id: 3,
    title: "نخود",
    category: "حبوبات",
    createdAt: "2021-11-01T10:47:26.889Z",
  },
];

const categories = [
  {
    id: 1,
    title: "حبوبات",
    description: "حبوبات درجه 1",
    createdAt: "2021-11-01T10:47:26.889Z",
  },
  {
    id: 2,
    title: "کنسرو",
    description: "کنسرو نخود فرتگی",
    createdAt: "2021-10-01T10:47:26.889Z",
  },
];
export default class Storage {
  //add new category
  //save new category
  //getAllCategories
  static getAllCategories() {
    const savedCategories = JSON.parse(localStorage.getItem("category")) || [];
    // sort => نزولی
    const sortedCategories = savedCategories.sort((a, b) => {
      return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
    });
    return sortedCategories;
  }
  static saveCategory(categoryToSave) {
    //edit
    //new
    const savedCategories = Storage.getAllCategories();
    const existedItem = savedCategories.find((c) => c.id === categoryToSave.id);
    if (existedItem) {
      //edit
      existedItem.title = categoryToSave.title;
      existedItem.description = categoryToSave.description;
    } else {
      //new
      categoryToSave.id = new Date().getTime();
      categoryToSave.createdAt = new Date().toISOString();
      savedCategories.push(categoryToSave);
    }
    localStorage.setItem("category", JSON.stringify(savedCategories));
  }
  static getAllProducts() {
    const sevedProducts = JSON.parse(localStorage.getItem("product")) || [];
    //sort
    return sevedProducts.sort((a, b) => {
      return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
    });
  }
  static saveProducts(productToSave) {
    const savedProducts = Storage.getAllProducts();
    // edit => ... save
    // new => ... save
    const existedItem = savedProducts.find((c) => c.id === productToSave.id);
    if (existedItem) {
      // edit
      existedItem.title = productToSave.title;
      existedItem.quantity = productToSave.quantity;
      existedItem.category = productToSave.category;
    } else {
      // new
      productToSave.id = new Date().getTime();
      productToSave.createdAt = new Date().toISOString();
      savedProducts.push(productToSave);
    }
    localStorage.setItem("products", JSON.stringify(savedProducts));
  }
}
