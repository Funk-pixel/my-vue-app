<template>
  <div class="products-page">
    <section class="products-banner" :style="{ backgroundImage: `url('./greypfrut.jpg')` }">
      <div class="container">
        <h1 class="page-title">AGRIDERA FRESH MARKET HYBRIDS</h1>
      </div>
    </section>

    <div class="container content-area">
      <div class="products-grid">
        <div v-for="product in productsData" :key="product.id" class="product-card">
          <div class="card-image-wrapper">
            <img :src="product.image" :alt="product.title" class="product-img">
            <div class="hover-overlay">
              <router-link :to="'/product/' + product.id" class="view-btn">
                VIEW DETAILS
              </router-link>
            </div>
          </div>

          <div class="card-content">
            <div class="card-line"></div>
            <h3 class="product-title">{{ product.title }}</h3>
            <p class="product-desc">{{ product.desc }}</p>
            
            <div class="card-actions">
              <router-link :to="'/product/' + product.id" class="btn-details">
                DETAILS
              </router-link>
              
              <button 
                @click="addToCart(product)" 
                class="btn-cart"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { productsData } from '../data.js';

const addToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const index = cart.findIndex(item => item.id === product.id);
  
  if (index === -1) {
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.title} added to cart!`);
  } else {
    cart[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Quantity updated in cart');
  }
};
</script>

<style scoped>
@import "../assets/main.css";

.products-page {
  background-color: #fdf3f3; /* Ніжно-рожевий фон */
  padding-bottom: 60px;
  min-height: 100vh;
}

/* БАНЕР АДАПТИВНИЙ */
.products-banner {
  height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.products-banner::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.page-title {
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: 2.2rem;
  border-left: 10px solid #79b51c;
  padding-left: 20px;
  max-width: 800px;
}

/* АДАПТИВНА СІТКА ТОВАРІВ */
.products-grid {
  display: grid;
  /* Автоматично підбирає кількість колонок залежно від ширини */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  padding: 20px 0;
}

.product-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-8px);
}

.card-image-wrapper {
  position: relative;
  height: 220px;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-line {
  width: 40px;
  height: 3px;
  background: #79b51c;
  margin: 0 auto 15px;
}

.product-title {
  font-size: 1.2rem;
  color: #3e4d56;
  margin-bottom: 10px;
}

.product-desc {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 20px;
  flex-grow: 1;
}

/* КНОПКИ */
.card-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn-details, .btn-cart {
  padding: 12px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
  border: none;
}

.btn-details {
  background: #f4f4f4;
  color: #3e4d56;
}

.btn-cart {
  background: #79b51c;
  color: white;
}

.btn-cart:hover {
  background: #669a17;
}

/* HOVER EFFECT ДЛЯ ДЕСТОПІВ */
.hover-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(121, 181, 28, 0.8);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: 0.3s;
}

.card-image-wrapper:hover .hover-overlay {
  opacity: 1;
}

.view-btn {
  color: #fff;
  border: 2px solid #fff;
  padding: 8px 20px;
  text-decoration: none;
  border-radius: 4px;
}

/* МЕДІА-ЗАПИТИ ДЛЯ ТЕЛЕФОНІВ */
@media (max-width: 600px) {
  .page-title {
    font-size: 1.5rem;
    border-left-width: 6px;
  }
  
  .products-banner {
    height: 200px;
  }
  
  .products-grid {
    grid-template-columns: 1fr; /* Одна колонка на мобільних */
    padding: 10px;
  }
  
  .product-card {
    max-width: 100%;
  }
}
</style>