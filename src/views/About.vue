<template>
  <div class="about-page">
    <section id="home">
        <div class="row full-height">
            <div class="container full-height">
                <div class="col s12 l6 abt-home-cont">
                    <h3 class="abt-home-title bold-txt sec-color">
                        We’ve helped dismiss 10,000+ traffic tickets for Californians
                    </h3>
                    <div class="visible-sm-xs">
                        <img src="../assets/images/people.png" alt="people" class="abt-home-img">
                    </div>
                    <p class="abt-home-desc pry-color">
                      “Our mission in founding this company was to help your everyday man or 
                      woman with the only legal issue they will likely encounter – a traffic 
                      citation – and ensure that a small mistake or misunderstanding does not 
                      land them in a precarious situation.”
                    </p>
                </div>
                <div class="col s12 l6 pad0 right-align abt-home-cont hidden-sm-xs">
                    <img src="../assets/images/people.png" alt="people" class="abt-home-img">
                </div>
            </div>
        </div>
    </section>

    <section id="more-about">
        <div class="row">
            <div class="container">
                <div class="col s12 pad0-xs">
                    <p class="text-justify abt-p-txt">
                        Since 2008  our team has been growing and learning how to best service 
                        the state of California in all of their traffic ticket needs. Our 
                        experienced Case Development team members are available to guide you 
                        through the process, answer questions, provide clarification and act as a 
                        reassuring voice at the other end of the phone.
                    </p>
                    <p class="text-justify abt-p-txt">
                        Our legal team is made up of attorneys and legal experts that specialize 
                        in California traffic law. Their dedication to the law and to understanding 
                        the clients’ individual situations allows them to cultivate the best defenses 
                        against a citation.
                    </p>
                </div>
                <div class="col s12 pad0-xs">
                    <h4 class="abt-header-title">Using technology to set us apart</h4>
                    <p class="text-justify abt-p-txt">
                        Technology is at the core of our company. Using the latest management systems 
                        allows us to serve our clients at a higher and more effective level. Our 
                        agents are trained to quickly respond to text messages, livechat messages, 
                        emails, and provide over the phone customer service. All members of our team 
                        are cross trained and able to assist throughout the entire dismissal process.
                    </p>
                    <p class="text-justify abt-p-txt">
                        We have changed the way traffic tickets are contested by modernizing the process 
                        using intricate technology implementations to improve efficiency and overall user 
                        experience.
                    </p>
                </div>
                <div class="col s12 pad0-xs sub-txt-div-wrapper">
                  <div class="sub-txt-div-block visible-sm-xs">
                      <img src="../assets/images/board-meeting.jpg" alt="board-meeting" class="meeting-img">
                  </div>
                  <div class="sub-txt-div-block hidden-sm-xs">
                  </div>
                  <div class="sub-txt-div-block">
                      <p class="text-justify abt-p-txt">
                          Beyond challenging citations, we have also expanded into a resource for 
                          Californians and visitors alike. Educating the public on traffic laws and their 
                          impact while providing resources and tips for safe driving is the best way to 
                          ensure for a safer California.
                      </p>
                      <p class="text-justify abt-p-txt">
                          We at Ticket Snipers are here for everyone because we understand the impact a 
                          traffic ticket can have on our client’s lives. We know they cannot take time 
                          away from work to sit in court or attend traffic school, nor can they afford 
                          high fines or elevated insurance rates.
                      </p>
                  </div>
                </div>
            </div>
        </div>
    </section>

    <section id="other-companies">
        <div class="row">
            <div class="container center">
                <h3 class="abt-header-title">
                    We’re ready to help beat your ticket 
                </h3>
                <div class="company-logos flex-div">
                    <div class="company-logo-block">
                        <img src="../assets/images/abc-logo.png" alt="abc logo" class="company-logo">
                    </div>
                    <div class="company-logo-block">
                        <img src="../assets/images/fox-logo.png" alt="fox logo" class="company-logo">
                    </div>
                    <div class="company-logo-block">
                        <img src="../assets/images/nma-logo.png" alt="nma logo" class="company-logo">
                    </div>
                    <div class="company-logo-block">
                        <img src="../assets/images/bbb-logo.png" alt="bbb logo" class="company-logo">
                    </div>
                    <div class="company-logo-block">
                        <img src="../assets/images/cnn-logo.png" alt="cnn logo" class="company-logo">
                    </div>
                </div>
                <p class="more-txt-1">
                    Licensed, Bonded and Accredited throughout the entire State of California
                </p>
            </div>
        </div>
    </section>

    <CalculatorTriggerSect2 />
  </div>
</template>

<script>
import CalculatorTriggerSect2 from '../components/CalculatorTriggerSect.vue'
export default {
    name: "About",
    components: {
        CalculatorTriggerSect2
    }
}
</script>

<style src="../assets/css/home-2.css" scoped></style>

<style scoped>
#home {
    background: #F2F6FB;
}
#home::before {
    display: none;
}
.home-btn-wrapper {
    margin: 7% 0 4%;
}
@media(max-width: 992px) {
  #home {
    height: auto;
    min-height: auto;
    padding-bottom: 12px;
  }
}
</style>