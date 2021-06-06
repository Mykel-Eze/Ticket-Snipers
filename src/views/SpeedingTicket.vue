<template>
  <div>
    <section id="home">
        <div class="row">
            <div class="container">
                <div class="col s12 m7" id="title-side">
                    <h1 class="home-title">
                        Beat your California Speeding Ticket fast and effectively.
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
                <div class="col s12 m5 pad0" id="form-side">
                    <TopBannerForm />
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import TopBannerForm from '../components/TopBannerForm.vue'
export default {
    name: "SpeedingTicket",
    components: { 
        TopBannerForm 
    }
}
</script>

<style scoped>
#home {
    background-image: url(../assets/images/speeding-ticket-bg.jpg);
}
</style>