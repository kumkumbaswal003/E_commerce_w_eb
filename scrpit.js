document.addEventListener("DOMContentLoaded", () => {
    const addToWishlistButtons = document.querySelectorAll(".add-to-wishlist");
    const wishlistItemsList = document.querySelector(".wishlist-items");
  
    addToWishlistButtons.forEach(button => {
      button.addEventListener("click", () => {
        const productDiv = button.closest(".product");
        const productId = productDiv.dataset.productId;
        const productName = productDiv.querySelector("h3").textContent;
  
        addToWishlist(productId, productName);
      });
    });
  
    function addToWishlist(productId, productName) {
      const listItem = document.createElement("li");
      listItem.textContent = productName;
  
      wishlistItemsList.appendChild(listItem);
    }
  });
  