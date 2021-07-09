<template>
  <div>
    <section id="home">
        <div class="row">
            <div class="container">
                <div class="col s12 l7" id="title-side">
                    <h1 class="home-title">
                        Beat your California Traffic Ticket fast and effectively.
                    </h1>
                    <div class="home-btn-wrapper">
                        <button class="pry-btn btn">
                            Can My Case Be Beat? <img src="../assets/images/calculator.svg" alt="icon">
                        </button>
                        <button class="pry-btn btn">
                            Snipe My Ticket <img src="../assets/images/target-icon.svg" alt="icon">
                        </button>
                    </div>
                    <div class="home-learn-more">
                        <a href="#">
                            <img src="../assets/images/play-white.svg" alt="play">
                            <span>Learn More with a Free Ticket Review</span>
                        </a>
                    </div>
                </div>
                <div class="col s12 l5 pad0" id="form-side">
                    <TopBannerForm />
                </div>
            </div>
        </div>
    </section>

    <section id="more-about">
        <div class="row">
            <div class="container">
                <div class="col s12 pad0">
                    <h4 class="abt-title">General Traffic Ticket</h4>
                    <p class="text-justify abt-p-txt">
                        Technology is at the core of our company. Using the latest management 
                        systems allows us to serve our clients at a higher and more effective 
                        level. Our agents are trained to quickly respond to text messages, 
                        livechat messages, emails, and provide over the phone customer service. 
                        All members of our team are cross trained and able to assist throughout 
                        the entire dismissal process.
                    </p>
                    <p class="text-justify abt-p-txt">
                        We have changed the way traffic tickets are contested by modernizing the 
                        process using intricate technology implementations to improve efficiency and 
                        overall user experience.
                    </p>
                </div>
                <div class="col s12 l10 offset-l1">
                    <div class="about-block-grid">
                        <div class="about-block">
                            <img src="../assets/images/court-icon.svg" alt="court">
                            <p>
                                No fines, court appearances, insurance hikes or points on your record.
                            </p>
                        </div>
                        <div class="about-block">
                            <img src="../assets/images/case-icon.svg" alt="case">
                            <p>
                                California traffic ticket specialists.
                            </p>
                        </div>
                        <div class="about-block">
                            <img src="../assets/images/users-icon.svg" alt="users">
                            <p>
                                We've helped 10,000+ beat their California ticket cases.
                            </p>
                        </div>
                        <div class="about-block">
                            <img src="../assets/images/refund-icon.svg" alt="refund">
                            <p>
                                Refund available if you don't win your case.
                            </p>
                        </div>
                        <div class="about-block">
                            <img src="../assets/images/stopwatch-icon.svg" alt="stopwatch">
                            <p>
                                Rush service available!
                            </p>
                        </div>
                        <div class="about-block">
                            <img src="../assets/images/california-icon.svg" alt="california" style="margin-bottom: -10px;">
                            <p>
                                We've helped 10,000+ beat their California ticket cases.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <CalculatorTriggerSect />
  </div>
</template>

<script>
import TopBannerForm from '../components/TopBannerForm.vue'
import CalculatorTriggerSect from '../components/CalculatorTriggerSect.vue'
export default {
    name: "GeneralTraffic",
    components: { 
        TopBannerForm,
        CalculatorTriggerSect
    }
}
</script>

<style src="../assets/css/home-2.css" scoped></style>

<style scoped>
#home {
    background-image: url(../assets/images/general-traffic-bg.jpg);
}
</style>