<template>
  <section id="home" class="center">
        <div class="main-txt">
            <div class="img-div">
                <img src="./assets/images/ticket-snipers.svg" alt="Ticket Sniper" class="">
            </div>
            <h1 class="bold-txt pry-color">Pages Done (21)</h1>
            <div class="container">
                <h5 class="reg-txt left-align sec-color"></h5>
                <div class="flex-div btn-links-wrapper">
                    <router-link to="/auth-page" class="btn btn-link">Login/Signup</router-link>
                    <router-link to="/reset-password" class="btn btn-link">Reset Password</router-link>
                    <router-link to="/new-password" class="btn btn-link">New Password</router-link>

                    <router-link to="/" class="btn btn-link main-page">HomePage</router-link>
                    <router-link to="/about" class="btn btn-link">About</router-link>
                    <router-link to="/tickets" class="btn btn-link">Tickets</router-link>
                    <router-link to="/pricing" class="btn btn-link">Pricing</router-link>
                    <router-link to="/how-it-works" class="btn btn-link">How It Works</router-link>

                    <router-link to="/general-traffic" class="btn btn-link">General Traffic</router-link>
                    <router-link to="/red-light-camera" class="btn btn-link">Red Light Camera</router-link>
                    <router-link to="/red-light-ticket" class="btn btn-link">Red Light Ticket</router-link>
                    <router-link to="/stop-sign-ticket" class="btn btn-link">Stop Sign Ticket</router-link>
                    <router-link to="/speeding-ticket" class="btn btn-link">Speeding Ticket</router-link>

                    <router-link to="/contact-us" class="btn btn-link">Contact Us</router-link>
                    <router-link to="/court-house" class="btn btn-link">Courthouses</router-link>
                    <router-link to="/county" class="btn btn-link">County</router-link>
                    <router-link to="/cvc" class="btn btn-link">California Vehicle Code</router-link>
                    <router-link to="/media" class="btn btn-link">Media/Blog</router-link>
                    <router-link to="/media-item" class="btn btn-link">Individual Media/Blog Posts</router-link>
                    <router-link to="/press" class="btn btn-link">Press</router-link>
                    <router-link to="/faq" class="btn btn-link">FAQ</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    #home {
        height: 100vh;
        width: 100%;
        background-color: #F2F6FB;
        background-image: url(./assets/images/breakdown-bg.png);
    }
    #home::before{
        display: none;
    }
    .main-txt{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
    .img-div img {
        width: 18%;
        min-width: 150px;
    }
    /* h1.bold-txt {
        margin-top: 0;
    } */
    a.btn.btn-link {
        margin: 10px;
        background: white;
        border: 1px solid var(--pry-color);
        color: var(--pry-color);
        height: 40px;
        line-height: 40px;
        min-width: 130px;
        border-radius: 50px;
        font-size: 12px;
        transition: transform 1s;
    }
    a.btn.btn-link:hover {
        transform: scale(1.05);
    }
    .btn-links-wrapper {
        flex-wrap: wrap;
        margin-top: 40px;
    }
    h5.reg-txt.left-align {
        position: relative;
        left: 10px;
        margin: 20px 0;
    }
    a.btn.btn-link.main-page {
        background-color: var(--pry-color);
        color: white;
    }
</style>