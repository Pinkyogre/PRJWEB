<template>
  <div id="app">
    <nav>
      <div class="nav-container">
        <div id="logo">
          <router-link to="/">
            <img src="./assets/img/Auto_cart_logo.jpeg" alt="logo" />
          </router-link>
        </div>

        <ul id="icons">
          <li>
            <router-link to="/user-settings">
              <i class="fas fa-user"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/shopping-cart">
              <i class="fas fa-shopping-cart"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>



    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
@import './assets/style/style.css';
</style>
