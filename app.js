document.addEventListener("DOMContentLoaded", () => {
  const productForm = document.getElementById("product-form");
  const productSection = document.getElementById("product-section");
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  let products = [
    {
      id: 1,
      productName: "Iphone",
      price: 12000,
      stock: 99,
      discount: 2,
      description:
        "Get your hands on the latest iPhone model in the world. The Future is here.",
      category: "Mobiles",
      seller: "Iphone India",
    },
    {
      id: 2,
      productName: "7 Gear Mountain Bikes",
      price: 12000,
      stock: 150,
      discount: 8,
      description: "Perfect for mountain trails with 7 gear speed options.",
      category: "Cycles",
      seller: "Hero Cycles",
    },
    {
      id: 3,
      productName: "Flower Vase",
      price: 890,
      stock: 50,
      discount: 10,
      description: "Elegant vase to enhance your home decor beautifully.",
      category: "Home Decors",
      seller: "Home Decor India",
    },
    {
      id: 4,
      productName: "Half sleeve Shirt",
      price: 999,
      stock: 70,
      discount: 10,
      description: "Comfortable and stylish half sleeve shirt for casual wear.",
      category: "Fashion",
      seller: "Fashion Hub",
    },
    {
      id: 5,
      productName: "Apsara Eraser",
      price: 120,
      stock: 50,
      discount: 50,
      description: "High-quality eraser for clean and precise erasing.",
      category: "Stationary",
      seller: "Apsara Stationery",
    },
    {
      id: 6,
      productName: "Nike Shoes",
      price: 2999,
      stock: 80,
      discount: 40,
      description: "Durable and comfortable shoes for all sports activities.",
      category: "Wearables",
      seller: "Nike Store",
    },
    {
      id: 7,
      productName: "TShirt",
      price: 499,
      stock: 200,
      discount: 80,
      description: "Casual T-shirt for everyday wear with a comfortable fit.",
      category: "Fashion",
      seller: "Fashion Hub",
    },
  ];

  products.forEach((product) => addProductToSection(product));

  productForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(productForm);
    const newProduct = {
      name: formData.get("product-name"),
      price: Number(formData.get("price")),
      stock: Number(formData.get("stock")),
      discount: Number(formData.get("discount")),
      description: formData.get("description"),
      category: formData.get("category"),
      seller: formData.get("seller"),
    };
    product.push(newProduct);
    addProductToSection(newProduct);
    productForm.reset();
  });

  searchButton.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();
    filterProducts(query);
  });

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    filterProducts(query);
  });

  function filterProducts(query) {
    productSection.innerHTML = "";
    const filteredProducts = products.filter((product) =>
      product.productName.toLowerCase().includes(query)
    );
    filteredProducts.forEach((product) => addProductToSection(product));
  }

  function addProductToSection(product) {
    const discountedPrice = Math.round(
      product.price - (product.price * product.discount) / 100
    );
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
            <div class="product-tumb">
            <img src="https://picsum.photos/2400/800" alt="Products" class="product-img"" />
            </div>
            <div class="product-details">

               <div class="product-item">
              <span class="product-catagory">${product.category}</span>
              <span class="chip danger"> ${product.stock} Left </span>
            </div>
                <h4><a href="#">${product.productName}</a></h4>
                <p>${product.description}</p>
                <div class="product-bottom-details">
                      <div class="product-price"><small>Rs ${product.price}</small>Rs ${discountedPrice} <span class="offer">(${product.discount}% off)</small></div>
                      <button class="add-to-cart">
                  Add to Cart
              </button>
                </div>
            </div>
        `;

    productSection.appendChild(productCard);
  }
});

{/* <img class="offer-img" src="./public/images/offer.png" alt="offer" /> */}

// let product = [
//     {
//         id: 1,
//         productName: "Iphone",
//         price: 12000,
//         stock: 99,
//         discount:2,
//         description:
//             "Get your hands on the latest iPhone model in the world. The Future is here.",
//         category: "Mobiles",
//         seller: "Iphone India",
//     },
//     {
//         id: 2,
//         productName: "7 Gear Mountain Bikes",
//         price: 12000,
//         stock: 150,
//         discount:8,
//         description:
//             "Perfect for mountain trails with 7 gear speed options.",
//         category: "Cycles",
//         seller: "Hero Cycles",
//     },
//     {
//         id: 3,
//         productName: "Flower Vase",
//         price: 890,
//         stock: 50,
//         discount:10,
//         description:
//             "Elegant vase to enhance your home decor beautifully.",
//         category: "Home Decors",
//         seller: "Home Decor India",
//     },
//     {
//         id: 4,
//         productName: "Half sleeve Shirt",
//         price: 999,
//         stock: 70,
//         discount:10,
//         description:
//             "Comfortable and stylish half sleeve shirt for casual wear.",
//         category: "Fashion",
//         seller: "Fashion Hub",
//     },
//     {
//         id: 5,
//         productName: "Apsara Eraser",
//         price: 120,
//         stock: 50,
//         discount:50,
//         description:
//             "High-quality eraser for clean and precise erasing.",
//         category: "Stationary",
//         seller: "Apsara Stationery",
//     },
//     {
//         id: 6,
//         productName: "Nike Shoes",
//         price: 2999,
//         stock: 80,
//         discount:40,
//         description:
//             "Durable and comfortable shoes for all sports activities.",
//         category: "Wearables",
//         seller: "Nike Store",
//     },
//     {
//         id: 7,
//         productName: "TShirt",
//         price: 499,
//         stock: 200,
//         discount:80,
//         description:
//             "Casual T-shirt for everyday wear with a comfortable fit.",
//         category: "Fashion",
//         seller: "Fashion Hub",
//     },
// ];

// const productList = document.getElementById('product-section');
// console.log(productList);

// product.forEach(item => {
//     const discounted = typeof item.discount === 'number' ? true : false;
// const discountedPrice = Math.round(item.price - ((item.price * item.discount) / 100));
//     const productCard = document.createElement('div');
//     productCard.className = 'product-card';

//     productCard.innerHTML = `
//         <div class="product-tumb">
//             <img src="https://picsum.photos/2400/800" alt="Products" class="product-img"" />
//         </div>
//         <div class="product-details">
//             <span class="product-catagory">${item.category}</span>
//             <h4><a href="#">${item.productName}</a></h4>
//             <p>${item.description}</p>
//             <div class="product-bottom-details">
//                 <div class="product-price"><small>Rs ${item.price}</small>Rs ${discountedPrice} <span class="offer">(${item.discount}% off)</small></div>
//             </div>
//         </div>
//     `;

//     productList.appendChild(productCard);
// });
