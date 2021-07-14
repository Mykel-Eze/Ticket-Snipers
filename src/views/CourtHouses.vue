<template>
  <div class="courthouses-page">
    <section id="home">
        <div class="row">
            <div class="container">
                <div class="col s12 l7" id="title-side">
                    <div class="col s12 l10 pad0">
                        <h1 class="home-title">
                            Santa Monica Courthouse
                        </h1>
                        <h4 class="home-sub-title">
                            Los Angeles County Courthouses: Santa Monica, Ca
                        </h4>
                        <p class="address-title">
                            Santa Monica Courthouse Location: 1725 Main Street, Santa Monica, CA 90401 
                        </p>
                        <div class="more-court-details">
                            <div class="flex-div">
                                <img src="../assets/images/telephone.svg" alt="telephone" class="mcd-img">
                                <a href="tel:+2137426648" class="white-txt">(213) 742-6648</a>
                            </div>
                            <div class="flex-div">
                                <img src="../assets/images/clock-2.svg" alt="clock" class="mcd-img">
                                <span class="white-txt">Mon-Fri 9am - 5pm</span>
                            </div>
                            <div class="flex-div">
                                <img src="../assets/images/globe.svg" alt="globe" class="mcd-img">
                                <a href="mailto:lasuperiorcourt.org" class="white-txt">lasuperiorcourt.org</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col s12 l5 pad0" id="form-side">
                    <TopBannerForm formTitleText="Request Free Review" />
                </div>
            </div>
        </div>
    </section>

    <section id="more-about">
        <div class="row">
            <div class="container">
                <div class="court-map-grid">
                    <div class="court-list-block">
                        <div>
                            <h4 class="flex-div">
                                <img src="../assets/images/court.svg" alt="court">
                                <span>
                                    Other Courthouses in Los Angeles County we service
                                </span>
                            </h4>
                            <ul class="court-list">
                                <li>West Covina Courthouse (91790)</li>
                                <li>Van Nuys Courthouse (91401)</li>
                                <li>Torrance Courthouse (90503)</li>
                                <li>Santa Clarita Courthouse (91355)</li>
                                <li>San Fernando Courthouse (91340)</li>
                                <li>Pomona Courthouse (91766)</li>
                                <li>Pasadena Courthouse (91101)</li>
                                <li>Lancaster Courthouse (93534)</li>
                            </ul>
                        </div>
                    </div>
                    <div class="map-block">
                        <h5 class="map-title">Interactive map to the Santa Monica Courthouse</h5>
                        <div class="map-container">
                            <div id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3">
                                <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3"></div>
                                <!-- <a href="https://1map.com/map-embed">1 Map</a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script>
import TopBannerForm from '../components/TopBannerForm.vue'
export default {
    name: "CourtHouses",
    components: { 
        TopBannerForm
    },
    mounted() {
        (function () {
            var setting = {"height":380,"width":'100%',"zoom":17,"queryString":"Santa Monica Courthouse, Main Street, Santa Monica, CA, USA","place_id":"ChIJC3MfTtSkwoARRkyRCQLCx6k","satellite":false,"centerCoord":[35.14584805243353,-117.88265796104724],"cid":"0xa9c7c20209914c46","lang":"en","cityUrl":"/us/ca/california-city-43584","cityAnchorText":"Map of California City, California, United States","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"548562"};
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

<style scoped>
#home {
    background-image: url(../assets/images/court-house.jpg);
    /* min-height: 600px; */
}
</style>