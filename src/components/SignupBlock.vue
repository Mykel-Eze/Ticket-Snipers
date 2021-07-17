<template>
    <div>
        <h4 class="center auth-title">
            <span class="sec-color block-xs">Let's Begin,</span> Provide us the details so we can help you win!
        </h4>
        <div class="col s12 m10 offset-m1 l6 offset-l3" id="auth-stepsform-div">
            <ul class="step-progress white-txt">
                <li class="step-1 active">
                    <span></span>
                    <small>Contact Details</small>
                </li>
                <li class="step-2">
                    <span></span>
                    <small>Citation Type</small>
                </li>
                <li class="step-3">
                    <span></span>
                    <small>Payment</small>
                </li>
                <div class="progress">
                    <div class="determinate"></div>
                </div>
            </ul>
        </div>
        <form action="#" class="col s12 m10 offset-m1 l6 offset-l3" id="signup-form">
            <div class="col s12 pad0" id="fieldset-1">
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
                <div class="input-field col s12 m12">
                    <input id="password" name="password" type="password" class="">
                    <label for="password">Password</label>
                    <img src="../assets/images/eye-closed.svg" alt="icon" class="input-icons">
                    <div class="calculate-savings-div">
                        <router-link to="#" class="calculate-savings-link pry-color">Calculate your savings?</router-link>
                    </div>
                </div>

                <div class="col s12">
                    <div class="flex-div justify-content-btw form-links-cont">
                        <div class="get-started-home">
                            Got an account?
                            <a href="#" class="pry-color" @click="selectTab('login-block')"><span>Log in</span></a>
                        </div>
                        <div>
                            <button type="button" class="submit-btn pry-btn btn">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 pad0 hidden" id="fieldset-2">
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
                    <img src="../assets/images/ticket-id.svg" alt="icon" class="input-icons">
                </div>
                <div class="input-field col s12 m12">
                    <select class="short-inp" id="delivery-days" name="delivery-days" multiple>
                      <option value="" disabled>Expected Delievery Days</option>
                      <option value="Same Day">Same Day Delivery Extra $30</option>
                      <option value="Next Day">Next Day Delivery Extra $20</option>
                      <option value="5 Days">Five Day Delivery Extra $10</option>
                      <option value="10 Days">No Rush (10 Day Delivery)</option>
                    </select> 
                    <img src="../assets/images/date.svg" alt="icon" class="input-icons">
                </div>
                <div class="input-field col s12 m12">
                    <input id="ticket-due-date" name="ticket-date" type="text" class="datepicker" placeholder="Ticket Due Date">
                    <!-- <label for="ticket-due-date">Ticket Due Date</label> -->
                    <img src="../assets/images/date.svg" alt="icon" class="input-icons">
                </div>
                <div class="input-field file-field col s12 m12">
                    <div class="btn">
                        <input type="file" name="citation-upload">
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path" id="citation-upload" type="text" placeholder="Citation Upload">
                        <img src="../assets/images/picture.svg" alt="icon" class="input-icons">
                        <!-- <label for="citation-upload"><small>Choose a file (PDF, JPEG, PNG)</small></label> -->
                        <div class="calculate-savings-div">
                            <router-link to="#" class="calculate-savings-link pry-color">Calculate your savings?</router-link>
                        </div>
                    </div>
                </div>

                <div class="col s12">
                    <div class="flex-div justify-content-btw form-links-cont">
                        <div class="get-started-home">
                            Got an account?
                            <a href="#" class="pry-color" @click="selectTab('login-block')"><span>Log in</span></a>
                        </div>
                        <div>
                            <button type="button" class="submit-btn pry-btn btn">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 pad0 hidden" id="fieldset-3">
                <div class="input-field col s12 m6">
                    <input id="card_first_name" name="card_first_name" type="text" class="">
                    <label for="card_first_name">First Name</label>
                    <img src="../assets/images/man.svg" alt="icon" class="input-icons">
                </div>
                <div class="input-field col s12 m6">
                    <input id="card_last_name" name="card_last_name" type="text" class="">
                    <label for="card_last_name">Last Name</label>
                    <img src="../assets/images/man.svg" alt="icon" class="input-icons">
                </div>
                <div class="input-field col s12 m12">
                    <input id="credit_card_number" name="credit_card_number" type="tel" class="credit-card">
                    <label for="credit_card_number">Credit Card Number</label>
                    <img src="../assets/images/card.svg" alt="icon" class="input-icons">
                </div>
                <div class="input-field col s12 m6">
                    <input id="card_exp_date" name="card_exp_date" type="text" class="" maxlength="5">
                    <label for="card_exp_date">Exp Date <small>(MM/YY)</small></label>
                    <img src="../assets/images/card.svg" alt="icon" class="input-icons">
                </div>
                <div class="input-field col s12 m6">
                    <input id="cvv" name="cvv" type="tel" class="" maxlength="4">
                    <label for="cvv">CVV</label>
                    <img src="../assets/images/card.svg" alt="icon" class="input-icons">
                </div>

                <div class="col s12">
                    <div class="flex-div justify-content-btw form-links-cont">
                        <div class="get-started-home cards-brands-div">
                            <img src="../assets/images/cards-brands.png" alt="cards" class="cards-brands">
                        </div>
                        <div>
                            <button type="submit" class="submit-btn pry-btn btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div class="flex-div below-form-txt col s12 m10 offset-m1 l6 offset-l3">
            <div class="fg-1">
                Trouble signing in? <a href="#" class="pry-color">Contact support</a>
            </div>
            <div class="below-form-link">
                <router-link to="#"> Privacy</router-link>
                <span> | </span>
                <router-link to="#">Terms</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import M from 'materialize-css'
