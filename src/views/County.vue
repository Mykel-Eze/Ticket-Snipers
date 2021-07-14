<template>
  <div class="county-page">
    <section id="home">
        <div class="row">
            <div class="container">
                <div class="col s12 l7" id="title-side">
                    <h1 class="home-title">
                        <img src="../assets/images/county-logo.png" alt="county" class="county-logo">
                        <div class="sec-color">San Bernardino County Traffic Ticket Experts</div>
                    </h1>
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
                <div class="col s12 l10 pad0">
                    <div class="court-list-block">
                        <div>
                            <h4 class="flex-div">
                                <img src="../assets/images/court.svg" alt="court">
                                <span>
                                    Courthouses We Service In San Bernardino County
                                </span>
                            </h4>
                            <ul class="court-list">
                                <li>
                                    Victorville Courthouse - 14455 Civic Drive, Suite 200 Victorville, CA 92392
                                </li>
                                <li>
                                    San Bernadino Courthouse - 351 North Arrowhead Avenue San Bernadino, CA 92415-0220
                                </li>
                                <li>
                                    Rancho Cucamonga Courthouse - 8303 Haven Avenue Rancho Cucamonga, CA 91730
                                </li>
                                <li>
                                    Joshua Tree Courthouse - 6527 White Feather Road Joshua Tree, CA 92252
                                </li>
                                <li>
                                    Fontana Courthouse - 17780 Arrow Boulevard Fontana, CA 92335
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col s12 pad0 p-block-2">
                    <h4 class="abt-title">San Bernardino County Traffic Tickets</h4>
                    <p class="text-justify abt-p-txt">
                        The population of San Bernardino County, already 2.1 million, is expected 
                        to soar to 3.4 million by 2060. The county has more acreage than each of 
                        the nation’s nine smallest states. There are at least 35 official wilderness 
                        areas in San Bernardino County that are part of the National Wilderness 
                        Preservation System. Parts of three National Forests help keep the county green.
                    </p>
                    <p class="text-justify abt-p-txt">
                        Congestion on two heavily traveled freeways, Interstates 10 and 15, often slows 
                        traffic in San Bernardino County to a crawl. Plans are underway to improve 
                        traffic conditions, but neither the transportation tax nor the gas tax are 
                        bringing in the revenue that the county expected. Does that mean that city 
                        and county governments will be looking at traffic ticket fines to make up 
                        the shortfall? So many extra fees have been already been added to the $35 
                        base fine for failing to stop at a stop sign that drivers ticketed in San 
                        Bernardino County pay a total of $237 for the $35 ticket — unless they hire 
                        a traffic ticket expert to help beat their case.
                    </p>
                    <p class="text-justify abt-p-txt">
                        Traffic crimes like reckless driving make the news (particularly when news 
                        helicopters have the chance to film a high speed chase), but most traffic 
                        tickets in San Bernardino County are written for more mundane offenses, 
                        including speeding, DUI, red light violations, and illegal U-turns. Traffic 
                        ticket experts in San Bernardino County help drivers avoid the points that 
                        are assessed against their licenses as well as excessive fines.
                    </p>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script>
import TopBannerForm from '../components/TopBannerForm.vue'
export default {
    name: "County",
    components: { 
        TopBannerForm
    }
}
</script>

<style src="../assets/css/home-2.css" scoped></style>

<style scoped>
#home {
    background-color: #F2F6FB;
    background-image: url(../assets/images/breakdown-bg.png);
}
#home::before {
    display: none;
}
</style>

<style>
.county-page .get-started-home {
    color: rgba(2, 34, 83, 39%);
}
</style>