<template>
  <div id="eligibility-calculator" class="modal modal-popup">
    <div class="modal-content">
        <form action="/auth-page" class="col s12 z-depth-5" id="eligibility-modal-form">
          <h4 class="modal-form-title center">Traffic Ticket Eligibility Calculator</h4>
          <h5 class="modal-sub-title center">
            Use the traffic ticket eligibility calculator to find out if you can fight 
            your ticket today
          </h5>
          <div class="field-and-details-wrappers">
            <div id="field-side-wrapper">
              <div>
                <div class="input-field col s12 m12 active">
                    <select class="short-inp" id="ticket-type-received" name="ticket-type-received">
                        <option value="" selected disabled>Type of Ticket(s) Received</option>
                        <option value="Cell Phone" question="Ticket Type">Cell Phone</option>
                        <option value="Seat Belt" question="Ticket Type">Seat Belt</option>
                        <option value="Red Light (Officer Issued)" question="Ticket Type">Red Light (Officer Issued)</option>
                        <option value="Red Light (Camera)" question="Ticket Type">Red Light (Camera)</option>
                        <option value="Speeding" question="Ticket Type">Speeding</option>
                        <option value="Stop Sign Violation" question="Ticket Type">Stop Sign Violation</option>
                        <option value="Lane Violation" question="Ticket Type">Lane Violation</option>
                        <option value="Carpool Violation" question="Ticket Type">Carpool Violation</option>
                        <option value="Other CA Traffic Ticket" question="Ticket Type">Other CA Traffic Ticket</option>
                    </select> 
                    <img src="../assets/images/caret-down.svg" alt="icon" class="input-icons">
                </div>
                <div class="input-field col s12 m12">
                    <select class="short-inp" id="ticket-county" name="ticket-county">
                      <option value="" selected disabled>County you Receive your Traffic Ticket?</option>
                      <option value="County 1" question="County">County 1</option>
                      <option value="County 2" question="County">County 2</option>
                      <option value="County 3" question="County">County 3</option>
                      <option value="County 4" question="County">County 4</option>
                      <option value="County 5" question="County">County 5</option>
                    </select> 
                    <img src="../assets/images/caret-down.svg" alt="icon" class="input-icons">
                </div>
                <div class="input-field col s12 m12">
                    <select class="short-inp" id="ticket-city" name="ticket-city">
                      <option value="" selected disabled>City did you Receive your Traffic Ticket?</option>
                      <option value="City 1" question="City">City 1</option>
                      <option value="City 2" question="City">City 2</option>
                      <option value="City 3" question="City">City 3</option>
                      <option value="City 4" question="City">City 4</option>
                      <option value="City 5" question="City">City 5</option>
                    </select> 
                    <img src="../assets/images/caret-down.svg" alt="icon" class="input-icons">
                </div>
                <div class="input-field col s12 m12">
                    <select class="short-inp" id="violation-road-type" name="violation-road-type">
                      <option value="" selected disabled>Alleged Violation Committed on Which Road Type</option>
                      <option value="Road Type 1" question="Road Type">Road Type 1</option>
                      <option value="Road Type 2" question="Road Type">Road Type 2</option>
                      <option value="Road Type 3" question="Road Type">Road Type 3</option>
                      <option value="Road Type 4" question="Road Type">Road Type 4</option>
                      <option value="Road Type 5" question="Road Type">Road Type 5</option>
                    </select> 
                    <img src="../assets/images/caret-down.svg" alt="icon" class="input-icons">
                </div>
              </div>
              <!-- <div class="calculate-savings-div">
                  <router-link to="#" class="calculate-savings-link pry-color">Calculate your savings?</router-link>
              </div> -->

              <div class="col s12">
                  <div class="flex-div* justify-content-btw form-links-cont">
                      <!-- <div class="get-started-home">
                          Got an account?
                          <a href="#login-block" class="pry-color"><span>Log in</span></a>
                      </div> -->
                      <div style="margin-top: 30px">
                          <button type="button" id="next-btn" class="submit-btn pry-btn btn">Next</button>
                      </div>
                  </div>
              </div>
            </div>
            <div id="details-box-wrapper">
              <div class="dbw">
                <h5>Your Traffic Ticket Deatils</h5>
                <ul class="option-details-list">
                  <li>
                    <span class="select-question">Ticket type</span>: 
                    <span class="selected-option">Sign Violation</span>
                  </li>
                  <li>
                    <span class="select-question">County</span>: 
                    <span class="selected-option">Amador</span>
                  </li>
                </ul>
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
import $ from 'jquery'
export default {
  name: "EligibilityCalculator",
  mounted() {
    var elemsModal = document.querySelectorAll('.modal');
    M.Modal.init(elemsModal);

    var elemsSelect = document.querySelectorAll("select");
    M.FormSelect.init(elemsSelect);

    $("#next-btn").click(function(){
        if($('#field-side-wrapper .input-field.active').is(":last-child")){
            $(this).attr('type', 'submit');
        } else {
          // Continue Button Function
          var inpField = $("#field-side-wrapper .input-field.active");

          $('#field-side-wrapper .input-field').removeClass('active');
          inpField.next().addClass('active');

          if($('#field-side-wrapper .input-field.active').is(":last-child")){
              $(this).text("Continue");
          }
        }
    })
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
  font-size: 14px;
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
  width: 10px;
}
.modal-overlay {
  background-color: rgba(2, 43, 105, 0.890379) !important;
  opacity: 0.9 !important;
}
</style>

<style scoped>
button.submit-btn.pry-btn.btn {
    min-width: 120px;
}
.modal.modal-popup {
    max-width: 520px;
    width: 70%;
}
</style>
