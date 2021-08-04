<template>
  <div>
    <form action="#!" id="personal-info-form">
        <div class="account-details-block profile-pix-block">
            <div class="adb-title-side">
                <div class="abd-title">Change Profile Picture</div>
                <div class="adb-desc">Choose a new avatar to be used across Saptar</div>
            </div>
            <div class="adb-option-side right-align">
                <div class="file-field input-field">
                    <div class="btn avatar-img-wrapper">
                        <img src="../assets/images/insurance-bg.jpg" alt="user-img" id="avatar-img">
                        <input type="file" id="avatar-path">
                    </div>
                </div>
            </div>
        </div>
        <div class="account-details-block">
            <div class="adb-title-side">
                <div class="abd-title">Full Name</div>
                <div class="adb-desc">Customize your account name</div>
            </div>
            <div class="adb-option-side">
                <div class="adb-option-field grid-field-2">
                    <div class="input-field">
                        <input type="text" id="first_name" class="inp-field" value="Oladele"/>
                        <label for="first_name">First Name</label>
                    </div>
                    <div class="input-field">
                        <input type="text" id="last_name" class="inp-field" value="Oyebajo">
                        <label for="last_name">Last Name</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="account-details-block">
            <div class="adb-title-side">
                <div class="abd-title">Gender</div>
                <div class="adb-desc">How you would like to be identified</div>
            </div>
            <div class="adb-option-side">
                <div class="adb-option-field grid-field-3">
                    <div>
                        <label>
                            <input name="gender" type="radio" />
                            <span>Male</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input name="gender" type="radio" />
                            <span>Female</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input name="gender" type="radio" />
                            <span>Others</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="account-details-block">
            <div class="adb-title-side">
                <div class="abd-title">Date of Birth</div>
                <div class="adb-desc">For your birthday </div>
            </div>
            <div class="adb-option-side">
                <div class="adb-option-field">
                    <div class="input-field">
                        <input type="text" id="dob" class="inp-field datepicker" placeholder="Choose date"/>
                        <label for="dob">Date of Birth</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="account-details-block">
            <div class="adb-title-side">
                <div class="abd-title">Postal Address</div>
                <div class="adb-desc">Optional </div>
            </div>
            <div class="adb-option-side">
                <div class="adb-option-field">
                    <div class="input-field">
                        <input type="text" id="address" class="inp-field" placeholder="01 apt, residence, bus stop, state"/>
                        <label for="address">Postal Address</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="submit-btn-section right-align">
            <button type="submit" class="submit-btn btn pry-btn">Save Changes</button>
        </div>
    </form>
  </div>
</template>

<script>
import $ from 'jquery';
import M from 'materialize-css';
export default {
  name: "PersonalInfo",
  mounted(){
    var elemsDatepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elemsDatepicker, {
        format: 'dd/mm/yyyyy',
        yearRange: [1950, new Date().getFullYear() - 16]
    });
    $("#avatar-path").change(function(){
        var uploadedImageSrc = window.URL.createObjectURL(this.files[0]);
        $("#avatar-img").attr("src", uploadedImageSrc);
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
</style>

<style>
.datepicker-date-display, .datepicker-table td.is-selected {
    background-color: var(--pry-color) !important;
}
.datepicker-cancel, .datepicker-clear, .datepicker-today, .datepicker-done {
  color: var(--pry-color) !important;
}
[type="radio"]:not(:checked)+span:before, [type="radio"]:not(:checked)+span:after {
  border-color: var(--pry-color) !important;
}
</style>