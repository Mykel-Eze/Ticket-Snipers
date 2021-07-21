<template>
  <section id="calculator-sec">
        <div class="row">
            <div class="container">
                <div class="calc-sec-wrapper">
                    <h2 class="calc-sec-title">Challenge <br> My Ticket Today!</h2>
                    <div class="home-learn-more">
                        <a href="#">
                            <img src="../assets/images/play-white.svg" alt="play">
                            <span>Learn More with a Free Ticket Review</span>
                        </a>
                    </div>
                    <div class="btn-wrapper flex-div">
                        <button class="sec-btn btn hover-scale modal-trigger" data-target="eligibility-calculator">
                            Can My Case Be Beat?
                        </button>
                        <button class="pry-btn btn white-bg-btn hover-scale modal-trigger" data-target="eligibility-calculator">
                            Snipe My Ticket <img src="../assets/images/target-icon-blue.svg" alt="icon">
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- <EligibilityCalculator /> -->
    </section>
</template>

<script>
// import EligibilityCalculator from "./EligibilityCalculatorPopup.vue"
export default {
    name: "CalculatorTriggerSection2",
    components: {
        // EligibilityCalculator
    }
}
</script>

<style scoped>
    button.pry-btn.btn, button.pry-btn-2.btn, 
    button.sec-btn.btn {
        font-size: 12px;
    }
    .btn-wrapper.flex-div > button {
        margin-right: 12px;
    }
    .btn-wrapper.flex-div > button:last-child {
        margin-right: 0;
    }
    button.btn.white-bg-btn:hover {
        background-color: rgba(245, 245, 245, 1);
    }
    @media(max-width: 992px) {
        .calc-sec-wrapper {
            right: 20px;
        }
    }
    @media (max-width: 600px) {
        section#calculator-sec {
            background: white url(../assets/images/ticket-calculator-bg2-xs.jpg);
            height: 550px;
            background-position: bottom;
            background-size: 100%;
            background-repeat: no-repeat;
        }
        .calc-sec-wrapper {
            position: absolute;
            top: auto;
            bottom: 10%;
            right: 0;
            left: 0;
            width: calc(90% - 1.25rem);
            margin: auto;
        }
        h2.calc-sec-title[data-v-5569d549] {
            font-size: 42px;
            line-height: 1.2;
        }
        .btn-wrapper.flex-div {
            flex-direction: column;
        }
        section#calculator-sec button.btn {
            margin-top: 15px;
            height: 50px;
            margin-right: 0;
            border-radius: 5px;
            max-width: 260px;
        }
    }
</style>