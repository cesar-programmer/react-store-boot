// i use this route /imgs/keyboard.jpg because i have the images in the public folder
// and i have the public folder in the root of the project
// if you have the images in the src folder you can use the route ../imgs/keyboard.jpg

let catalog = [
  {
    title: 'keyboard',
    category: 'electronics',
    price: 100,
    image: '/imgs/keyboard.jpg',
    id : 1
  },
  {
    title: 'mouse',
    category: 'electronics',
    price: 50,
    image: '/imgs/mouse.jpg',
    id : 2
  },
  {
    title: 'headphones',
    category: 'electronics',
    price: 150,
    image: '/imgs/headphone.jpg',
    id : 3
  },
  {
    title: 'laptop',
    category: 'electronics',
    price: 1000,
    image: '/imgs/lap.jpg',
    id : 4
  },
  {
    title: 'chair',
    category: 'furniture',
    price: 200,
    image: '/imgs/chair.jpg',
    id : 5
  },
  {
    title: 'microphone',
    category: 'electronics',
    price: 50,
    image: '/imgs/mic.jpg',
    id : 6
  },
  {
    title: 'pc',
    category: 'electronics',
    price: 600,
    image: '/imgs/pc.jpg',
    id : 7
  },
]

let instance = null;
// using the singleton pattern to create a single instance of the DataService
class DataService {

  static getInstance() {
    if (!instance) {
      instance = new DataService();
    }
    return instance;
  }

  getProducts() {
    return catalog;
  }

  addProduct(product) {
    catalog.push(product);
  }

}

export default DataService;
