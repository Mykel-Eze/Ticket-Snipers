<template>
    <div id="login-block">
        <h4 class="center auth-title">
            <span class="sec-color block-xs">Welcome back,</span> Login in to continue
        </h4>

        <form action="/dashboard" class="col s12 m10 offset-m1 l6 offset-l3" id="login-form">
            <div class="col s12 pad0">
                <div class="input-field col s12 m12">
                    <input id="login_email" name="email" type="email" class="">
                    <label for="login_email">Email Address</label>
                    <img src="../assets/images/email.svg" alt="icon" class="input-icons">
                </div>
                <div class="input-field col s12 m12">
                    <input id="login_password" name="password" type="password" class="">
                    <label for="login_password">Password</label>
                    <img src="../assets/images/eye-closed.svg" alt="icon" class="input-icons">
                    <div class="forgot-password-div">
                        <router-link to="/reset-password" class="forgot-password-link pry-color">Forgot password?</router-link>
                    </div>
                </div>
            </div>
            <div class="col s12">
                <div class="flex-div justify-content-btw form-links-cont">
                    <div class="get-started-home">
                        New user?
                        <a href="#" class="pry-color" @click="selectTab('signup-block')"><span>Create account</span></a>
                    </div>
                    <div>
                        <button type="submit" class="submit-btn pry-btn btn">Sign In</button>
                    </div>
                </div>
            </div>
        </form>
        <div class="flex-div below-form-txt col s12 m10 offset-m1 l6 offset-l3">
            <div class="fg-1">
                Trouble signing in? <a href="#" class="pry-color">Contact support</a>
            </div>
            <div class="below-form-link">
                <router-link to="#"> Privacy</router-link>
                <span> | </span>
                <router-link to="#">Terms</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import M from 'materialize-css'
export default {
    name: "Login",
    methods: {
        selectTab(tabID) {
            var elemsTabs = document.querySelector('.tabs');
            M.Tabs.getInstance(elemsTabs).select(tabID);
        }
    }
}
</script>

<style src="../assets/css/auth.css" scoped></style>
