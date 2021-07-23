<template>
    <div></div>
</template>

<script>
// import M from "materialize-css";
// import $ from "jquery";
export default {
  name: "DashboardNav",
  mounted() {
      this.pageTitle();
  },
  methods:{
    scrollToTop() {
        window.scrollTo(0, 0);
    },
    pageTitle() {
        this.$emit("changeTitle", "Account Overview"); //Function to change Page Title
    }
  }
};
</script>

<style scoped src="..\assets\css\dashboard.css"></style>

<style scoped></style>