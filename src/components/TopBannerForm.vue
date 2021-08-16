<template>
    <form action="#" class="col s12">
        <div class="col s12">
            <h5 class="form-title sec-color text-center-xs">{{ formTitleText }}</h5>
            <!-- <h5 class="form-title sec-color">Free speeding ticket review</h5> -->
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
            <div class="flex-div* justify-content-btw* form-links-cont">
                <!-- <div class="get-started-home">
                    Fight My Ticket? 
                    <router-link to="#" class="sec-color"><span>Get Started</span></router-link>
                </div> -->
                <div class="center">
                    <button type="submit" class="submit-btn pry-btn btn">Submit</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: "TopBannerForm",
    props: {
        formTitleText: String
    }
}
</script>

<style>
#form-side form {
    background: rgba(255, 255, 255, 0.342029);
    mix-blend-mode: normal;
    opacity: 0.85;
    border: 1px solid rgba(0, 102, 245, 0.122023);
    box-sizing: border-box;
    box-shadow: 0px 12px 21px 10px rgba(4, 30, 139, 0.0478311);
    backdrop-filter: blur(81.5485px);
    border-radius: 6px;
    padding: 30px 20px 40px;
    position: relative;
    top: 20px;
}
.get-started-home {
    line-height: 3;
    font-weight: 500;
}
h5.form-title {
    font-weight: 600;
    font-size: 26px;
    margin-bottom: 30px;
}
#form-side form input {
    background: #E9F0FD;
    border: 1px solid #D9E2EF;
    box-sizing: border-box;
    border-radius: 3px;
    height: 50px;
    padding-left: 0.85rem;
    padding-right: 5px;
    width: 100%;
}
#form-side form input:focus{
    box-shadow: 0 1px 0 0 var(--sec-color);
}
#form-side form label {
    left: 1.75rem;
    color: var(--sec-color);
    opacity: 0.57;
}
#form-side form label.active{
    opacity: 1;
    left: 0.75rem;
    transform: translateY(-15px) scale(0.8);
}
#form-side form .input-field {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
}
.form-links-cont {
    margin-top: 20px;
}
img.input-icons {
    position: absolute;
    top: 15px;
    right: 22px;
}
</style>

<style scoped>
.form-links-cont .center button.btn {
    width: 60%;
}
</style>