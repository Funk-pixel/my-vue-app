<template>
  <div v-if="product" class="product-detail-view">
    <div class="mini-banner-wrap">
      <img src="/greypfrut.jpg" class="mini-img" alt="banner">
      <div class="container breadcrumbs-container">
        <nav class="breadcrumbs">
          <router-link to="/products">PRODUCTS</router-link> 
          <span class="separator">/</span> 
          <span class="current-page">{{ product.title.toUpperCase() }}</span>
        </nav>
      </div>
    </div>

    <div class="container main-detail-flex">
      <div class="left-info">
        <h1 class="prod-name">{{ product.title }}</h1>
        
        <div class="stars">★★★★★</div>

        <div class="char-block">
          <h3>CHARACTERISTICS</h3>
          <p><strong>Weight:</strong> {{ product.weight || '450-600g' }}</p>
          <p><strong>Color:</strong> {{ product.color || 'Creamy White' }}</p>
        </div>

        <div class="desc-block">
          <h3>DESCRIPTION</h3>
          <p>{{ product.desc }}</p>
        </div>

        <button @click="addToCart(product)" class="add-to-cart-large">
          ADD TO CART
        </button>
      </div>

      <div class="right-visual">
        <div class="product-white-box">
          <img :src="product.image" :alt="product.title" class="full-prod-img">
        </div>
        
        <div class="download-link-wrapper">
          <a href="#" class="download-pdf">
            <span class="pdf-icon">📄</span> 
            DOWNLOAD PDF SUMMARY
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { productsData } from '../data.js';

const route = useRoute();

// Знаходимо продукт по ID з URL
const product = computed(() => 
  productsData.find(p => String(p.id) === String(route.params.id))
);

// Логіка кошика
const addToCart = (item) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const exists = cart.find(p => p.id === item.id);
  
  if (!exists) {
    cart.push({ id: item.id, title: item.title, image: item.image });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  } else {
    alert('Already in cart');
  }
};
</script>

<style scoped>
/* Підключаємо ваш файл стилів для сторінки товару */
@import "../assets/tomato-product.css";

.product-detail-view {
  background-color: #fdf3f3; /* Ніжно-рожевий фон як у помідорів */
  padding-bottom: 100px;
}

/* Стилі для міні-банера */
.mini-banner-wrap {
  position: relative;
  height: 180px;
  overflow: hidden;
  margin-bottom: 40px;
}

.mini-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.8);
}

.breadcrumbs-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.breadcrumbs {
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
}

.breadcrumbs a {
  color: #fff;
  text-decoration: none;
}

.breadcrumbs .separator {
  margin: 0 10px;
  color: #79b51c;
}

/* Контентна частина */
.main-detail-flex {
  display: flex;
  justify-content: space-between;
  gap: 60px;
}

.left-info {
  flex: 1;
}

.prod-name {
  font-size: 36px;
  color: #3e4d56;
  margin-bottom: 10px;
}

.stars {
  color: #79b51c;
  font-size: 20px;
  margin-bottom: 30px;
}

.char-block h3, .desc-block h3 {
  font-size: 18px;
  color: #3e4d56;
  border-bottom: 1px solid #eccbcb;
  padding-bottom: 5px;
  margin-bottom: 15px;
  margin-top: 30px;
}

.char-block p, .desc-block p {
  font-size: 15px;
  line-height: 1.6;
  color: #555;
}

.add-to-cart-large {
  background-color: #79b51c;
  color: white;
  border: none;
  padding: 15px 40px;
  font-weight: bold;
  font-size: 16px;
  margin-top: 40px;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.3s;
}

.add-to-cart-large:hover {
  background-color: #669916;
}

/* Права колонка з фото */
.right-visual {
  width: 400px;
}

.product-white-box {
  background: white;
  padding: 30px;
  border: 1px solid #eccbcb;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.full-prod-img {
  max-width: 100%;
  height: auto;
}

.download-link-wrapper {
  margin-top: 20px;
  text-align: center;
}

.download-pdf {
  color: #3e4d56;
  text-decoration: none;
  font-weight: bold;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.pdf-icon {
  font-size: 20px;
  color: #79b51c;
}

/* Адаптивність */
@media (max-width: 900px) {
  .main-detail-flex {
    flex-direction: column;
  }
  .right-visual {
    width: 100%;
    order: -1; /* Фото зверху на мобільних */
  }
}
</style>