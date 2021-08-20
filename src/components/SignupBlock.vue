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
        <form action="/dashboard" class="col s12 m10 offset-m1 l6 offset-l3" id="signup-form">
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
                        <!-- <router-link to="#" class="calculate-savings-link pry-color">Calculate your savings?</router-link> -->
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
                <div id="inp-field-wrapper">
                    <div class="input-field active col s12 m12">
                        <select class="short-inp" id="ticket-type-received" name="ticket-type-received">
                            <option value="" price="0" selected disabled>Type of Ticket(s) Received</option>
                            <option value="Cell Phone" price="200">Cell Phone</option>
                            <option value="Seat Belt" price="150">Seat Belt</option>
                            <option value="Red Light (Officer Issued)" price="100">Red Light (Officer Issued)</option>
                            <option value="Red Light (Camera)" price="210">Red Light (Camera)</option>
                            <option value="Speeding" price="200">Speeding</option>
                            <option value="Stop Sign Violation" price="220">Stop Sign Violation</option>
                            <option value="Lane Violation" price="150">Lane Violation</option>
                            <option value="Carpool Violation" price="100">Carpool Violation</option>
                            <option value="Other CA Traffic Ticket" price="120">Other CA Traffic Ticket</option>
                        </select> 
                        <img src="../assets/images/ticket-id.svg" alt="icon" class="input-icons">
                    </div>
                    <div class="input-field col s12 m12">
                        <select class="short-inp" id="delivery-days" name="delivery-days">
                            <option value="" price="0" selected disabled>Expected Delievery Days</option>
                            <option value="Same Day" price="30">Same Day Delivery Extra $30</option>
                            <option value="Next Day" price="20">Next Day Delivery Extra $20</option>
                            <option value="5 Days" price="10">Five Day Delivery Extra $10</option>
                            <option value="10 Days" price="0">No Rush (10 Day Delivery)</option>
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
                            <!-- <div class="calculate-savings-div">
                                <router-link to="#" class="calculate-savings-link pry-color">Calculate your savings?</router-link>
                            </div> -->
                        </div>
                    </div>
                </div>

                <div class="col s12">
                    <div class="flex-div justify-content-btw form-links-cont">
                        <div class="get-started-home">
                            <div>
                                <button type="button" id="continue-btn" class="submit-btn pry-btn btn">Next</button>
                            </div>
                            <div>
                                Got an account?
                                <a href="#" class="pry-color" @click="selectTab('login-block')"><span>Log in</span></a>
                            </div>
                        </div>
                        <div>
                            <div class="price-box">
                                $<span id="price-box-figure">0</span>
                            </div>
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
            $("#fieldset-1").slideUp();
            $("#fieldset-2").slideDown();
            $("li.step-2").addClass("active");
            $("ul.step-progress .progress .determinate").width("50%");
        });
        
        $("#continue-btn").click(function(){
            if($('#inp-field-wrapper > .input-field.active').is(":last-child")){
                $("#fieldset-2").slideUp();
                $("#fieldset-3").slideDown();
                $("li.step-3").addClass("active");
                $("ul.step-progress .progress .determinate").width("98%");
                $(this).text("Continue");
            } else {
                // Continue Button Function
                var inpField = $("#fieldset-2 .input-field.active");

                $('#fieldset-2 .input-field').removeClass('active');
                inpField.next().addClass('active');

                if($('#inp-field-wrapper > .input-field.active').is(":last-child")){
                    $(this).text("Continue");
                    this.fieldset3_checker();
                }
            }
        });
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
