<template>
  <div id="eligibility-calculator" class="modal modal-popup">
    <div class="modal-content">
        <form action="/auth-page#signup-block" class="col s12 z-depth-5" id="eligibility-modal-form">
          <h4 class="modal-form-title center">Traffic Ticket Eligibility Calculator</h4>
          <h5 class="modal-sub-title center">
            Use the traffic ticket eligibility calculator to find out if you can fight 
            your ticket today
          </h5>
          <div class="input-field col s12 m12">
              <select class="short-inp" id="ticket-type-received" name="ticket-type-received" multiple>
                  <option value="" disabled>Type of Ticket(s) Received</option>
                  <option value="Cell Phone">Cell Phone</option>
                  <option value="Seat Belt">Seat Belt</option>
                  <option value="Red Light (Officer Issued)">Red Light (Officer Issued)</option>
                  <option value="Red Light (Camera)">Red Light (Camera)</option>
                  <option value="Speeding">Speeding</option>
                  <option value="Stop Sign Violation">Stop Sign Violation</option>
                  <option value="Lane Violation">Lane Violation</option>
                  <option value="Carpool Violation">Carpool Violation</option>
                  <option value="Other CA Traffic Ticket">Other CA Traffic Ticket</option>
              </select> 
              <img src="../assets/images/caret-down.svg" alt="icon" class="input-icons">
          </div>
          <div class="input-field col s12 m12">
              <select class="short-inp" id="ticket-county" name="ticket-county">
                <option value="" disabled>County you Receive your Traffic Ticket?</option>
                <option value="County 1">County 1</option>
                <option value="County 2">County 2</option>
                <option value="County 3">County 3</option>
                <option value="County 4">County 4</option>
                <option value="County 5">County 5</option>
              </select> 
              <img src="../assets/images/caret-down.svg" alt="icon" class="input-icons">
          </div>
          <div class="input-field col s12 m12">
              <select class="short-inp" id="ticket-city" name="ticket-city">
                <option value="" disabled>City did you Receive your Traffic Ticket?</option>
                <option value="City 1">City 1</option>
                <option value="City 2">City 2</option>
                <option value="City 3">City 3</option>
                <option value="City 4">City 4</option>
                <option value="City 5">City 5</option>
              </select> 
              <img src="../assets/images/caret-down.svg" alt="icon" class="input-icons">
          </div>
          <div class="input-field col s12 m12">
              <select class="short-inp" id="violation-road-type" name="violation-road-type">
                <option value="" disabled>Alleged Violation Committed on Which Road Type</option>
                <option value="Road Type 1">Road Type 1</option>
                <option value="Road Type 2">Road Type 2</option>
                <option value="Road Type 3">Road Type 3</option>
                <option value="Road Type 4">Road Type 4</option>
                <option value="Road Type 5">Road Type 5</option>
              </select> 
              <img src="../assets/images/caret-down.svg" alt="icon" class="input-icons">
          </div>

          <div class="calculate-savings-div">
              <router-link to="#" class="calculate-savings-link pry-color">Calculate your savings?</router-link>
          </div>

          <div class="col s12">
              <div class="flex-div justify-content-btw form-links-cont">
                  <div class="get-started-home">
                      Got an account?
                      <a href="#login-block" class="pry-color"><span>Log in</span></a>
                  </div>
                  <div>
                      <button type="submit" class="submit-btn pry-btn btn">Next</button>
                  </div>
              </div>
          </div>
        </form>
        <div class="flex-div below-form-txt col s12 m10 offset-m1 l6 offset-l3">
            <div class="fg-1">
                Trouble signing in? <router-link to="/contact-us" class="white-txt"><u>Contact support</u></router-link>
            </div>
            <div class="below-form-link">
                <router-link to="#"> <u>Privacy</u></router-link>
                <span> | </span>
                <router-link to="#"><u>Terms</u></router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import M from "materialize-css"
export default {
  name: "EligibilityCalculator",
  mounted() {
    var elemsModal = document.querySelectorAll('.modal');
    M.Modal.init(elemsModal);

    var elemsSelect = document.querySelectorAll("select");
    M.FormSelect.init(elemsSelect);
  }
}
</script>

<style src="../assets/css/modals.css" scoped></style>

<style>
form#eligibility-modal-form .select-wrapper input.select-dropdown {
  background: #E9F0FD;
  border: 1px solid #D9E2EF;
  box-sizing: border-box;
  border-radius: 3px;
  height: 50px;
  padding-left: 0.85rem;
  padding-right: 5px;
  width: 100%;
  color: rgba(2, 43, 105, 0.57);
  mix-blend-mode: normal;
}

form#eligibility-modal-form .dropdown-content li>span {
  color: rgba(2, 43, 105, 0.57);
  mix-blend-mode: normal;
  font-size: 14px;
}
form#eligibility-modal-form .select-wrapper .caret {
  display: none;
}
form#eligibility-modal-form img.input-icons {
  position: absolute;
  top: 23px;
  right: 20px;
  z-index: 1;
}
.modal-overlay {
  background-color: rgba(2, 43, 105, 0.890379) !important;
  opacity: 0.9 !important;
}
</style>
