<template>
    <form action="#" class="col s12" id="home-top-form">
        <div class="col s12">
            <h4 class="form-title sec-color text-center-xs">Can My Ticket Be Beat?</h4>
            <h5 class="sub-form-title sec-color">Find out in  3 minutes. <span class="pry-color">No Charge.</span></h5>
        </div>
        <div class="col s12 pad0">
            <div class="input-field col s12 m12 rel">
                <div class="label-div">What type of ticket (traffic violation) did you receive?</div>
                <div class="rel">
                    <select class="short-inp" id="ticket-type" name="ticket-type">
                        <option value="" price="0" selected disabled>Select ticket type</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                        <option value="Option 5">Option 5</option>
                    </select> 
                    <img src="../assets/images/caret-down.svg" alt="icon" class="input-icons">
                </div>
            </div>
        </div>
        <div class="col s12">
            <div class="flex-div* justify-content-btw* form-links-cont">
                <div class="center">
                    <button type="submit" class="submit-btn pry-btn btn">Next Question</button>
                </div>
            </div>
            <div class="get-started-home">
                Prefer calling? 
                <router-link to="#" class="pry-color"><span>800-985-8978</span></router-link>
            </div>
        </div>
    </form>
</template>

<script>
import M from 'materialize-css'
export default {
    name: "TopBannerFormHome",
    mounted() {
        var elemsSelect = document.querySelectorAll("select");
        M.FormSelect.init(elemsSelect);
    }
}
</script>

<style>
.get-started-home {
    line-height: 3;
    font-weight: 500;
    margin-top: 10px;
}
#home-top-form input {
    background: #E9F0FD;
    border: 1px solid #D9E2EF;
    box-sizing: border-box;
    border-radius: 3px;
    height: 50px;
    padding-left: 0.85rem;
    padding-right: 5px;
    width: 100%;
}
#home-top-form input:focus{
    box-shadow: none;
}
#home-top-form label {
    left: 1.75rem;
    color: var(--sec-color);
    opacity: 0.57;
}
#home-top-form label.active{
    opacity: 1;
    left: 0.75rem;
    transform: translateY(-15px) scale(0.8);
}
#home-top-form .input-field {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
}
#home-top-form .dropdown-content li>a, 
#home-top-form .dropdown-content li>span {
    color: var(--sec-color);
}
.form-links-cont {
    margin-top: 0 !important;
}
img.input-icons {
    position: absolute;
    top: 15px;
    right: 22px;
}
#home-top-form .svg {
    display: none;
}
</style>

<style scoped>
#form-side form {
    background: rgba(255, 255, 255, 1);
    mix-blend-mode: normal;
    /* opacity: 0.85; */
    border: 1px solid rgba(0, 102, 245, 0.122023);
    box-sizing: border-box;
    box-shadow: 0px 12px 21px 10px rgba(4, 30, 139, 0.0478311);
    backdrop-filter: none;
    border-radius: 6px;
    padding: 30px 20px 40px;
    position: relative;
    top: 20px;
}
h4.form-title {
    font-family: var(--font-smbold);
    font-size: 30px;
    line-height: 35px;
}
.form-links-cont .center button.btn {
    width: 100%;
}
h5.sub-form-title {
    font-family: var(--font-medium);
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0px;
}
img.input-icons {
    top: 23px;
    z-index: 1;
}
.label-div {
    font-size: 14px;
    padding: 0.75rem;
    background: white;
    border: 1px solid #D9E2EF;
    box-sizing: border-box;
    border-radius: 3px 3px 0px 0px;
    text-align: center;
    min-height: 55px;
    line-height: 2;
}
</style>