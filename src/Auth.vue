<template>
  <div id="nav">
    <AuthNavbar />
      <div id="main-contents-wrapper">
        <router-view />
      </div>

    <footer class="auth-footer">
        <div class="row">
            <div class="container">
                <div class="footer-txt smbold-txt">
                    Copyright &copy; <span class="pry-color">2008-2020</span> Ticket Snipers. All rights reserved
                </div>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
import AuthNavbar from "@/components/AuthNavbar.vue";
// import Footer from "@/components/Footer.vue";
export default {
  components: {
    AuthNavbar
  }
}
</script>

<style scoped>
div#nav {
    background: #F2F6FB;
}
@media(min-height: 825px){
    footer.auth-footer {
        position: absolute;
        bottom: 0px;
        width: 100%;
    }
}
@media(max-height: 824px){
    footer.auth-footer {
        position: relative;
        margin-top: 50px;
    }
}
</style>
