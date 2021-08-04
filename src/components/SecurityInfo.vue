<template>
  <div>
    <div id="security-info-forms-wrapper">
        <div class="s-info-block">
            <h5 class="s-form-block-title">Verified Information</h5>
            <div class="account-details-block">
                <div class="adb-title-side">
                    <div class="abd-title">Email Address</div>
                </div>
                <div class="adb-option-side">
                    <div class="adb-form-trigger flex-div">
                        <span class="adb-form-ans">olamide.oye@gmail.com</span>
                        <img src="../assets/images/pencil.svg" alt="edit" class="adb-form-img">
                    </div>
                    <form action="#!" class="adb-option-field" @submit.prevent hidden>
                        <div class="input-field">
                            <input type="email" id="email" class="inp-field" value="olamide.oye@gmail.com"/>
                            <label for="email">Email</label>
                        </div>
                        <div class="adb-btns-wrapper">
                            <button type="button" class="cancel-btn sec-btn btn">Cancel</button>
                            <button type="submit" class="pry-btn submit-btn btn truncate">Change Email</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="account-details-block">
                <div class="adb-title-side">
                    <div class="abd-title">Phone Number</div>
                </div>
                <div class="adb-option-side">
                    <div class="adb-form-trigger flex-div">
                        <span class="adb-form-ans">+1 (208) 660-4177</span>
                        <img src="../assets/images/pencil.svg" alt="edit" class="adb-form-img">
                    </div>
                    <form action="#!" class="adb-option-field" @submit.prevent hidden>
                        <div class="input-field">
                            <input type="tel" id="phone_number" class="inp-field" value="+1 (208) 660-4177"/>
                            <label for="tel">Phone Number</label>
                        </div>
                        <div class="adb-btns-wrapper">
                            <button type="button" class="cancel-btn sec-btn btn">Cancel</button>
                            <button type="submit" class="pry-btn submit-btn btn truncate">Change Phone Number</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="s-info-block">
            <h5 class="s-form-block-title">Password</h5>
            <div class="account-details-block">
                <div class="adb-title-side">
                    <div class="abd-title">Update Password</div>
                    <div class="adb-desc">Change your old password to a new one</div>
                </div>
                <div class="adb-option-side">
                    <div class="adb-form-trigger flex-div">
                        <span class="pry-color">Change Password</span>
                    </div>
                    <form action="#!" class="adb-option-field password-form" @submit.prevent hidden>
                        <div class="input-field">
                            <input type="password" id="old_password" class="inp-field" placeholder="Enter old password"/>
                            <label for="old_password">Old Password</label>
                        </div>
                        <div class="input-field">
                            <input type="password" id="new_password" class="inp-field" placeholder="Enter new password"/>
                            <label for="new_password">New Password</label>
                        </div>
                        <div class="input-field">
                            <input type="password" id="confirm_password" class="inp-field" placeholder="Re-enter new password"/>
                            <label for="confirm_password">Confirm Password</label>
                        </div>
                        <div class="adb-btns-wrapper">
                            <button type="button" class="cancel-btn sec-btn btn">Cancel</button>
                            <button type="submit" class="pry-btn submit-btn btn truncate">Change Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
// import M from 'materialize-css';
export default {
  name: "SecurityInfo",
  mounted(){
    $(".adb-form-trigger").click(function(){
        $(this).slideUp();
        $(this).parent().find("form.adb-option-field").slideDown();
    })
    $(".cancel-btn").click(function(){
        $(this).parent().parent().slideUp();
        $(this).parent().parent().parent().find(".adb-form-trigger").slideDown();
    });
    $("form.adb-option-field").submit(function(){
        var optionText = $(this).find(".input-field .inp-field").val();
        $(this).slideUp();
        $(this).parent().find(".adb-form-trigger").slideDown();
        $(this).parent().find(".adb-form-trigger .adb-form-ans").text(optionText);
    })
  }
}
</script>

<style scoped src="..\assets\css\dashboard.css"></style>

<style scoped>
button.submit-btn.btn.pry-btn {
    border-radius: 6px;
    height: 48px;
    font-size: 16px;
    font-family: var(--font2);
    font-weight: normal;
}
.submit-btn-section {
    margin-top: 40px;
}

.account-details-block {
    border: none;
    padding: 0;
    /* grid-template-columns: 250px 1fr; */
    align-items: normal;
}
</style>

<style></style>