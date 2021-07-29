<template>
    <div class="row">
        <div class="container">
            <div class="col s12">
                <h4 class="ticket-status-title">Questionnaires to fill</h4>

                <section class="dashbord-cont-wrapper">
                    <div class="questionnaires-wrapper">
                        <table class="questionnaires-table">
                            <tbody>
                                <router-link to="/" custom v-slot="{ navigate }">
                                    <tr class="questionnaires-row unread" @click="navigate" role="link">
                                        <td>
                                            <img src="../assets/images/ticket-icon-blue.svg" alt="ticket-icon" class="ticket-icon">
                                        </td>
                                        <td>
                                            <span class="ticket-id">Ticket ID • 15496</span>
                                        </td>
                                        <td>
                                            <span class="ticket-type truncate">Speeding on Highway</span>
                                        </td>
                                        <td>
                                            <span class="ticket-date">May 24, 2021</span>
                                        </td>
                                        <td>
                                            <img src="../assets/images/right-arr-2.svg" alt="right-arrow" class="next-arr-icon">
                                        </td>
                                    </tr>
                                </router-link>
                                <router-link to="/" custom v-slot="{ navigate }">
                                    <tr class="questionnaires-row unread" @click="navigate" role="link">
                                        <td>
                                            <img src="../assets/images/ticket-icon-blue.svg" alt="ticket-icon" class="ticket-icon">
                                        </td>
                                        <td>
                                            <span class="ticket-id">Ticket ID • 15114</span>
                                        </td>
                                        <td>
                                            <span class="ticket-type truncate">Obiedience by driver offenders </span>
                                        </td>
                                        <td>
                                            <span class="ticket-date">May 24, 2021</span>
                                        </td>
                                        <td>
                                            <img src="../assets/images/right-arr-2.svg" alt="right-arrow" class="next-arr-icon">
                                        </td>
                                    </tr>
                                </router-link>
                                <router-link to="/" custom v-slot="{ navigate }">
                                    <tr class="questionnaires-row read" @click="navigate" role="link">
                                        <td>
                                            <img src="../assets/images/ticket-icon-gray.svg" alt="ticket-icon" class="ticket-icon">
                                        </td>
                                        <td>
                                            <span class="ticket-id">Ticket ID • 15513</span>
                                        </td>
                                        <td>
                                            <span class="ticket-type truncate">Red light violation (Camera) </span>
                                        </td>
                                        <td>
                                            <span class="ticket-date">Feb 11, 2021</span>
                                        </td>
                                        <td>
                                            <img src="../assets/images/right-arr-2.svg" alt="right-arrow" class="next-arr-icon">
                                        </td>
                                    </tr>
                                </router-link>
                                <router-link to="/" custom v-slot="{ navigate }">
                                    <tr class="questionnaires-row read" @click="navigate" role="link">
                                        <td>
                                            <img src="../assets/images/ticket-icon-gray.svg" alt="ticket-icon" class="ticket-icon">
                                        </td>
                                        <td>
                                            <span class="ticket-id">Ticket ID • 15016</span>
                                        </td>
                                        <td>
                                            <span class="ticket-type truncate">Cell Phone Violation </span>
                                        </td>
                                        <td>
                                            <span class="ticket-date">Jan 25, 2021</span>
                                        </td>
                                        <td>
                                            <img src="../assets/images/right-arr-2.svg" alt="right-arrow" class="next-arr-icon">
                                        </td>
                                    </tr>
                                </router-link>
                                <router-link to="/" custom v-slot="{ navigate }">
                                    <tr class="questionnaires-row read" @click="navigate" role="link">
                                        <td>
                                            <img src="../assets/images/ticket-icon-gray.svg" alt="ticket-icon" class="ticket-icon">
                                        </td>
                                        <td>
                                            <span class="ticket-id">Ticket ID • 15441</span>
                                        </td>
                                        <td>
                                            <span class="ticket-type truncate">Failure to Yield to Emergency </span>
                                        </td>
                                        <td>
                                            <span class="ticket-date">Dec 28, 2021</span>
                                        </td>
                                        <td>
                                            <img src="../assets/images/right-arr-2.svg" alt="right-arrow" class="next-arr-icon">
                                        </td>
                                    </tr>
                                </router-link>
                                <router-link to="/" custom v-slot="{ navigate }">
                                    <tr class="questionnaires-row read" @click="navigate" role="link">
                                        <td>
                                            <img src="../assets/images/ticket-icon-gray.svg" alt="ticket-icon" class="ticket-icon">
                                        </td>
                                        <td>
                                            <span class="ticket-id">Ticket ID • 152396</span>
                                        </td>
                                        <td>
                                            <span class="ticket-type truncate">HOV Lane Violation</span>
                                        </td>
                                        <td>
                                            <span class="ticket-date">Dec 25, 2020</span>
                                        </td>
                                        <td>
                                            <img src="../assets/images/right-arr-2.svg" alt="right-arrow" class="next-arr-icon">
                                        </td>
                                    </tr>
                                </router-link>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
// import M from "materialize-css";
// import $ from "jquery";

export default {
  name: "DashboardQuestionnaire",
  mounted() {
        this.pageTitle();
  },
  methods:{
    scrollToTop() {
        window.scrollTo(0, 0);
    },
    pageTitle() {
        this.$emit("changeTitle", "Citation Questionnaire"); //Function to change Page Title
    },
  }
};
</script>

<style scoped src="..\assets\css\dashboard.css"></style>

<style></style>