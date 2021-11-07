<template>
    <footer>
        <div class="row">
            <div class="container">
                <div class="col s12 m12 l3 footer-logo-contact">
                    <div class="footer-logo">
                        <router-link to="/" @click="scrollToTop()">
                            <img src="../assets/images/ticket-snipers.svg" alt="Ticket Sniper">
                        </router-link>
                    </div>
                    <div class="footer-contact-det">
                        <p class="">
                            <a href="tel:800-985-8978" class="sec-color">
                                <b>800-985-8978</b>
                            </a>
                        </p>
                        <p>
                            <a href="mailto:legal@ticketsnipers.comm" class="sec-color">
                                <b>Legal@TicketSnipers.com</b>
                            </a>
                        </p>
                        <div class="social-icons">
                            <a href="https://www.facebook.com/">
                                <img src="../assets/images/facebook.svg" alt="facebook">
                            </a>
                            <a href="https://www.instagram.com//">
                                <img src="../assets/images/instagram.svg" alt="instagram">
                            </a>
                            <a href="https://twitter.com/">
                                <img src="../assets/images/twitter.svg" alt="twitter">
                            </a>
                            <a href="https://linkedin.com/company/">
                                <img src="../assets/images/linkedin.svg" alt="linkedin">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col s12 m4 l3 ddf">
                    <h5 class="footer-title">One-Touch Tools</h5>
                    <ul class="footer-links-li">
                        <li>
                            <router-link to="/auth-page" class="">Let's Get Started</router-link>
                        </li>
                        <li>
                            <router-link to="/calculator" class="">Eligibility Calculator</router-link>
                        </li>
                        <li>
                            <a href="/#auto-insurance" class="">Insurance Savings Generator</a>
                        </li>
                        <li>
                            <router-link to="#" class="">Employment Opportunities</router-link>
                        </li>
                        <li>
                            <router-link to="#" class="">Sitemap</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col s12 m4 l3 ddf">
                    <h5 class="footer-title">Company</h5>
                    <ul class="footer-links-li">
                        <li>
                            <router-link to="/faq" @click="scrollToTop()">(FAQ's)</router-link>
                        </li>
                        <li>
                            <router-link to="/press" @click="scrollToTop()">Press Kit</router-link>
                        </li>
                        <li>
                            <router-link to="/media" @click="scrollToTop()">Media Coverage</router-link>
                        </li>
                        <li>
                            <router-link to="/cvc" @click="scrollToTop()">CA Vehicle Code (CVC)</router-link>
                        </li>
                        <li>
                            <router-link to="/resources" @click="scrollToTop()">Traffic Ticket Resources</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col s8 m4 l3 ddf">
                    <h5 class="footer-title">CA Updates</h5>
                    <ul class="footer-links-li* footer-updates-ul">
                        <div class="carousel carousel-slider center" id="footer-carousel">
                            <div class="carousel-item" href="#one!">
                                <div class="footer-blog-img-div">
                                    <img src="../assets/images/footer-blog-1.jpg" alt="footer-blog" class="footer-blog-img">
                                </div>
                                <div>
                                    <router-link to="/media-item" class="footer-blog-link" @click="scrollToTop()">WHAT IS A “CALIFORNIA STOP”</router-link>
                                </div>
                            </div>
                            <div class="carousel-item" href="#two!">
                                <div class="footer-blog-img-div">
                                    <img src="../assets/images/insurance-bg.jpg" alt="footer-blog" class="footer-blog-img">
                                </div>
                                <div>
                                    <router-link to="/media-item" class="footer-blog-link" @click="scrollToTop()">HOW TO BEAT TRAFFIC</router-link>
                                </div>
                            </div>
                            <img src="../assets/images/left-arrow-2.png" @click="prevFunc()" alt="slider control" class="footer-slider-ctrl left-ctrl">
                            <img src="../assets/images/right-arrow-2.png" @click="nextFunc()" alt="slider control" class="footer-slider-ctrl right-ctrl">
                        </div>
                    </ul>
                </div>
                <div class="col s12 footer-hr-div">
                    <hr />
                </div>
                <div class="cookies-notice col s12">
                    <p class="text-justify">
                        The services of Ticket Snipers are provided by a registered and bonded Legal 
                        Document Assistant. A Legal Document Assistant cannot provide legal advice and 
                        can only provide self-help services like preparing, completing, or filing legal 
                        documents or forms at your specific direction and supplying you with 
                        attorney-approved written material for your self-help needs. If you choose to 
                        use this site or services provided by Ticket Snipers you agree that the 
                        information provided on this website and information given by Ticket Snipers 
                        representatives, employees or agents is not legal advice and no Attorney-Client 
                        relationship is created. Ticket Snipers is not a law firm, does not practice law, 
                        does not give legal advice and the representatives, agents and principles of 
                        Ticket Snipers are not acting as your attorney. Instead, you are representing 
                        yourself in any legal matter you undertake with the use of Ticket Snipers' services 
                        regarding your traffic ticket or citation.
                    </p>
                </div>
                <div class="col s12 copyright-div sec-color">
                    <p>
                        Copyright © <span class="pry-color">2008-2020</span> Ticket Snipers. All rights reserved
                    </p>
                    <p>
                        <router-link to="#" class="sec-color">Privacy Policy</router-link>
                        <span> || </span>
                        <router-link to="#" class="sec-color">Terms & Conditions</router-link>
                    </p>
                </div>
            </div>
        </div>

        <EligibilityCalculator />
    </footer>
</template>

<script>
import EligibilityCalculator from "./EligibilityCalculatorPopup.vue"

import M from "materialize-css";
export default {
    name: 'Footer',
    components: {
        EligibilityCalculator
    },
    mounted() {
        var elemsFooterCarousel = document.querySelector("#footer-carousel");
        M.Carousel.init(elemsFooterCarousel, {
            fullWidth: true
        })
    },
    methods:{
        nextFunc() {
            var elemsFooterCarousel = document.querySelector("#footer-carousel");
            M.Carousel.getInstance(elemsFooterCarousel).next();
        },
        prevFunc() {
            var elemsFooterCarousel = document.querySelector("#footer-carousel");
            M.Carousel.getInstance(elemsFooterCarousel).prev();
        },

        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
}
</script>

<style scoped src="..\assets\css\footer.css"></style>
