<template>
    <!--=== SideBar Section ===-->
    <section id="side-bar">
        <div class="container">
            <div class="brand-logo">
                <router-link to="/dashboard">
                    <img src="../assets/images/ticket-snipers.svg" alt="Ticket Snipers" class="brand-img">
                </router-link>
            </div>
            <div class="nav-list-wrapper">
                <div class="nav-list-1">
                    <h2 class="greet-user">
                        <span>Hello </span> <span class="pry-color">Mide</span>
                    </h2>
                    <ul>
                        <li class="link-wrapper active">
                            <router-link to="/dashboard" class="pg-link">
                                <div class="flex-div">
                                    <img src="../assets/images/dashboard-icon-default.svg" alt="icon" class="link-img" />
                                    <img src="../assets/images/dashboard-icon-white.svg" alt="icon" class="a-link-img" />
                                    <span class="link-txt">Dashboard</span>
                                </div>
                            </router-link>
                        </li>
                        <li class="link-wrapper">
                            <router-link to="/dashboard/tickets" class="pg-link">
                                <div class="flex-div">
                                    <img src="../assets/images/tickets-icon-default.svg" alt="icon" class="link-img" />
                                    <img src="../assets/images/tickets-icon-white.svg" alt="icon" class="a-link-img" />
                                    <span class="link-txt">Tickets</span>
                                </div>
                            </router-link>
                        </li>
                        <li class="link-wrapper">
                            <router-link to="/dashboard/questionnaire" class="pg-link">
                                <div class="flex-div">
                                    <img src="../assets/images/questionaire-icon-default.svg" alt="icon" class="link-img" />
                                    <img src="../assets/images/questionaire-icon-white.svg" alt="icon" class="a-link-img" />
                                    <span class="link-txt">Questionnaire</span>
                                </div>
                            </router-link>
                        </li>
                        <li class="link-wrapper">
                            <router-link to="/dashboard/account" class="pg-link">
                                <div class="flex-div">
                                    <img src="../assets/images/account-icon-default.svg" alt="icon" class="link-img" />
                                    <img src="../assets/images/account-icon-white.svg" alt="icon" class="a-link-img" />
                                    <span class="link-txt">Account</span>
                                </div>
                            </router-link>
                        </li>
                        <li class="link-wrapper">
                            <router-link to="#" class="pg-link">
                                <div class="flex-div">
                                    <img src="../assets/images/chat-icon-default.svg" alt="icon" class="link-img" />
                                    <img src="../assets/images/chat-icon-white.svg" alt="icon" class="a-link-img" />
                                    <span class="link-txt">Chat</span>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="logout-btn-wrapper visible-sm-xs">
                <router-link to="/auth-page" custom v-slot="{ navigate }">
                    <button @click="navigate" @keypress.enter="navigate" role="link" class="nav-pry-btn-2 btn pointer">Logout</button>
                </router-link>
            </div>
        </div>
    </section>
    <div class="sidebar-overlay"></div>
    <!--=== end of SideBar Section ===-->
</template>

<script>
// import M from "materialize-css";
// import $ from "jquery";
export default {
  name: "DashboardNav",
  mounted() {},
  methods:{
    scrollToTop() {
        window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped src="..\assets\css\dashboard.css"></style>

<style scoped></style>