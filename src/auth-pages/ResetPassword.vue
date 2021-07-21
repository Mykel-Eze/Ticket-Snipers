<template>
    <div class="auth-page">
        <div class="row">
            <div class="container">
                <div class="col s12 m10 offset-m1">
                    <div class="auth-tab-content">
                        <div>
                            <h4 class="center auth-title">
                                <span class="sec-color block-xs">Enter your email,</span> Lets begin the recovery process
                            </h4>

                            <form action="/new-password" class="col s12 m10 offset-m1 l6 offset-l3" id="login-form">
                                <div class="col s12 pad0">
                                    <div class="input-field col s12 m12">
                                        <input id="email" name="email" type="email" class="">
                                        <label for="email">Email Address</label>
                                        <img src="../assets/images/email.svg" alt="icon" class="input-icons">
                                    </div>
                                </div>
                                <div class="col s12">
                                    <div class="flex-div justify-content-btw form-links-cont">
                                        <div class="get-started-home">
                                            <router-link to="/auth-page" class="pry-color">
                                                <span>Login</span>
                                            </router-link>
                                            instead
                                        </div>
                                        <div>
                                            <button type="submit" class="submit-btn pry-btn btn">Reset Password</button>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ResetPassword",
    components: {}
}
</script>

<style src="../assets/css/auth.css" scoped></style>

<style></style>