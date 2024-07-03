document.addEventListener("DOMContentLoaded", () => {
  const productForm = document.getElementById("product-form");
  const productSection = document.getElementById("product-section");
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const minPriceRange = document.getElementById("min-price-range");
  const maxPriceRange = document.getElementById("max-price-range");
  const availabilityFilters = document.querySelectorAll(
    'input[name="availability"]'
  );
  console.log(minPriceRange.value);
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
      price: 200,
      stock: 50,
      discount: 30,
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
      stock: 0,
      discount: 8,
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
      productName: formData.get("product-name"),
      price: Number(formData.get("price")),
      stock: Number(formData.get("stock")),
      discount: Number(formData.get("discount")),
      description: formData.get("description"),
      category: formData.get("category"),
      seller: formData.get("seller"),
    };
    products.push(newProduct);
    addProductToSection(newProduct);
    productForm.reset();
  });

  searchButton.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();
    filterProductsBasedOnSearch(query);
  });

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    filterProductsBasedOnSearch(query);
  });

  document.querySelectorAll('input[name="availability"]').forEach((radio) => {
    radio.addEventListener("change", filterProductsBasedOnFilters);
  });

  function filterProductsBasedOnFilters() {
    productSection.innerHTML = "";
    let availability = document.querySelector(
      'input[name="availability"]:checked'
    ).value;

    // Get price range
    let minPrice = document.getElementById("min-price-range").value;
    let maxPrice = document.getElementById("max-price-range").value;

    let filteredProducts = products.filter((product) => {
      if (availability === "in-stock" && product.stock <= 0) {
        return false; // Exclude if in-stock products are selected but product is out of stock
      }
      if (availability === "out-of-stock" && product.stock > 0) {
        return false; // Exclude if out-of-stock products are selected but product is in stock
      }

      let productPrice = Number(product.price); // Assuming price is a string, convert to float if necessary
      if (product.price < minPrice || product.price > maxPrice) {
        return false; // Exclude if price is outside the selected range
      }

      return true; // Include in filtered list
    });
    filteredProducts.forEach((product) => addProductToSection(product));
  }

  document
    .getElementById("min-price-range")
    .addEventListener("input", filterProductsBasedOnFilters);
  document
    .getElementById("max-price-range")
    .addEventListener("input", filterProductsBasedOnFilters);

  function filterProductsBasedOnSearch(query) {
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
  function getVals() {
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
    let slide1 = parseFloat(slides[0].value);
    let slide2 = parseFloat(slides[1].value);
    if (slide1 > slide2) {
      let tmp = slide2;
      slide2 = slide1;
      slide1 = tmp;
    }

    let displayElement = parent.getElementsByClassName("rangeValues")[0];
    displayElement.innerHTML = "₹" + slide1 + " - ₹" + slide2;
  }
  window.onload = function () {
    let sliderSections = document.getElementsByClassName("range-slider");
    for (let sliderSection of sliderSections) {
      let sliders = sliderSection.getElementsByTagName("input");
      for (let slider of sliders) {
        if (slider.type === "range") {
          slider.oninput = getVals;
          slider.oninput();
        }
      }
    }
  };
  getVals();
});


