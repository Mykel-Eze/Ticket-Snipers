<template>
    <div id="dashboard-wrapper">
        <DashboardSideBar />
        <div id="content-body-wrapper">
            <!--=== Top-Nav Section ===-->
            <nav class="top-nav">
                <div class="flex-div align-content-center">
                    <div class="fg-1 visible-sm-xs">
                        <router-link to="/dashboard" class="logo-link">
                            <img src="./assets/images/ticket-snipers.svg" alt="Ticket Snipers" class="brand-img">
                        </router-link>
                    </div>
                    <h4 class="page-title gray-txt fg-1 center hidden-xs">{{ PageTitleText }}</h4>
                    <div class="menu-div visible-sm-xs">
                        <i class="material-icons menu-icon">menu</i>
                        <!-- <img src="./assets/images/menu.svg" alt="menu" class="menu-icon"> -->
                    </div>
                    <div class="logout-btn-wrapper hidden-sm-xs">
                        <router-link to="/auth-page" custom v-slot="{ navigate }">
                            <button @click="navigate" @keypress.enter="navigate" role="link" class="nav-pry-btn-2 btn pointer">Logout</button>
                        </router-link>
                    </div>
                </div>
            </nav>
            <!--=== end of Top-Nav Section ===-->

            <!--=== Content Section ===-->
            <div id="content-body">
                <router-view @changeTitle="ChangePageTitle($event)" />
            </div>
            <!--=== Content Section ===-->
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import DashboardSideBar from "@/components/DashboardSideBar.vue";

export default {
  components: {
    DashboardSideBar
  },
  data() {
    return {
        PageTitleText: "Dashboard Page"
    }
  },
  mounted() {
    // Sidebar trigger
    $(".menu-icon, .sidebar-overlay").click(function(){
        $("#side-bar, .sidebar-overlay").toggleClass("open")
    });

    const mediaScreen = window.matchMedia("(max-width: 992px)")

    if (mediaScreen.matches) { // If media query matches
        $(".link-wrapper").click(function(){
            $("#side-bar, .sidebar-overlay").toggleClass("open")
        });
    }
  },
  methods:{
    ChangePageTitle(title) {
        this.PageTitleText=title;
    }
  }
}
</script>

<style scoped src="./assets/css/dashboard.css"></style>

<style scoped>

</style>
