<template>
  <div class="site-wrapper">
    <header class="site-header">
      <div class="container header-flex">
        <div class="logo">
          <router-link to="/">
            <img src="/Logo@2x.png" alt="Agridera">
          </router-link>
        </div>

        <div class="header-right">
          <div class="search-box">
            <input type="text" placeholder="SEARCH">
            <span class="search-icon">🔍</span>
          </div>

          <button 
            class="mobile-burger-btn" 
            :class="{'is-active': isMenuOpen}" 
            @click="isMenuOpen = !isMenuOpen"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav class="main-nav" :class="{'is-open': isMenuOpen}">
            <ul>
              <li><router-link to="/" @click="isMenuOpen = false">HOME</router-link></li>
              <li><a href="#" @click="isMenuOpen = false">COMPANY PROFILE</a></li>
              <li><router-link to="/products" @click="isMenuOpen = false">PRODUCTS</router-link></li>
              <li><a href="#" @click="isMenuOpen = false">SERVICES</a></li>
              <li><a href="#" @click="isMenuOpen = false">R & D</a></li>
              <li><router-link to="/contact" @click="isMenuOpen = false">CONTACT</router-link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="main-footer">
      <div class="container footer__inner">
        <div class="footer-top">
          <nav class="footer-links">
            <router-link to="/">PROFILE</router-link> |
            <a href="#">MANAGEMENT</a> |
            <router-link to="/products">PRODUCTS</router-link> |
            <a href="#">R & D</a> |
            <a href="#">LINKS</a> |
            <a href="#">SITEMAP</a> |
            <router-link to="/contact">CONTACT</router-link>
          </nav>

          <div class="social-icons">
            <a href="#" class="soc-btn">in</a>
            <a href="#" class="soc-btn">ig</a>
            <a href="#" class="soc-btn">yt</a>
            <a href="#" class="soc-btn">f</a>
            <a href="#" class="soc-btn">tw</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="footer-copyright">AGRIDERA SEEDS & AGRICULTURE LTD. © 2020</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import './assets/style.css';
import './assets/main.css';
import './assets/responsive.css';
import './assets/tomato-product.css';

const isMenuOpen = ref(false);
</script>

<style>
/* --- ФІКСИ ДЛЯ БІЛОГО ФОНУ ТА БУРГЕРА --- */

.site-header {
  background-color: #ffffff;
  border-bottom: 1px solid #eee;
}

/* Стиль кнопки бургера */
.mobile-burger-btn {
  display: none; /* Ховаємо на десктопі */
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 24px;
  position: relative;
  z-index: 2001;
  padding: 0;
}

.mobile-burger-btn span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #3e4d56; /* Темний колір, щоб було видно на білому */
  margin: 5px 0;
  transition: all 0.3s ease;
  border-radius: 2px;
}

/* Анімація в хрестик */
.mobile-burger-btn.is-active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.mobile-burger-btn.is-active span:nth-child(2) {
  opacity: 0;
}
.mobile-burger-btn.is-active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Адаптивність для мобілки */
@media (max-width: 900px) {
  .mobile-burger-btn {
    display: block; /* Показуємо тільки на мобілці */
  }

  .main-nav {
    display: none; /* Ховаємо список */
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #ffffff;
    padding: 20px 0;
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
    z-index: 2000;
  }

  .main-nav.is-open {
    display: block; /* Показуємо при кліку */
  }

  .main-nav ul {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
}

/* Соцмережі у футері */
.social-icons {
  display: flex;
  gap: 10px;
}
.soc-btn {
  width: 32px;
  height: 32px;
  background-color: #79b51c;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 13px;
}

.footer-links {
  font-size: 12px;
}
</style>