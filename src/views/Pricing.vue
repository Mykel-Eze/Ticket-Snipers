<template>
  <div>
    <section id="home" class="home-2">
        <div class="row">
            <div class="container">
                <div class="col s12 m8 l5" id="title-side">
                    <h1 class="home-title">
                        Fighting Your Traffic Ticket
                    </h1>
                    <div class="home-txt-desc">
                        <p>
                            Ticket Snipers Makes It Easy To Win <br class="hidden-xs" /> Choose Your Price and We'll Do The Work
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="pricing-section">
        <div class="row">
            <div class="container">
                <div class="col s12 l8 offset-l2 pad0-xs">
                    <div class="pricing-wrapper">
                        <div class="pricing-block">
                            <div class="container">
                                <div class="pricing-title">
                                    Cell Phone or Seat Belt Ticket
                                </div>
                                <div class="pricing-amt">
                                    <h1 class="pry-color bold-txt">$99</h1>
                                </div>
                                <div class="breakdown-list-wrapper">
                                    <div class="bold-txt breakdown-header-txt">Breakdown</div>
                                    <div class="breakdown-list">
                                        <div class="breakdown-row flex-div">
                                            <span class="breakdown-option-txt">Service Fee</span>
                                            <span class="breakdown-option-amt right-align"> $49</span>
                                        </div>
                                        <div class="breakdown-row flex-div">
                                            <span class="breakdown-option-txt">Legal Drafting Fee non-refundable</span>
                                            <span class="breakdown-option-amt right-align"> $50</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="pricing-sidenote">
                                    We offer a partial refund if the case is not dismissed
                                </div>
                                <div class="pricing-btn-wrapper center">
                                    <router-link to="/auth-page">
                                        <button class="btn pricing-btn">Beat My Ticket</button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="pricing-block">
                            <div class="container">
                                <div class="pricing-title">
                                    Other Traffic Tickets
                                </div>
                                <div class="pricing-amt">
                                    <h1 class="pry-color bold-txt">$179</h1>
                                </div>
                                <div class="breakdown-list-wrapper">
                                    <div class="bold-txt breakdown-header-txt">Breakdown</div>
                                    <div class="breakdown-list">
                                        <div class="breakdown-row flex-div">
                                            <span class="breakdown-option-txt">Service Fee</span>
                                            <span class="breakdown-option-amt right-align"> $89</span>
                                        </div>
                                        <div class="breakdown-row flex-div">
                                            <span class="breakdown-option-txt">Legal Drafting Fee non-refundable</span>
                                            <span class="breakdown-option-amt right-align"> $99</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="pricing-sidenote">
                                    We offer a partial refund if the case is not dismissed
                                </div>
                                <div class="pricing-btn-wrapper center">
                                    <router-link to="/auth-page">
                                        <button class="btn pricing-btn">Beat My Ticket</button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="documents-pricing-section">
        <div class="row">
            <div class="container">
                <div class="col s12 m10 offset-m1 l8 offset-l2 pad0-xs center">
                    <h3 class="dps-heading">Need your documents fast? </h3>
                    <p class="dps-txt">
                        We've got you covered. Add on a rush service option at check out.
                    </p>
                    <div class="dps-wrapper">
                        <div class="dps-block">
                            <div class="bold-txt">$30</div>
                            <span>Same Day Delivery</span>
                        </div>
                        <div class="dps-block">
                            <div class="bold-txt">$20</div>
                            <span>Next Day Delivery</span>
                        </div>
                        <div class="dps-block">
                            <div class="bold-txt">$10</div>
                            <span>Five Day Delivery</span>
                        </div>
                    </div>
                    <p class="dps-txt-2">
                        If your ticket isn't dismissed by the court, we'll refund your service fee!
                    </p>
                </div>
            </div>
        </div>
    </section>

    <CalculatorTriggerSect2 />

    <section id="questions-section">
        <div class="row">
            <div class="container">
                <div class="center left-align-xs">
                    <h1 class="bold-txt very-big-title">Ticket Snipers Knows Traffic Tickets</h1>
                    <div class="qs-txt-div">
                        Court Tested. Statewide Success. <br> No Past Due or Paid Tickets. CA Tickets Only
                    </div>
                    <div class="qs-div">
                        <h4 class="qs-div-title bold-txt">Questions?</h4>
                        <span>Take a look at our 
                            <a href="#" class="pry-color">Terms & Conditions</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import CalculatorTriggerSect2 from '../components/CalculatorTriggerSect2.vue'
export default {
    name: "Pricing",
    components: { 
        CalculatorTriggerSect2
    }
}
</script>

<style src="../assets/css/home-2.css" scoped></style>

<style scoped>
#home {
    background-image: url(../assets/images/bill-bg.jpg);
    background-position-y: bottom;
}
h1.home-title {
    line-height: 1.2;
}
@media(max-width: 600px) {
    #home {
        background-image: url(../assets/images/bill-bg-xs.jpg);
        background-position: right;
    }
}
</style>