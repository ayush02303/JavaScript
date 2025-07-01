const product = {
  id: 101,
  name: "Stylish Sneakers",
  price: 2999, // in INR
  currency: "INR",
  color: "Black",
  size: ["7", "8", "9", "10"],
  inStock: true,
  discount: 10, // percent
  brand: "UrbanWalk",
  category: "Footwear",
  rating: 4.5,
  reviewsCount: 128,
  description: "Comfortable and durable sneakers for everyday use.",
  images: [
    "https://example.com/images/sneakers-front.jpg",
    "https://example.com/images/sneakers-side.jpg"
  ],
  tags: ["new", "popular", "bestseller"],
  addedOn: "2025-06-20T10:30:00Z"
};

const res = product.filter( product => product.color === "black")
console.log(res)