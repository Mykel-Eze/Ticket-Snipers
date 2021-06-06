<template>
    <form action="#" class="col s12">
        <div class="col s12">
            <h5 class="form-title sec-color">Free speeding ticket review</h5>
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
            <div class="flex-div justify-content-btw form-links-cont">
                <div class="get-started-home">
                    Fight My Ticket? 
                    <router-link to="#" class="sec-color"><span>Get Started</span></router-link>
                </div>
                <div>
                    <button type="submit" class="submit-btn pry-btn btn">Submit</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: "TopBannerForm"
}
</script>

<style>

</style>