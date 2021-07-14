<template>
  <div class="cvc-page">
    <section id="home">
        <div class="row">
            <div class="container">
                <div class="col s12 l7" id="title-side">
                    <h1 class="home-title">
                        Speed Exceeding Posted Speed Limit-Basic Rule
                    </h1>
                    <div class="home-txt-desc">
                        <p> California Vehicle Code (Cvc) § 22350</p>
                        <p>
                            A Speed Exceeding Posted Speed Limit-Basic Rule ticket will cost you $238 
                            and Up in fines plus $1,000+ in insurance hikes and penalties.
                        </p>
                        <p class="smbold-txt">
                            Ticket Snipers can help challenge this alleged violation for only $179 and 
                            when dismissed will eliminate any future insurance hikes, DMV points and 
                            traffic school.
                        </p>
                    </div>
                    <div class="home-btn-wrapper">
                        <button class="pry-btn btn">Fight My Ticket </button>
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
                <div class="col s12 pad0 p-block-1">
                    <h4 class="abt-title">Basic Rule Speeding Tickets Are Beatable</h4>
                    <p class="text-justify abt-p-txt">
                        California Vehicle Code 22350 is heavily based on discretion and, as a result, 
                        can cause extensive frustration for the individual who is cited. This is 
                        especially true if you’re driving along at, or below, the posted speed limit 
                        and the officer cites you for driving too fast. You might ask yourself how 
                        that can even happen, but it can and does happen all the time.
                    </p>
                    <p class="quote-block">
                        <i>The “how” is due to California Vehicle Code 22350 which is referred to as the “Basic Speed Law”.</i>
                    </p>
                    <p class="text-justify abt-p-txt pry-color">
                        CVC 22350 <span class="sec-color">states,</span> “No person shall drive a vehicle upon a highway at a speed greater 
                        than is reasonable or prudent having due regard for weather, visibility, the 
                        traffic on, and the surface and width of, the highway, and in no event at a speed 
                        which endangers the safety of persons or property.”
                    </p>
                    <p class="text-justify abt-p-txt">
                        On the surface, that seems to be pretty reasonable – don’t drive too fast for the 
                        conditions. But who determines what that actually means? A poor driver might 
                        need to drop down to 25 mph under conditions that a good driver could easily 
                        handle at 35 or 40 mph. Even in <span class="pry-color">California</span>, 
                        there are areas which see a good bit of snow in the winter.
                    </p>
                    <p class="text-justify abt-p-txt">
                        So if you are heading to a ski resort, driving your 4-wheel drive vehicle through 
                        two feet of snow, and you are quite adept at doing so, you’re going to be able to 
                        drive at a faster speed in those conditions than someone who has never driven in 
                        the snow and is behind the wheel of a Mini Cooper.
                    </p>
                </div>

                <div class="col s12 pad0 p-block-2">
                    <h4 class="abt-title">The Officer has an Extremely High Burden of Proof</h4>
                    <p class="text-justify abt-p-txt">
                        So it’s the police officer who decides whether or not you are obeying or 
                        violating <span class="pry-color">CVC 22350</span> when you are seen driving through the white fluffy 
                        stuff at 45 mph. That makes this particular code quite subjective and not 
                        applicable in the same way to every driver.
                    </p>
                    <p class="text-justify abt-p-txt">
                        This discretionary approach does not only apply to snow, but to any other 
                        type of weather or traffic condition on the roadway. The reasons laws of 
                        this nature exist is to remind individuals to be conscious of their 
                        surrounding in relation to their speed. School zones and construction zones 
                        will often have designated signs to remind drivers to slow down, but drivers 
                        have the obligation under this law to be just as prudent when signage is not 
                        there to dictate a change in behavior.
                    </p>
                    <p class="text-justify abt-p-txt">
                        If you received a citation of this nature, our team is here to assist. Reach 
                        out to us for a free ticket review to better understand your options.
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
    name: "GeneralTraffic",
    components: { 
        TopBannerForm
    }
}
</script>

<style src="../assets/css/home-2.css" scoped></style>

<style scoped>
#home {
    background-image: url(../assets/images/car-bg.jpg);
    min-height: 600px;
}
</style>