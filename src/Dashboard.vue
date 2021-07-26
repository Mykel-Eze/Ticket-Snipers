<template>
    <div id="dashboard-wrapper">
        <DashboardSideBar />
        <div id="content-body-wrapper">
            <!--=== Top-Nav Section ===-->
            <nav class="top-nav">
                <div class="flex-div align-content-center">
                    <h4 class="page-title gray-txt fg-1 center">{{ PageTitleText }}</h4>
                    <div class="logout-btn-wrapper">
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
