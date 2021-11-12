<template>
  <div>
    <nav class="main-nav">
        <div class="container">
            <div class="nav-wrapper">
                <router-link to="/" class="brand-logo" @click="scrollToTop()">
                    <img src="../assets/images/ticket-snipers.svg" alt="Ticket Sniper" class="logo">
                </router-link>

                <ul class="hide-on-med-and-down dn-web-version" id="nav-mobile-3">
                    <li class="rel sec-color nav-phone-number ">
                        Call or Text: <br />
                        <a href="tel:800-985-8978">
                            <span class="smbold-txt">800-985-8978</span>
                        </a>
                    </li>
                </ul>

                <ul class="dn-mobile ul-nav" id="nav-mobile-2">
                    <li>
                        <!-- <button class="nav-pry-btn-2 btn pointer">Sign in</button> -->
                        <a href="tel:8009858978" class="nav-pry-btn-2 btn pointer">
                            <i class="material-icons">phone</i> CALL NOW
                        </a>
                    </li>
                    <li>
                        <a href="#" data-target="slide-out" class="sidenav-trigger sec-color right">
                            <img src="../assets/images/menu-icon.svg" alt="menu" />
                        </a>
                    </li>
                </ul>

                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <router-link to="/tickets" class="" @click="scrollToTop()">Ticket List</router-link>
                    </li>
                    <li>
                        <router-link to="/how-it-works" class="" @click="scrollToTop()">How it Works</router-link>
                    </li>
                    <li>
                        <router-link to="/pricing" class="" @click="scrollToTop()">Pricing</router-link>
                    </li>
                    <li>
                        <router-link to="/about" class="" @click="scrollToTop()">About</router-link>
                    </li>
                    <!-- <li>
                        <a href="/auth-page#login-block" style="cursor: pointer;" class="rel">
                            <button class="nav-pry-btn-2 btn pointer">Sign in</button>
                        </a>
                    </li> -->
                    <li class="rel">
                        <router-link to="/auth-page" class="rel">
                            <button class="nav-pry-btn btn pointer">
                                Get Started
                            </button>
                        </router-link>
                    </li>
                </ul>
              </div>
        </div>
    </nav>

    <ul id="slide-out" class="sidenav">
        <div class="center sidenav-logo">
            <router-link to="/" class="sidenav-close" @click="scrollToTop()">
                <img src="../assets/images/ticket-snipers.svg" alt="Ticket Snipers" class="logo">
            </router-link>
        </div>
        <li>
            <router-link to="/" class="sidenav-close" @click="scrollToTop()">Home</router-link>
        </li>
        <li>
            <router-link to="/tickets" class="sidenav-close" @click="scrollToTop()">Ticket List</router-link>
        </li>
        <li>
            <router-link to="/how-it-works" class="sidenav-close" @click="scrollToTop()">How it Works</router-link>
        </li>
        <li>
            <router-link to="/pricing" class="sidenav-close" @click="scrollToTop()">Pricing</router-link>
        </li>
        <li>
            <router-link to="/about" class="sidenav-close" @click="scrollToTop()">About</router-link>
        </li>
        <li class="hire-us-li hul-1">
            <router-link to="/auth-page" custom v-slot="{ navigate }">
                <button @click="navigate" @keypress.enter="navigate" role="link" class="nav-pry-btn btn pointer">
                    Fight MY Ticket <img src="../assets/images/target-icon.svg" alt="target">
                </button>
            </router-link>
        </li>
        <li class="hire-us-li hul-2">
            <a href="/auth-page#login-block">
                <button class="nav-pry-btn-2 btn pointer">Sign in</button>
            </a>
        </li>
    </ul>
  </div>
</template>

<script>
import M from "materialize-css";
// import $ from "jquery";
export default {
  name: "Navbar",
  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      var elemsSidenav = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elemsSidenav)
    });
  },
  methods:{
    scrollToTop() {
        window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped src="..\assets\css\navbar.css"></style>
