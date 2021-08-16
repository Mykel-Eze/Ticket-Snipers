<template>
    <div class="auth-page">
        <div class="row">
            <div class="container">
                <div class="col s12 m10 offset-m1">
                    <div style="visibility: hidden;">
                        <ul class="tabs">
                            <li class="tab">
                                <a class="active" href="#signup-block">Sign Up</a>
                            </li>
                            <li class="tab">
                                <a href="#login-block">Login</a>
                            </li>
                        </ul>
                    </div>
                    <div class="auth-tab-content">
                        <div id="signup-block">
                            <SignupBlock />
                        </div>
                        <div id="login-block">
                            <LoginBlock />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoginBlock from '../components/LoginBlock.vue'
import SignupBlock from '../components/SignupBlock.vue'

import M from 'materialize-css'
export default {
    name: "AuthPage",
    components: {
        LoginBlock,
        SignupBlock
    },
    mounted() {
        var elemsTabs = document.querySelectorAll('.tabs');
        M.Tabs.init(elemsTabs);
    }
}
</script>

<style src="../assets/css/auth.css" scoped></style>

<style>
 .auth-page ul.tabs li.indicator{
    background-color: var(--sec-color);
    height: calc(100% - 10px);
    z-index: 0;
    border-radius: 10px;
    bottom: 5px;
 }
</style>