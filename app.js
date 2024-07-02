document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const productName = document.getElementById('product-name').value;
    const stock = document.getElementById('stock').value;
    const price = document.getElementById('price').value;
    const seller = document.getElementById('seller').value;
    const category = document.getElementById('category').value;

    const product = {
        productName: productName,
        stock: stock,
        price: price,
        seller: seller,
        category: category
    };

    console.log('Product:', product);
    document.getElementById('productForm').reset();

});