import $ from 'jquery'

export default {
    name: "Signup",
    methods: {
        selectTab(tabID) {
            var elemsTabs = document.querySelector('.tabs');
            M.Tabs.getInstance(elemsTabs).select(tabID);
        }
    },
    mounted(){
        var elemsSelect = document.querySelectorAll("select");
        M.FormSelect.init(elemsSelect);

        var elemsDatepicker = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elemsDatepicker, {
            autoClose: true
        });

        //Stepforms Toggles
        $("#fieldset-1 button.submit-btn").click(function(){
            $("#fieldset-1").slideUp();
            $("#fieldset-2").slideDown();
            $("li.step-2").addClass("active");
            $("ul.step-progress .progress .determinate").width("50%");
        });
        $("#fieldset-2 button.submit-btn").click(function(){
            $("#fieldset-2").slideUp();
            $("#fieldset-3").slideDown();
            $("li.step-3").addClass("active");
            $("ul.step-progress .progress .determinate").width("98%");
        });
        $("ul.step-progress").click(function(){
            $("#fieldset-3").slideUp();
            $("#fieldset-1").slideDown();
            $("li.step-3, li.step-2").removeClass("active");
            $("ul.step-progress .progress .determinate").width("0%");
        });

        function cc_format(value) {
            var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
            var matches = v.match(/\d{4,16}/g);
            var match = matches && matches[0] || ''
            var parts = []
            var len, i ;
            for (i = 0, len = match.length; i < len; i += 4) {
                parts.push(match.substring(i, i + 4))
            }
            if (parts.length) {
                return parts.join(' ')
            } else {
                return value
            }
        }

        $(document).ready(function () {
            $('input.credit-card').keyup(function () {
                $(this).val(cc_format($(this).val()))
            })
        });
    }
}
</script>

<style src="../assets/css/auth.css" scoped></style>

<style>
form#signup-form .select-wrapper input.select-dropdown {
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
/* form#signup-form .select-wrapper ul.dropdown-content {
    background: #E9F0FD;
    mix-blend-mode: normal;
} */
form#signup-form .dropdown-content li>span {
    color: rgba(2, 43, 105, 0.57);
    mix-blend-mode: normal;
    font-size: 14px;
}
form#signup-form .select-wrapper .caret {
    right: 35px;
    z-index: 1;
}
form#signup-form li:not(.disabled) [type="checkbox"]:checked+span:not(.lever):before {
    border-right-color: var(--pry-color);
    border-bottom-color: var(--pry-color);
}
form#signup-form .modal.datepicker-modal.open {
    position: absolute;
    width: 100%;
    border-radius: 16px;
    top: -10px !important;
}
form#signup-form .modal.datepicker-modal.open + .modal-overlay {
    background: transparent;
}
form#signup-form .datepicker-date-display {
    display: none;
}
form#signup-form .modal.datepicker-modal.open .select-wrapper input.select-dropdown {
    background: #fafafa;
    border: none;
    height: 3rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}
form#signup-form .modal.datepicker-modal.open .datepicker-footer {
    display: none;
}
form#signup-form .datepicker-table td.is-selected {
    background-color: var(--pry-color);
}
form#signup-form .datepicker-table td.is-today {
    color: var(--pry-color);
}
form#signup-form .datepicker-day-button:focus {
    background-color: rgba(0,102,245,0.25);
}
form#signup-form .datepicker-container.modal-content {
    padding: 24px 0;
}
div#datepicker-title-om > button {
    border: 1px solid var(--sec-color);
    border-radius: 50%;
    width: 25px;
    padding: 0;
    height: 25px;
    background: transparent !important;
}
form#signup-form .datepicker-controls {
    align-items: center;
}
</style>
