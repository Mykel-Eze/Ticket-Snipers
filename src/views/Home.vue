<template>
  <div id="main-home">
    <section id="home">
        <div class="row">
            <div class="container">
                <div class="col s12 m10 l8 rel pad0-xs" id="title-side">
                  <h1 class="home-title">
                    California's Best Way to Erase a Traffic Ticket
                  </h1>
                  <div class="home-btn-wrapper">
                    <button class="pry-btn btn hidden-xs modal-trigger" data-target="eligibility-calculator">
                      Can My Case Be Beat? <img src="../assets/images/calculator.svg" alt="icon">
                    </button>
                    <router-link to="/auth-page" custom v-slot="{ navigate }">
                      <button class="pry-btn btn" @click="navigate" role="link">
                        Snipe My Ticket <img src="../assets/images/target-icon.svg" alt="icon">
                      </button>
                    </router-link>
                  </div>
                </div>
                <div class="news-div rel-xs">
                  <div class="news-icon-wrapper">
                    <a href="#" class="news-link">
                      <img src="../assets/images/abc.svg" alt="abc news icon">
                    </a>
                    <a href="#" class="news-link">
                      <img src="../assets/images/fox.svg" alt="fox news icon">
                    </a>
                    <a href="#" class="news-link">
                      <img src="../assets/images/cnn.svg" alt="cnn news icon">
                    </a>
                  </div>
                  <div class="news-txt">
                    Read about our awesome journey across media channels  
                  </div>
                </div>
            </div>
        </div>
    </section>
    <section id="our-mission">
      <div class="row">
        <div class="container">
          <div class="col m2 hidden-xs">
            <div class="">
              <img src="../assets/images/down-square.svg" alt="down" class="pointer go-down-img">
            </div>
          </div>
          <div class="col s12 m10 pad0-xs">
            <div class="video-thumbnail rel col s12 pad0">
              <img src="../assets/images/stop-over-bg.jpg" alt="video-thumbnail" class="thumbnail-img">
              <div class="play-btn-wrapper hover-toggle">
                <img src="../assets/images/play-white.svg" alt="play" class="play-btn hover-hide">
                <img src="../assets/images/play-blue.svg" alt="play" class="play-btn hover-show">
              </div>
            </div>
            <div class="testimony-mission col s11 offset-s1 m12 offset-m0 pad0">
              <div class="officer-testimony col s12 l4 pad0">
                <div class="quote-div col s2 pad0">
                  <img src="../assets/images/quote.svg" alt="quote" class="quote-icon">
                </div>
                <div class="quote-txt col s10">
                  <p>These guys work so well I’d like to arrest the entire team behind the scenes.</p>
                  <small class="quote-author">Charles Miles, CHP Traffic Officer (Los Angeles Division)</small>
                </div>
              </div>
              <div class="col m1"></div>
              <div class="mission col s12 l7 pad-r-0 sec-bg">
                <div class="col m10 offset-m1">
                  <h4 class="mission-title">
                    <span>Our Mission </span> <img src="../assets/images/flag.svg" alt="flag">
                  </h4>
                  <p>
                    To help your everyday driver with the only legal issue they will likely 
                    encounter – a traffic citation – and ensure that a small mistake or misunderstanding 
                    does not land them in a precarious situation.
                  </p>
                </div>
              </div>

              <div class="learn-more-div col s11 offset-s1 m12 offset-m0 pad0">
                <div class="col s12 l4 pad0 hidden-sm">
                  <div class="col m2 hidden-xs"></div>
                  <div class="home-learn-more col m10">
                    <router-link to="/about" class="pry-color" @click="scrollToTop()">
                      <span style="top: 0; padding-right: 5px;">Learn More About Us</span> &#10095;
                    </router-link>
                  </div>
                </div>
                <div class="col l1"></div>
                <div class="col s12 l7 pad0">
                  <div class="home-learn-more">
                    <router-link to="/about" class="sec-color">
                      <img src="../assets/images/play-blue.svg" alt="play">
                      <span>Learn More with a Free Ticket Review</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="key-points-slide">
      <div class="row rel">
        <div class="carousel carousel-slider col s12 m9 offset-m3" id="kp-carousel">
          <div class="carousel-item" href="#one!">
            <div class="col s12 m6">
              <h3 class="kp-desc bold-txt">We help drivers beat traffic tickets with our proven</h3>
              <h1 class="kp-title bold-txt pry-color text-center-xs">Methods</h1>
            </div>
            <div class="col s12 m6 pad0">
              <img src="../assets/images/shafts.png" alt="shafts" class="full-width kp-img">
            </div>
          </div>
          <div class="carousel-item" href="#two!">
            <div class="col s12 m6">
              <h3 class="kp-desc bold-txt">We help drivers beat traffic tickets with our proven</h3>
              <h1 class="kp-title kp-title-2 bold-txt pry-color">Track Record</h1>
            </div>
            <div class="col s12 m6 pad0 text-center-xs">
              <img src="../assets/images/blob.png" alt="text blob" class="full-width kp-img kp-img2">
            </div>
          </div>
          <div class="carousel-item" href="#three!">
            <div class="col s12 m6">
              <h3 class="kp-desc bold-txt">We help drivers beat traffic tickets with our proven</h3>
              <h1 class="kp-title bold-txt pry-color text-center-xs">Success</h1>
            </div>
            <div class="col s12 m6 pad0">
              <img src="../assets/images/growth.png" alt="text blob" class="full-width kp-img">
            </div>
          </div>
        </div>
        <img src="../assets/images/side-block.png" alt="side-block" class="side-block hidden-xs">
      </div>
    </section>
    
    <CalculatorTriggerSect />

    <section id="features">
      <div class="row">
        <div class="container">
          <div class="col s12 m10 offset-m1">
            <h2 class="feature-sec-title text-center-xs">Features of Ticket Snipers </h2>
            <div class="about-block-grid hidden-xs">
              <div class="about-block">
                <img src="../assets/images/time-icon.svg" alt="time">
                <div class="feature-title">Save Time</div>
                <p class="feature-txt">
                  Avoid long lines and obnoxious wait times at the courthouse 
                  and challenge the ticket from the comfortability of your home.
                </p>
              </div>
              <div class="about-block">
                <img src="../assets/images/legal-icon.svg" alt="legal">
                <div class="feature-title">Legal Solutions</div>
                <p class="feature-txt">
                  Over 12 years of experience fighting traffic tickets up and down 
                  the coast of California.
                </p>
              </div>
              <div class="about-block">
                <img src="../assets/images/camera-icon.svg" alt="camera">
                <div class="feature-title">Easy to Use</div>
                <p class="feature-txt">
                  Send us a photo of your ticket, provide the details and 
                  our team of experts will work on your defense.
                </p>
              </div>
              <div class="about-block">
                <img src="../assets/images/court-icon.svg" alt="court">
                <div class="feature-title">No Court Appearances</div>
                <p class="feature-txt">
                  Our streamlined process allows CA drivers to fight their 
                  alleged violations without missing important events.
                </p>
              </div>
              <div class="about-block">
                <img src="../assets/images/communication-icon.svg" alt="communication">
                <div class="feature-title">Full Transparency</div>
                <p class="feature-txt">
                  Chat with our California traffic ticket experts about your individual 
                  situation via live chat, phone or text.
                </p>
              </div>
              <div class="about-block">
                <img src="../assets/images/wallet-icon.svg" alt="wallet">
                <div class="feature-title">Saves You Money</div>
                <p class="feature-txt">
                  Insurance rates can increase as much as 22% with just (1) point. 
                  Put the brakes on any surges with our help.
                </p>
              </div>
            </div>
            <div class="about-block-xs visible-xs">
              <div class="carousel carousel-slider center" id="features-carousel">
                <div class="carousel-item" href="#one!">
                  <div class="about-block">
                    <img src="../assets/images/time-icon.svg" alt="time">
                    <div class="feature-title">Save Time</div>
                    <p class="feature-txt">
                      Avoid long lines and obnoxious wait times at the courthouse 
                      and challenge the ticket from the comfortability of your home.
                    </p>
                  </div>
                </div>
                <div class="carousel-item" href="#two!">
                  <div class="about-block">
                    <img src="../assets/images/legal-icon.svg" alt="legal">
                    <div class="feature-title">Legal Solutions</div>
                    <p class="feature-txt">
                      Over 12 years of experience fighting traffic tickets up and down 
                      the coast of California.
                    </p>
                  </div>
                </div>
                <div class="carousel-item" href="#three!">
                  <div class="about-block">
                    <img src="../assets/images/camera-icon.svg" alt="camera">
                    <div class="feature-title">Easy to Use</div>
                    <p class="feature-txt">
                      Send us a photo of your ticket, provide the details and 
                      our team of experts will work on your defense.
                    </p>
                  </div>
                </div>
                <div class="carousel-item" href="#four!">
                  <div class="about-block">
                    <img src="../assets/images/court-icon.svg" alt="court">
                    <div class="feature-title">No Court Appearances</div>
                    <p class="feature-txt">
                      Our streamlined process allows CA drivers to fight their 
                      alleged violations without missing important events.
                    </p>
                  </div>
                </div>
                <div class="carousel-item" href="#five!">
                  <div class="about-block">
                    <img src="../assets/images/communication-icon.svg" alt="communication">
                    <div class="feature-title">Full Transparency</div>
                    <p class="feature-txt">
                      Chat with our California traffic ticket experts about your individual 
                      situation via live chat, phone or text.
                    </p>
                  </div>
                </div>
                <div class="carousel-item" href="#six!">
                  <div class="about-block">
                    <img src="../assets/images/wallet-icon.svg" alt="wallet">
                    <div class="feature-title">Saves You Money</div>
                    <p class="feature-txt">
                      Insurance rates can increase as much as 22% with just (1) point. 
                      Put the brakes on any surges with our help.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="auto-insurance">
      <div class="row">
        <div class="container">
          <div class="col s12 m7 l5 right pad0">
            <div class="auto-txt-title white-txt">
              <h2 class="auto-title">Auto <br class="hidden-xs"> Insurance Saver</h2>
              <p class="mag-0">
                Use our Auto Insurance Savings Calculator to find out how much ($$$) 
                you can save by eliminating your traffic ticket
              </p>
            </div>
            <div class="stepform-div">
              <ul class="step-progress white-txt">
                <li class="step-1 active">
                  <span></span>
                  <small>Auto Insurance&nbsp;Rate</small>
                </li>
                <li class="step-2">
                  <span></span>
                  <small>Points on Record</small>
                </li>
                <li class="step-3">
                  <span></span>
                  <small>Traffic Ticket</small>
                </li>
                <li class="step-4">
                  <span></span>
                  <small>Total Savings</small>
                </li>
                <div class="progress">
                  <div class="determinate"></div>
                </div>
              </ul>
              <div id="stepform-1">
                <div class="white-form-wrapper flex-div">
                  <div class="white-form-txt">
                    What is your current monthly auto insurance rate?
                  </div>
                  <div class="flex-div short-inp-div">
                    <span>$</span> <input type="tel" class="short-inp" id="insurance-rate">
                  </div>
                </div>
                <div class="stepform-btn-wrapper">
                  <button class="btn pry-btn stepform-btn" id="next-1">Next</button>
                </div>
              </div>
              <div id="stepform-2" class="hidden">
                <div class="white-form-wrapper flex-div">
                  <div class="white-form-txt">
                    What is points on my record (before this ticket) 
                  </div>
                  <div class="flex-div short-inp-div">
                    <select class="short-inp">
                      <option value="" disabled selected></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select> 
                  </div>
                </div>
                <div class="stepform-btn-wrapper">
                  <button class="btn pry-btn stepform-btn" id="next-2">Next</button>
                </div>
              </div>
              <div id="stepform-3" class="hidden">
                <div class="white-form-wrapper flex-div">
                  <div class="white-form-txt">
                    What type of traffic ticket did you receive?  
                  </div>
                  <div class="flex-div short-inp-div">
                    <select class="short-inp">
                      <option value="" disabled selected></option>
                      <option value="1">Speeding</option>
                      <option value="2">Red Light Camera</option>
                      <option value="3">General Traffic</option>
                    </select> 
                  </div>
                </div>
                <div class="stepform-btn-wrapper">
                  <button class="btn pry-btn stepform-btn" id="next-3">Calculate</button>
                </div>
              </div>
              <div id="stepform-4" class="hidden">
                <div class="white-form-wrapper tt flex-div">
                  <table id="savings-table">
                    <thead>
                      <tr>
                        <th>Expense</th>
                        <th>Actual Cost</th>
                        <th>Ticket Snipers</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Insurance Increase (Per Year)</td>
                        <td>$6</td>
                        <td>$0</td>
                      </tr>
                      <tr>
                        <td>Ticket Cost</td>
                        <td>$367</td>
                        <td>$179</td>
                      </tr>
                      <tr>
                        <td><b>Total Cost</b></td>
                        <td>$373</td>
                        <td>$179</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="savings-div white-txt">
                  <h5 class="savings-">Savings</h5>
                  <div class="savings-bar flex-div">
                    <div class="savings-year">Year 1</div>
                    <div class="progress">
                      <div class="determinate" style="width: 70%"></div>
                      <span class="rel">Good</span>
                    </div>
                    <div class="savings-figure">$194</div>
                  </div>
                  <div class="savings-bar flex-div">
                    <div class="savings-year">Year 2</div>
                    <div class="progress">
                      <div class="determinate" style="width: 80%"></div>
                      <span class="rel">Great</span>
                    </div>
                    <div class="savings-figure">$200</div>
                  </div>
                  <div class="savings-bar flex-div">
                    <div class="savings-year">Year 3</div>
                    <div class="progress">
                      <div class="determinate" style="width: 100%"></div>
                      <span class="rel">Excellent</span>
                    </div>
                    <div class="savings-figure">$210</div>
                  </div>
                </div>
                <div class="stepform-btn-wrapper">
                  <button class="btn pry-btn stepform-btn" id="next-4">Dismiss Ticket</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="drivers-testimonies">
      <div class="row">
        <div class="container">
          <div class="col s12">
            <div class="col s12 m10 l7 pad0">
              <h3 class="dt-heading smbold-txt">
                California Drivers Use Ticket Snipers Because Our Process is Fast, Easy & Effective
              </h3>
            </div>
            <div class="col s12 pad0 flex-div justify-content-btw">
              <div class="minor-dt-title">
                <span class="pry-color">Hear from our loyal clients</span>
              </div>
              <div class="slider-controls-div">
                <button class="slider-control left-ctrl" @click="prevFunc()">
                  <img src="../assets/images/left-slider.svg" alt="left button">
                </button>
                <button class="slider-control right-ctrl" @click="nextFunc()">
                  <img src="../assets/images/right-slider.svg" alt="right button">
                </button>
              </div>
            </div>
            <div class="testimonies-div col s12 pad0">
              <div class="carousel carousel-slider" id="testimonies-carousel">
                <div class="carousel-item" href="#one!">
                  <div class="video-thumbnail rel col s12 m10 offset-m2 pad0">
                    <img src="../assets/images/slider-1.jpg" alt="video-thumbnail" class="thumbnail-img">
                    <div class="play-btn-wrapper pointer">
                      <img src="../assets/images/play.svg" alt="play" class="play-btn hover-scale">
                    </div>
                  </div>
                  <div class="testimony-txt-card">
                    <img src="../assets/images/quote-bars.svg" alt="quote-bars" class="quote-bars top-bars">
                    <p>Janet received a stop sign ticket and didn’t think she could have it dismissed.</p>
                    <img src="../assets/images/quote-bars.svg" alt="quote-bars" class="quote-bars down-bars">
                    <small class="testimony-author">Janet Dumas <br> Sacramento, CA</small>
                  </div>
                </div>
                <div class="carousel-item" href="#two!">
                  <div class="video-thumbnail rel col s12 m10 offset-m2 pad0">
                    <img src="../assets/images/slider-2.jpg" alt="video-thumbnail" class="thumbnail-img">
                    <div class="play-btn-wrapper pointer">
                      <img src="../assets/images/play.svg" alt="play" class="play-btn hover-scale">
                    </div>
                  </div>
                  <div class="testimony-txt-card">
                    <img src="../assets/images/quote-bars.svg" alt="quote-bars" class="quote-bars top-bars">
                    <p>
                      Jared received a red light camera ticket in the san francisco bay 
                      area during his daily commute.
                    </p>
                    <img src="../assets/images/quote-bars.svg" alt="quote-bars" class="quote-bars down-bars">
                    <small class="testimony-author">Jared lives <br> San Francisco Bay Area</small>
                  </div>
                </div>
                <div class="carousel-item" href="#three!">
                  <div class="video-thumbnail rel col s12 m10 offset-m2 pad0">
                    <img src="../assets/images/slider-3.jpg" alt="video-thumbnail" class="thumbnail-img">
                    <div class="play-btn-wrapper pointer">
                      <img src="../assets/images/play.svg" alt="play" class="play-btn hover-scale">
                    </div>
                  </div>
                  <div class="testimony-txt-card">
                    <img src="../assets/images/quote-bars.svg" alt="quote-bars" class="quote-bars top-bars">
                    <p>
                      NFL Superstar Marshall Faulk drives to the NFL Network headquarters in Culver City 
                      roughly 6 months out of the year
                    </p>
                    <img src="../assets/images/quote-bars.svg" alt="quote-bars" class="quote-bars down-bars">
                    <small class="testimony-author">Marshall Faulk <br> Culver City, CA</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <EligibilityCalculator /> -->
  </div>
