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
        <form action="/welcome" class="col s12 m10 offset-m1 l6 offset-l3" id="signup-form">
            <div class="col s12 pad0" id="fieldset-1">
                <div class="col s12 form-title-txt">
                    <h4>My Contact Information</h4>
                    <span>Your information will remail 100% safe, private, and secure.</span>
                </div>
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
                        <!-- <router-link to="#" class="calculate-savings-link pry-color">Calculate your savings?</router-link> -->
                    </div>
                </div>

                <div class="col s12 form-footer-txt">
                    <span>
                        We recognize this email address. this ticket will be added to your pre-existing acount.
                    </span>
                </div>

                <div class="col s12" id="continue-btn-wrapper-1">
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
                <div id="inp-field-wrapper">
                    <div class="citation-block" id="citation-block-1">
                        <div class="col s12 form-title-txt">
                            <h4>Type of Ticket Received</h4>
                            <span>You can select more one violations</span>
                        </div>
                        <div class="col s12 option-details-wrapper">
                            <div class="options-wrapper">
                                <label class="option-block">
                                    <input type="checkbox" name="ticket_type" value="Cell Phone" checked="checked"/>
                                    <div></div>
                                    <span class="truncate">Cell Phone</span>
                                </label>
                                <label class="option-block">
                                    <input type="checkbox" name="ticket_type" value="Stop Sign Violation"/>
                                    <div></div>
                                    <span class="truncate">Stop Sign Violation</span>
                                </label>
                                <label class="option-block">
                                    <input type="checkbox" name="ticket_type" value="Seat Belt"/>
                                    <div></div>
                                    <span class="truncate">Seat Belt</span>
                                </label>
                                <label class="option-block">
                                    <input type="checkbox" name="ticket_type" value="Lane Violation"/>
                                    <div></div>
                                    <span class="truncate">Lane Violation</span>
                                </label>
                                <label class="option-block">
                                    <input type="checkbox" name="ticket_type" value="Red Light (Officer Issued)"/>
                                    <div></div>
                                    <span class="truncate">Red Light (Officer Issued)</span>
                                </label>
                                <label class="option-block">
                                    <input type="checkbox" name="ticket_type" value="Carpool Violation"/>
                                    <div></div>
                                    <span class="truncate">Carpool Violation</span>
                                </label>
                                <label class="option-block">
                                    <input type="checkbox" name="ticket_type" value="Speeding"/>
                                    <div></div>
                                    <span class="truncate">Speeding</span>
                                </label>
                                <label class="option-block">
                                    <input type="checkbox" name="ticket_type" value="Speeding Over 100MPH"/>
                                    <div></div>
                                    <span class="truncate">Speeding Over 100MPH</span>
                                </label>
                                <label class="option-block">
                                    <input type="checkbox" name="ticket_type" value="Red Light (Camera)"/>
                                    <div></div>
                                    <span class="truncate">Red Light (Camera)</span>
                                </label>
                                <label class="option-block">
                                    <input type="checkbox" name="ticket_type" value="Other CA Traffic Ticket"/>
                                    <div></div>
                                    <span class="truncate">Other CA Traffic Ticket</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="citation-block" id="citation-block-2">
                        <div class="col s12 form-title-txt">
                            <h4>Expected defense document delivery date</h4>
                            <span>Select expected delivery Day</span>
                        </div>
                        <div class="col s12 option-details-wrapper">
                            <div class="options-wrapper">
                                <label class="option-block">
                                    <input type="radio" name="expected-defense" value="$30 - Same Day Delivery" checked="checked" required />
                                    <div></div>
                                    <span class="truncate">$30 - Same Day Delivery</span>
                                </label>
                                <label class="option-block">
                                    <input type="radio" name="expected-defense" value="$20 - Next Day Delivery" required />
                                    <div></div>
                                    <span class="truncate">$20 - Next Day Delivery </span>
                                </label>
                                <label class="option-block">
                                    <input type="radio" name="expected-defense" value="$10 - Five Day Delivery" required />
                                    <div></div>
                                    <span class="truncate">$10 - Five Day Delivery</span>
                                </label>
                                <label class="option-block">
                                    <input type="radio" name="expected-defense" value="No Rush (10 Day Delivery)" required />
                                    <div></div>
                                    <span class="truncate">No Rush (10 Day Delivery)</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="citation-block" id="citation-block-3">
                        <div class="col s12 form-title-txt">
                            <h4>Ticket Due Date</h4>
                            <span>Select on the calendar ticket due date</span>
                        </div>
                        <div class="col s12 option-details-wrapper">
                            <div class="input-field col s12 m12 pad0 mag-0">
                                <input id="ticket-due-date" name="ticket-date" type="text" class="datepicker" placeholder="Ticket Due Date">
                                <!-- <label for="ticket-due-date">Ticket Due Date</label> -->
                                <img src="../assets/images/date.svg" alt="icon" class="input-icons">
                            </div>
                        </div>
                    </div>
                    <div class="citation-block" id="citation-block-4">
                        <div class="col s12 form-title-txt">
                            <h4>Upload the ticket your recieved</h4>
                            <span> PDF, JPEG, PNG</span>
                        </div>
                        <div class="col s12 option-details-wrapper">
                            <div class="input-field file-field col s12 m12 pad0 mag-0">
                                <div class="btn">
                                    <input type="file" name="citation-upload">
                                </div>
                                <div class="file-path-wrapper">
                                    <input class="file-path" id="citation-upload" type="text" placeholder="Citation Upload">
                                    <img src="../assets/images/picture.svg" alt="icon" class="input-icons">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col s12" id="continue-btn-wrapper-2">
                    <div class="flex-div justify-content-btw form-links-cont">
                        <div class="">
                            <div class="price-box">
                                $<span id="price-box-figure">0</span>
                            </div>
                            <a class='dropdown-trigger pry-color' href='#' data-target='savings-breakdown'>Calculate your savings here</a>

                            <!-- Dropdown Structure -->
                            <ul id='savings-breakdown' class='dropdown-content'>
                                <li class="dp-title-bar">
                                    <span>Calculate  your savings here</span>
                                </li>
                                <li class="dp-title">
                                    <h4>Financial benefit breakedown</h4>
                                </li>
                                <li class="divider" tabindex="-1"></li>
                                <li class="nesting-li">
                                    <ul class="nested-ul">
                                        <li class="flex-div">
                                            <span class="option-txt">Service Fee</span>
                                            <span class="answer-txt pry-color">$55</span>
                                        </li>
                                        <li class="flex-div">
                                            <span class="option-txt">Legal Help</span>
                                            <span class="answer-txt pry-color">$250</span>
                                        </li>
                                        <li class="flex-div">
                                            <span class="option-txt">Ticket Fee</span>
                                            <span class="answer-txt pry-color">$250- $500</span>
                                        </li>
                                        <li class="flex-div">
                                            <span class="option-txt">Insurance Increase Higher rates for 3 years</span>
                                            <span class="answer-txt pry-color">$800&nbsp;-&nbsp;$1200</span> 
                                        </li>
                                    </ul>
                                </li>
                                <li class="divider" tabindex="-1"></li>
                                <li class="dp-footer">
                                    <h4 class="pry-color">Save over $1000</h4>
                                    <span>by using TicketSniper.com</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button type="button" id="continue-btn" class="submit-btn pry-btn btn">Next</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 pad0 hidden" id="fieldset-3">
                <div class="col s12 form-title-txt flex-div">
                    <h4>Payment&nbsp;Information</h4>
                    <img src="../assets/images/cards-brands.png" alt="cards" class="cards-brands">
                </div>
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
                <div class="input-field col s12 m6">
                    <input id="credit_card_number" name="credit_card_number" type="tel" class="credit-card">
                    <label for="credit_card_number">Credit Card Number</label>
                    <img src="../assets/images/card.svg" alt="icon" class="input-icons">
                </div>
                <div class="input-field col s12 m6">
                    <input id="cvv" name="cvv" type="tel" class="" maxlength="4">
                    <label for="cvv">CVV</label>
                    <img src="../assets/images/card.svg" alt="icon" class="input-icons">
                </div>
                <div class="input-field col s12 m6">
                    <input id="card_exp_month" name="card_exp_month" type="text" class="" maxlength="5">
                    <label for="card_exp_month">Exp Month <small>(MM)</small></label>
                    <img src="../assets/images/card.svg" alt="icon" class="input-icons">
                </div>
                <div class="input-field col s12 m6">
                    <input id="card_exp_year" name="card_exp_year" type="text" class="" maxlength="5">
                    <label for="card_exp_year">Exp Year <small>(YY)</small></label>
                    <img src="../assets/images/card.svg" alt="icon" class="input-icons">
                </div>

                <div class="col s12">
                    <div class="flex-div justify-content-btw form-links-cont">
                        <div class="text-center-xs">
                            <span class="ts-fee">Ticket Snipers Fee <b>$179</b></span> <br />
                            <a class='dropdown-trigger pry-color' href='#' data-target='savings-breakdown-2'>Calculate your savings here</a>
                            <!-- Dropdown Structure -->
                            <ul id='savings-breakdown-2' class='dropdown-content'>
                                <li class="dp-title-bar">
                                    <span>Calculate  your savings here</span>
                                </li>
                                <li class="dp-title">
                                    <h4>Financial benefit breakedown</h4>
                                </li>
                                <li class="divider" tabindex="-1"></li>
                                <li class="nesting-li">
                                    <ul class="nested-ul">
                                        <li class="flex-div">
                                            <span class="option-txt">Service Fee</span>
                                            <span class="answer-txt pry-color">$55</span>
                                        </li>
                                        <li class="flex-div">
                                            <span class="option-txt">Legal Help</span>
                                            <span class="answer-txt pry-color">$250</span>
                                        </li>
                                        <li class="flex-div">
                                            <span class="option-txt">Ticket Fee</span>
                                            <span class="answer-txt pry-color">$250- $500</span>
                                        </li>
                                        <li class="flex-div">
                                            <span class="option-txt">Insurance Increase Higher rates for 3 years</span>
                                            <span class="answer-txt pry-color">$800&nbsp;-&nbsp;$1200</span> 
                                        </li>
                                    </ul>
                                </li>
                                <li class="divider" tabindex="-1"></li>
                                <li class="dp-footer">
                                    <h4 class="pry-color">Save over $1000</h4>
                                    <span>by using TicketSniper.com</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button type="submit" class="submit-btn pry-btn btn disabledBtn">Submit</button>
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
        },
        fieldset1_checker() {
            $('#fieldset-1 .input-field input').keyup(function() {
                var isEmpty = false;

                $('#fieldset-1 .input-field input').each(function() {
                    if ( $(this).val() === '' ){
                        isEmpty = true;
                    }
                });
                var EmailField = $("#email").val();
                var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
                if (isEmpty) {
                    $('#fieldset-1 button.submit-btn').addClass('disabledBtn'); 
                } else {
                    if (testEmail.test(EmailField)){
                        $('#fieldset-1 button.submit-btn').removeClass('disabledBtn'); 
                        $('#fieldset-1 button.submit-btn').addClass('activatedBtn'); 
                    }
                }
            });
        },
        // Check if all fields are filled in "Fieldset-2"
        fieldset2_checker() {
            $('#fieldset-2 .input-field input').keyup(function() {
                var isEmpty = false;

                $('#fieldset-2 .input-field input').each(function() {
                    if ( $(this).val() === '' ){
                        isEmpty = true;
                    }
                });
                if (isEmpty) {
                    $('#fieldset-2 button.submit-btn').addClass('disabledBtn'); 
                } else {
                    $('#fieldset-2 button.submit-btn').removeClass('disabledBtn'); 
                    $('#fieldset-2 button.submit-btn').addClass('activatedBtn'); 
                }
            });
        },
        // Check if all fields are filled in "Fieldset-3"
        fieldset3_checker() {
            $('#fieldset-3 .input-field input').keyup(function() {
                var isEmpty = false;

                $('#fieldset-3 .input-field input').each(function() {
                    if ( $(this).val() === '' ){
                        isEmpty = true;
                    }
                });
                if (isEmpty) {
                    $('#fieldset-3 button.submit-btn').addClass('disabledBtn'); 
                } else {
                    $('#fieldset-3 button.submit-btn').removeClass('disabledBtn'); 
                    $('#fieldset-3 button.submit-btn').addClass('activatedBtn'); 
                }
            });
        }
    },
    mounted(){
        var elemsSelect = document.querySelectorAll("select");
        M.FormSelect.init(elemsSelect);

        var elemsDatepicker = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elemsDatepicker, {
            autoClose: true
        });

        var elemsDropdown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elemsDropdown, {
            constrainWidth: false
        });

        //Stepforms Toggles Functions

        // Check if all fields are filled in "Fieldset-1"
        this.fieldset1_checker();

        // Check if all fields are filled in "Fieldset-3"
        this.fieldset3_checker();

        $('#signup-form').on('click', 'button.disabledBtn', function() {
            alert("Please fill out all inputs");
        });

        //Stepforms Toggles

        $('#fieldset-1').on('click', 'button.submit-btn.activatedBtn', function() {            
            $("#continue-btn-wrapper-1").slideUp();
            $("#fieldset-2").slideDown();
            $("li.step-2").addClass("active");
            $("ul.step-progress .progress .determinate").width("50%");
        });

        $('#fieldset-2').on('click', '#continue-btn', function() {            
            $("#continue-btn-wrapper-2").slideUp();
            $("#fieldset-3").slideDown();
            $("li.step-3").addClass("active");
            $("ul.step-progress .progress .determinate").width("98%");
        });
        
        // $("#continue-btn").click(function(){
        //     if($('#inp-field-wrapper > .input-field.active').is(":last-child")){
        //         $("#fieldset-2").slideUp();
        //         $("#fieldset-3").slideDown();
        //         $("li.step-3").addClass("active");
        //         $("ul.step-progress .progress .determinate").width("98%");
        //     } else {
        //         // Continue Button Function
        //         var inpField = $("#fieldset-2 .input-field.active");

        //         $('#fieldset-2 .input-field').removeClass('active');
        //         inpField.next().addClass('active');

        //         if($('#inp-field-wrapper > .input-field.active').is(":last-child")){
        //             $(this).text("Continue");
        //             this.fieldset3_checker();
        //         }
        //     }
        // });
        $("ul.step-progress").click(function(){
            $("#fieldset-3").slideUp();
            $("#fieldset-2").slideUp();
            $("#fieldset-1").slideDown();
            $("li.step-3, li.step-2").removeClass("active");
            $("ul.step-progress .progress .determinate").width("0%");
        });
        // end of Stepforms Toggles


        // PriceBox Function
        $('#inp-field-wrapper .input-field select').change(function(){ 
            var priceList = [0];

            var optionPrice1 = $('.input-field:nth-child(1)').find('option:selected').attr('price');
            var optionPrice2 = $('.input-field:nth-child(2)').find('option:selected').attr('price');

            priceList[0] =  parseInt(optionPrice1);
            priceList[1] =  parseInt(optionPrice2);
            console.log(priceList);

            var priceListSum = priceList.reduce((x, y) => x + y);
            console.log(priceListSum);

            $("#price-box-figure").text(priceListSum);
        });
        // end of PriceBox Function


        // Function that formats numbers
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
        // end of Function that formats numbers
    }
}
</script>

<style src="../assets/css/auth.css" scoped></style>
<style src="../assets/css/signup.css" scoped></style>

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
    position: fixed;
    width: 100%;
    border-radius: 16px;
    top: 10% !important;
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
.dropdown-content.select-dropdown li>a, .dropdown-content.select-dropdown li>span {
    color: var(--pry-color) !important;
}
form#signup-form .datepicker-controls {
    align-items: center;
}
@media(min-width: 601px) {
    form#signup-form .datepicker-modal {
        max-width: 390px !important;
    }
}
</style>
