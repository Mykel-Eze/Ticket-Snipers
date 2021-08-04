<template>
    <div class="row dashboard-account">
        <div class="container">
            <div class="col s12">
                <h4 class="ticket-status-title">Account</h4>

                <section class="dashbord-cont-wrapper">
                    <div class="col s12 l8 pad0">
                        <div class="tabs-list-container">
                            <ul class="tabs">
                                <li class="tab">
                                    <a class="active" href="#personal-info">Personal Info</a>
                                </li>
                                <li class="tab">
                                    <a href="#security">Security</a>
                                </li>
                            </ul>
                        </div>

                        <div class="tab-content-container">
                            <div id="personal-info" class="tab-content">
                                <PersonalInfo />
                            </div>
                            <div id="security" class="tab-content">
                                <SecurityInfo/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import M from "materialize-css";
import PersonalInfo from '../components/PersonalInfo.vue';
import SecurityInfo from '../components/SecurityInfo.vue';
// import $ from "jquery";

export default {
  name: "DashboardAccounts",
  components: {
    PersonalInfo, SecurityInfo
  },
  mounted() {
    this.pageTitle();

    var elemsTabs = document.querySelectorAll('.tabs');
    M.Tabs.init(elemsTabs);
  },
  methods:{
    scrollToTop() {
        window.scrollTo(0, 0);
    },
    pageTitle() {
        this.$emit("changeTitle", "User Account Details"); //Function to change Page Title
    }
  }
};
</script>

<style scoped src="..\assets\css\dashboard.css"></style>

<style>
.dashboard-account .tabs .indicator {
    display: none;
}
.datepicker-date-display,.datepicker-table td.is-selected {
    background-color: var(--pry-color);
}
</style>