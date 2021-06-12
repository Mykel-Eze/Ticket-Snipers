<template>
  <section id="calculator-sec">
        <div class="row">
            <div class="container">
                <div class="calc-sec-wrapper">
                    <h2 class="calc-sec-title">Ticket Dismissal Calculator</h2>
                    <div class="home-learn-more">
                        <a href="#">
                            <img src="../assets/images/play-white.svg" alt="play">
                            <span>Learn More with a Free Ticket Review</span>
                        </a>
                    </div>
                    <button class="pry-btn btn white-bg-btn">
                        Can My Case Be Beat? <img src="../assets/images/calculator-blue.svg" alt="icon">
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CalculatorTriggerSection"
}
</script>

<style scoped>
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
    h2.calc-sec-title {
        font-size: 50px;
    }
}
</style>