</template>

<script>
import CalculatorTriggerSect from '../components/CalculatorTriggerSect.vue'
// import EligibilityCalculator from '../components/EligibilityCalculatorPopup.vue'

import $ from 'jquery'
import M from 'materialize-css'
export default {
  name: 'Home',
  components: {
    CalculatorTriggerSect,
    // EligibilityCalculator
  },
  mounted() {
    var elemsCarousel1 = document.querySelector("#kp-carousel");
    var elemsCarousel2 = document.querySelector("#testimonies-carousel");
    var elemsCarousel3 = document.querySelector("#features-carousel");
    var elemsSelect = document.querySelectorAll("select");
    M.Carousel.init(elemsCarousel1, {
      fullWidth: true
    });
    M.Carousel.init(elemsCarousel2, {
      fullWidth: true
    });
    M.Carousel.init(elemsCarousel3, {
      fullWidth: true,
      indicators: true
    });
    setInterval(function(){ 
      M.Carousel.getInstance(elemsCarousel1).next();
    }, 5000);

    M.FormSelect.init(elemsSelect);

    //smooth scroll
    $(".go-down-img").click(function() {
      $('html,body').animate({
        scrollTop: $("#key-points-slide").offset().top},
        'slow');
    });

    //Stepforms Toggles
    $("#next-1").click(function(){
      $("#stepform-1").slideUp();
      $("#stepform-2").slideDown();
      $("li.step-2").addClass("active");
      $(".stepform-div .progress .determinate").width("35%");
    });
    $("#next-2").click(function(){
      $("#stepform-2").slideUp();
      $("#stepform-3").slideDown();
      $("li.step-3").addClass("active");
      $(".stepform-div .progress .determinate").width("65%");
    });
    $("#next-3").click(function(){
      $("#stepform-3").slideUp();
      $("#stepform-4").slideDown();
      $("li.step-4").addClass("active");
      $(".stepform-div .progress .determinate").width("95%");
    });
    $("#next-4").click(function(){
      $("#stepform-4").slideUp();
      $("#stepform-1").slideDown();
      $(".stepform-div input").val("")
      $("li.step-2, li.step-3, li.step-4").removeClass("active");
      $(".stepform-div .progress .determinate").width("0%");
    });
  },
  methods:{
    nextFunc() {
      var elemsCarousel2 = document.querySelector("#testimonies-carousel");
      M.Carousel.getInstance(elemsCarousel2).next();
    },
    prevFunc() {
      var elemsCarousel2 = document.querySelector("#testimonies-carousel");
      M.Carousel.getInstance(elemsCarousel2).prev();
    }
  }
}
</script>

<style src="../assets/css/home.css" scoped></style>

<style>
.stepform-div .select-wrapper input.select-dropdown{
  border-bottom: 1px solid transparent !important;
  height: 1.7rem !important;
}
.stepform-div .dropdown-content li>span {
  color: var(--pry-color);
  text-align: center;
}

.stepform-div input {
  font-size: 20px !important;
  font-weight: 600;
}
.stepform-div .dropdown-content {
  left: -20px !important;
}
.stepform-div #stepform-3 input {
  font-size: 12px !important;
  font-weight: 500;
}
.stepform-div #stepform-3 .dropdown-content li>span {
  font-size: 14px;
  font-weight: 200;
}

div#features-carousel .indicators .indicator-item {
  background-color: black;
}
div#features-carousel .indicators .indicator-item.active {
  background-color: #fff;
  width: 25px;
  border-radius: 10px;
  background-color: var(--pry-color);
}
</style>
