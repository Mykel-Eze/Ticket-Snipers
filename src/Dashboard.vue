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
#dashboard-wrapper {
    background: #F2F6FB;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: minmax(250px, 18%) 1fr;
    /* grid-gap: 20px; */
    transition: all 1.5s;
}
/* #content-body-wrapper {
    background: #FFFFFF;
} */
#content-body {
    background: #FFFFFF;
    border: 1px solid rgba(0, 102, 245, 0.122023);
    box-sizing: border-box;
    box-shadow: 0px 12px 21px 10px rgba(4, 30, 139, 0.0478311);
    border-radius: 19px 0px 0px 0px;
    height: calc(100vh - 80px);
}
</style>
