<template>
  <div class="home-page">
    <section 
      class="home-hero-banner" 
      :style="{ backgroundImage: `url('./hero.png')` }"
    >
      <div class="container hero-wrapper">
        <div class="hero-text-block">
          <h1 class="hero-title-main">
            AGRIDERA SEEDS <br> AND AGRICULTURE LTD
          </h1>
          <router-link to="/products" class="hero-action-btn">
            READ MORE
          </router-link>
        </div>
      </div>
    </section>

    <section class="products-strip">
      <div class="container">
        <img src="/Products.png" alt="Product Icons" class="full-width-img">
      </div>
    </section>

    <section class="mission-section">
      <div class="container">
        <div class="mission-image-wrapper">
          <img src="/Vision Mission.png" alt="Vision & Mission" class="full-width-img">
        </div>
      </div>
    </section>

    <section class="activities-section container">
      <h2 class="section-title-green">Agridera's main activities</h2>
      <div class="dots">xxxxx</div>
      
      <div class="activity-grid">
        <div class="activity-card" v-for="item in activities" :key="item.title">
          <img :src="item.img" :alt="item.title" class="activity-card-img">
          <div class="card-line"></div>
          <h3 class="activity-card-title">{{ item.title }}</h3>
          <p class="activity-card-text">{{ item.text }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const activities = [
  { 
    img: './image4.png', 
    title: 'Open field crop seeds', 
    text: 'wheat, cotton, legumes, hybrid confection sunflower' 
  },
  { 
    img: './image5.png', 
    title: 'Vegetable seeds', 
    text: 'hybrid open field tomatoes, eggplant, onion, paprika, etc.' 
  },
  { 
    img: './image6.png', 
    title: 'Ornamental seeds', 
    text: 'hybrid cut sunflowers, hybrid patio tomatoes, Bells of Ireland, etc.' 
  }
];
</script>

<style scoped>
/* Підключаємо твої глобальні стилі */
@import "../assets/style.css";
@import "../assets/responsive.css";

/* СТИЛІ ДЛЯ ГОЛОВНОГО БАНЕРА З МАЛЮНКОМ */
.home-hero-banner {
  height: 480px; /* Висота банера як на макеті */
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center; /* Вертикальне центрування */
  margin-bottom: 20px;
}

/* Темний оверлей, щоб білий текст читався */
.home-hero-banner::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.hero-wrapper {
  position: relative;
  z-index: 1; /* Текст поверх оверлея */
}

/* Заголовок зліва (клас hero-title-main) */
.hero-title-main {
  color: #fff;
  font-size: 48px;
  line-height: 1.2;
  text-transform: uppercase;
  border-left: 10px solid #79b51c; /* Товста зелена лінія зліва */
  padding-left: 20px;
  margin: 0 0 40px;
}

/* Кнопка READ MORE */
.hero-action-btn {
  display: inline-block;
  background-color: #79b51c; /* Зелений колір */
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  padding: 12px 30px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.hero-action-btn:hover {
  background-color: #669a17;
}

/* Решта стилів для правильного відображення */
.full-width-img {
  width: 100%;
  height: auto;
  display: block;
}

.section-title-green {
  color: #79b51c;
  text-align: center;
  font-size: 28px;
  margin-bottom: 5px;
}

.dots {
  text-align: center;
  color: #79b51c;
  font-weight: bold;
  letter-spacing: 5px;
  margin-bottom: 40px;
}

/* Грід з 3 картками діяльностей */
.activity-grid {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 60px;
}

.activity-card {
  flex: 1;
  min-width: 280px;
  max-width: 350px;
  text-align: center;
}

.activity-card-img {
  max-width: 100px;
  height: auto;
  margin-bottom: 20px;
}

.card-line {
  width: 30px;
  height: 3px;
  background-color: #79b51c;
  margin: 0 auto 15px;
}

.activity-card-title {
  color: #3e4d56;
  font-size: 16px;
  margin: 0 0 10px;
}

@media (max-width: 900px) {
  .home-hero-banner {
    height: 320px;
  }
  .hero-title-main {
    font-size: 32px;
  }
}
</style>