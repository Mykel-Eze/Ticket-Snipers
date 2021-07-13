<template>
  <div>
    <nav class="main-nav">
        <div class="container">
            <div class="nav-wrapper">
                <router-link to="/" class="brand-logo">
                    <img src="../assets/images/ticket-snipers.svg" alt="Ticket Sniper" class="logo">
                </router-link>

                <ul class="right dn-mobile ul-nav" id="nav-mobile-2">
                    <li>
                        <button class="nav-pry-btn-2 btn pointer">Sign in</button>
                    </li>
                    <li>
                        <router-link to="#" data-target="slide-out" class="sidenav-trigger sec-color right">
                            <img src="../assets/images/menu-icon.svg" alt="menu" />
                        </router-link>
                    </li>
                </ul>

                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <router-link to="/about" class="">About</router-link>
                    </li>
                    <li>
                        <router-link to="/how-it-works" class="">How it Works</router-link>
                    </li>
                    <li>
                        <router-link to="/tickets" class="">Tickets</router-link>
                    </li>
                    <li>
                        <router-link to="/pricing" class="">Pricing</router-link>
                    </li>
                    <li>
                        <button class="nav-pry-btn-2 btn pointer">Sign in</button>
                    </li>
                    <li>
                        <a style="cursor: pointer;">
                            <button class="nav-pry-btn btn pointer">
                                Snipe My Ticket <img src="../assets/images/target-icon.svg" alt="target">
                            </button>
                        </a>
                    </li>
                </ul>
              </div>
        </div>
    </nav>

    <ul id="slide-out" class="sidenav">
        <div class="center sidenav-logo">
            <router-link to="/">
                <img src="../assets/images/ticket-snipers.svg" alt="Ticket Snipers" class="logo">
            </router-link>
        </div>
        <li>
            <router-link to="/" class="">Home</router-link>
        </li>
        <li>
            <router-link to="#" class="">About Us</router-link>
        </li>
        <li>
            <router-link to="#" class="">What We Do</router-link>
        </li>
        <li class="hire-us-li hul-1">
            <a style="cursor: pointer;">
                <button class="nav-pry-btn btn pointer">
                    Snipe My Ticket <img src="../assets/images/target-icon.svg" alt="target">
                </button>
            </a>
        </li>
        <li class="hire-us-li">
            <a style="cursor: pointer;">
                <button class="nav-pry-btn-2 btn">Sign in</button>
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
  }
};
</script>

<style scoped src="..\assets\css\navbar.css"></style>
