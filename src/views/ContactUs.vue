<template>
  <div class="contact-page">
    <section id="home">
        <div class="row">
            <div id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3">
                <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3"></div>
                <!-- <a href="https://1map.com/map-embed">1 Map</a> -->
            </div>
        </div>
    </section>

    <section id="contact-container">
        <div class="row">
            <div class="container">
                <div class="col s12 l7" id="general-contact-side">
                    <h4 class="contact-sec-title">California Traffic Ticket Assistance </h4>
                    <p class="contact-sec-desc">
                        We Are Ready to help dismiss your California Traffic Ticket Statewide 
                        (Anywhere/Any City).
                    </p>
                    <div class="contact-details-wrapper">
                        <h5 class="cdb-title">General Contact</h5>
                        <div class="contact-details-block">
                            <ul class="general-contact-list">
                                <li class="pry-color">Ticket Snipers®</li>
                                <li>
                                    Direct: <a href="tel:+8886471120" class="sec-color">(888) 647-1120</a>
                                </li>
                                <li>
                                    Toll Free: <a href="tel:+8009858978" class="sec-color">(800) 985-8978</a>
                                </li>
                                <li>Fax: (877) 827-2269</li>
                                <li>Text: (619) 377-0150</li>
                            </ul>
                        </div>
                        <div class="contact-details-block cdb-more">
                            <div class="flex-div cdb-row">
                                <div class="cdb-img-div">
                                    <img src="../assets/images/envelope.svg" alt="mail" class="cdb-img">
                                </div>
                                <a href="mailto:legal@ticketsnipers.com" class="sec-color">Legal@TicketSnipers.com</a>
                            </div>
                            <div class="flex-div cdb-row">
                                <div class="cdb-img-div">
                                    <img src="../assets/images/clock.svg" alt="clock" class="cdb-img">
                                </div>
                                <span>8AM-6PM Weekdays</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col s12 m10 offset-m1 l5" id="contact-form-side">
                    <form action="#" class="col s12">
                        <div class="col s12">
                            <h5 class="form-title sec-color">Contact Us Now</h5>
                        </div>
                        <div class="col s12 pad0">
                            <div class="input-field col s12 m6">
                                <input id="first_name" name="first_name" type="text" class="">
                                <label for="first_name">First Name</label>
                                <img src="../assets/images/man.svg" alt="icon" class="input-icons">
                            </div>
                            <div class="input-field col s12 m6">
                                <input id="last_name" name="last_name" type="text" class="">
                                <label for="last_name">Last Name</label>
                                <img src="../assets/images/man.svg" alt="icon" class="input-icons">
                            </div>
                            <div class="input-field col s12 m12">
                                <input id="phone_number" name="phone_number" type="tel" class="">
                                <label for="phone_number">Phone Number</label>
                                <img src="../assets/images/smartphone.svg" alt="icon" class="input-icons">
                            </div>
                            <div class="input-field col s12 m12">
                                <input id="email" name="email" type="email" class="">
                                <label for="email">Email Address</label>
                                <img src="../assets/images/email.svg" alt="icon" class="input-icons">
                            </div>
                        </div>
                        <div class="col s12">
                            <div class="submit-btn-wrapper">
                                <button type="submit" class="submit-btn pry-btn btn">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
    name: "ContactUs",
    components: {},
    mounted() {
        (function () {
            var setting = {"height":400,"width":'100%',"zoom":15,"queryString":"San Diego, CA, USA","place_id":"ChIJSx6SrQ9T2YARed8V_f0hOg0","satellite":false,"centerCoord":[35.14584805243353,-117.88265796104724],"cid":"0xd3a21fdfd15df79","lang":"en","cityUrl":"/us/ca/san-diego","cityAnchorText":"Map of San Diego, California, United States","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"548562"};
            var d = document;
            var s = d.createElement('script');
            s.src = 'https://1map.com/js/script-for-user.js?embed_id=548562';
            s.async = true;
            s.onload = function () {
            window.OneMap.initMap(setting)
            };
            var to = d.getElementsByTagName('script')[0];
            to.parentNode.insertBefore(s, to);
        })();
    }
}
</script>

<style src="../assets/css/home-2.css" scoped></style>
<style src="../assets/css/contact.css" scoped></style>

<style scoped>
#home {
    background-color: var(--pry-color);
    min-height: 380px;
    height: 380px;
    /* background-image: url(../assets/images/map.jpg);
    background-attachment: inherit; */
}
#home::before {
    display: none;
}
@media(max-width: 992px) {
    #home {
        padding-top: 0;
    }
}
</style>