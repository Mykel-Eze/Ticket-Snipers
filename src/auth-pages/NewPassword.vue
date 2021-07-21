<template>
    <div class="auth-page">
        <div class="row">
            <div class="container">
                <div class="col s12 m10 offset-m1">
                    <div class="auth-tab-content">
                        <div>
                            <h4 class="center auth-title">
                                <span class="sec-color block-xs">Enter new password,</span> And its a wrap
                            </h4>

                            <form action="/auth-page" class="col s12 m10 offset-m1 l6 offset-l3" id="login-form">
                                <div class="input-field col s12 m12">
                                    <input id="new_password" name="password" type="password" class="">
                                    <label for="new_password">New Password</label>
                                    <img src="../assets/images/eye-closed.svg" alt="icon" class="input-icons">
                                </div>
                                <div class="input-field col s12 m12">
                                    <input id="confirm_password" name="password" type="password" class="">
                                    <label for="confirm_password">Confirm Password</label>
                                    <img src="../assets/images/eye-closed.svg" alt="icon" class="input-icons">
                                </div>
                                <div class="col s12">
                                    <div class="flex-div justify-content-btw form-links-cont">
                                        <div class="get-started-home"></div>
                                        <div>
                                            <button type="submit" class="submit-btn pry-btn btn">Set Password</button>
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