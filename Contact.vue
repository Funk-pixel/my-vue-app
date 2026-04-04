<template>
  <div class="contact-page-wrapper">
    
    <section class="page-banner" :style="{ backgroundImage: `url('./image 7.jpg')` }">
      <div class="container banner-inner">
        <h1 class="banner-title">CONTACT US</h1>
      </div>
    </section>

    <section class="form-section">
      <div class="container">
        
        <div v-if="cartItems.length > 0" class="order-summary-container">
          <h2 class="title-green">Items in your order</h2>
          <table class="order-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Description</th>
                <th class="text-center">Quantity</th>
                <th class="text-center">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartItems" :key="item.id">
                <td class="prod-cell">
                  <img :src="item.image" :alt="item.title" class="cart-thumb">
                  <strong>{{ item.title }}</strong>
                </td>
                <td>{{ item.desc || 'Agridera hybrid seeds' }}</td>
                <td class="text-center">
                  <div class="qty-controls">
                    <button @click="updateQuantity(item, -1)" class="qty-btn" type="button">-</button>
                    <span class="qty-val">{{ item.quantity }}</span>
                    <button @click="updateQuantity(item, 1)" class="qty-btn" type="button">+</button>
                  </div>
                </td>
                <td class="text-center">
                  <button @click="removeItem(item.id)" class="remove-link" type="button">✕</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h1 class="page-title" style="margin-top: 50px;">Contact Information</h1>
        <div class="divider">.....</div>

        <form class="contact-form" @submit.prevent="handleSubmitOrder">
          <div class="form-grid">
            <div class="form-left-col">
              <div class="form-group"><label>Name *</label><input v-model="form.name" type="text" required></div>
              <div class="form-group"><label>Company Name</label><input v-model="form.company" type="text"></div>
              <div class="form-group"><label>Position</label><input v-model="form.position" type="text"></div>
              <div class="form-group"><label>City</label><input v-model="form.city" type="text"></div>
              <div class="form-group"><label>Country</label><input v-model="form.country" type="text"></div>
              <div class="form-group"><label>Telephone</label><input v-model="form.phone" type="tel"></div>
              <div class="form-group"><label>Email *</label><input v-model="form.email" type="email" required></div>
            </div>
            
            <div class="form-right-col">
              <div class="form-group">
                <label>You are a</label>
                <select v-model="form.role">
                  <option value="producer">Seed producer</option>
                  <option value="distributor">Distributor</option>
                  <option value="farmer">Farmer</option>
                </select>
              </div>
              <div class="form-group textarea-group">
                <label>You are interested in</label>
                <textarea v-model="form.message" rows="15"></textarea>
              </div>
            </div>
          </div>

          <div class="form-bottom">
            <div class="captcha-block">
              <label>Please type this code</label>
              <div class="captcha-row">
                <div class="captcha-box">7 c J 3</div>
                <input type="text" class="captcha-input">
              </div>
            </div>
            <button type="submit" class="send-btn">Send Message</button>
          </div>
        </form>
      </div>
    </section>

    <section class="address-section-white">
      <div class="container">
        <h3 class="addr-title">Our Address</h3>
        <p>AGRIDERA Seeds & Agriculture Ltd.</p>
        <p>P.O Box 103, Gedera 70750, Israel.</p>
        <p>Telephone: <span class="green-text">+972 8 944 9222</span></p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Підключаємо ваші стилі. Шлях має бути відносно папки src/components/
import '../assets/contact-style.css';

const cartItems = ref([]);
const form = ref({ 
  name: '', 
  email: '', 
  company: '', 
  position: '', 
  city: '', 
  country: '', 
  phone: '', 
  role: 'producer', 
  message: '' 
});

// 1. Завантаження кошика при відкритті сторінки
onMounted(() => {
  const data = localStorage.getItem('cart');
  if (data) {
    cartItems.value = JSON.parse(data);
  }
});

