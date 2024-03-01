// i use this route /imgs/keyboard.jpg because i have the images in the public folder
// and i have the public folder in the root of the project
// if you have the images in the src folder you can use the route ../imgs/keyboard.jpg

import axios from "axios";

let catalog = []

let instance = null;
// using the singleton pattern to create a single instance of the DataService
class DataService {

  static getInstance() {
    if (!instance) {
      instance = new DataService();
    }
    return instance;
  }

  async getProducts() {
    let response = await axios.get('http://127.0.0.1:5000/api/products');
    return response.data;
  }

  addProduct(product) {
    catalog.push(product);
  }

}

export default DataService;