// 2. Логіка оновлення кількості в Contact
const updateQuantity = (product, delta) => {
  const index = cartItems.value.findIndex(item => item.id === product.id);
  if (index !== -1) {
    // Збільшуємо або зменшуємо кількість
    cartItems.value[index].quantity += delta;
    
    // Забороняємо кількість менше 1
    if (cartItems.value[index].quantity < 1) {
      cartItems.value[index].quantity = 1;
    }
    saveCart();
  }
};

const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cartItems.value));
};

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter(item => item.id !== id);
  saveCart();
};

// 3. Оформлення замовлення
const handleSubmitOrder = () => {
  const fullOrder = {
    customer: form.value,
    items: cartItems.value,
    date: new Date().toISOString()
  };
  
  // Імітація відправки на сервер
  console.log("Order submitted to server:", fullOrder);
  alert("Order sent successfully! Agridera team will contact you soon.");
  
  // Очищення після відправки
  localStorage.removeItem('cart');
  cartItems.value = [];
  form.value = { name: '', email: '', company: '', role: 'producer', message: '' };
};
</script>

<style scoped>
/* Додаткові специфічні стилі для банера та таблиці */

/* Банер */
.page-banner {
  height: 350px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

/* Оверлей поверх банера, щоб білий текст читався */
.page-banner::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.banner-inner {
  position: relative;
  z-index: 1;
}

.banner-title {
  color: #fff;
  border-left: 10px solid #79b51c; /* Товста зелена лінія Agridera */
  padding-left: 20px;
  font-size: 48px;
  text-transform: uppercase;
  margin: 0;
}

/* Стилі таблиці замовлення */
.order-summary-container {
  margin-bottom: 60px;
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  border: 1px solid #eee;
  box-shadow: 0 5px 15px rgba(0,0,0,0.03);
}
.order-table {
  width: 100%;
  border-collapse: collapse;
}
.order-table th {
  border-bottom: 2px solid #79b51c;
  padding: 12px;
  text-align: left;
  color: #3e4f3d;
  font-size: 14px;
  text-transform: uppercase;
}
.order-table td {
  padding: 15px 12px;
  border-bottom: 1px solid #f0f0f0;
  vertical-align: middle;
}

.cart-thumb {
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 15px;
  border-radius: 4px;
}
.prod-cell {
  display: flex;
  align-items: center;
  font-size: 15px;
}
.text-center { text-align: center; }

/* Керування кількістю */
.qty-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.qty-btn {
  background: #f0f0f0;
  color: #333;
  border: none;
  width: 28px;
  height: 28px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  transition: background 0.2s;
}
.qty-btn:hover { background: #e0e0e0; }
.qty-val {
  font-weight: bold;
  font-size: 16px;
  width: 25px;
  display: inline-block;
}

.remove-link {
  color: #cc0000;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  transition: opacity 0.2s;
}
.remove-link:hover { opacity: 0.7; }

/* Капча та кнопка (з макета) */
.form-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 40px;
}
.captcha-box {
  background: #fff;
  border: 1px solid #ccc;
  padding: 12px 25px;
  font-style: italic;
  font-family: serif;
  letter-spacing: 4px;
  font-size: 18px;
}
.captcha-input {
  width: 100px !important;
  margin-left: 15px;
}
.send-btn {
  border-radius: 25px;
  padding: 15px 50px;
  background: #5c9a49; /* Зелений як на кнопці */
  color: white;
  border: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}
.send-btn:hover { background: #4a843f; }

.title-green { color: #79b51c; margin-bottom: 25px; font-size: 22px; }

/* Адаптивність для таблиці */
@media (max-width: 900px) {
  .qty-controls { flex-direction: column; gap: 5px; }
  .cart-thumb { margin-right: 0; margin-bottom: 5px; }
  .prod-cell { flex-direction: column; text-align: center; }
  .page-banner { height: 250px; }
  .banner-title { font-size: 32px; }
}
</style>