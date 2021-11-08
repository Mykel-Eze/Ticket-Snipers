<template>
    <div id="eligibility-calculator">
        <div class="row">
            <form action="/dismissal-success" class="col s12 m10 offset-m1 z-depth-5" id="eligibility-calc-form">
                <div class="progress-section">
                    <div class="progress">
                        <div class="determinate progress-bar" style="width: 70%"></div>
                    </div>
                    <div class="progress-numbers">
                        <span class="current-question">1</span> of 
                        <span class="total-question">3</span>
                    </div>
                </div>
                <h4 class="ec-form-title">Traffic Ticket Eligibility Calculator</h4>
                <div class="field-and-details-wrappers">
                    <div id="field-side-wrapper">
                        <div class="options-wrappper">
                            <div class="options-block col s12 m12 active" id="opt-block-1">
                                <div class="question-tab-block">
                                    <div class="q-block-rows">
                                        <div>In which county did you receive your traffic ticket?</div>
                                        <div>Select ticket type below</div>
                                    </div>
                                    <img src="../assets/images/q-block-icon.png" alt="q-img" class="q-block-icon">
                                </div>

                                <div class="option-details-wrapper">
                                    <div class="options-wrapper">
                                        <label class="option-block">
                                            <input type="radio" name="option" value="Speeding" checked="checked" required />
                                            <div></div>
                                            <span class="">Speeding</span>
                                        </label>
                                        <label class="option-block">
                                            <input type="radio" name="option" value="Red Light Camera" required />
                                            <div></div>
                                            <span class="">Red Light Camera</span>
                                        </label>
                                        <label class="option-block">
                                            <input type="radio" name="option" value="Red Light(Officer Isssued)" checked="checked" required />
                                            <div></div>
                                            <span class="">Red Light(Officer Isssued)</span>
                                        </label>
                                        <label class="option-block">
                                            <input type="radio" name="option" value="Carpool" required />
                                            <div></div>
                                            <span class="">Carpool</span>
                                        </label>
                                        <label class="option-block">
                                            <input type="radio" name="option" value="Cell Phone" checked="checked" required />
                                            <div></div>
                                            <span class="">Cell Phone</span>
                                        </label>
                                        <label class="option-block">
                                            <input type="radio" name="option" value="Sign Violation" required />
                                            <div></div>
                                            <span class="">Sign Violation</span>
                                        </label>
                                        <label class="option-block">
                                            <input type="radio" name="option" value="Any other CA Traffic Ticket" required />
                                            <div></div>
                                            <span class="">Any other CA Traffic Ticket</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="options-block col s12 m12" id="opt-block-2">
                                <div class="question-tab-block">
                                    <div class="q-block-rows">
                                        <div>In which county did you receive your traffic ticket?</div>
                                        <div class="search-wrapper">
                                            <img src="../assets/images/search.svg" alt="search" class="search-img">
                                            <input type="search" name="search" id="search-county" placeholder="Search for county" @keyup="searchFunction()">
                                        </div>
                                    </div>
                                    <img src="../assets/images/q-block-icon.png" alt="q-img" class="q-block-icon">
                                </div>

                                <div class="option-details-wrapper">
                                    <ul class="county-list">
                                        <li><span>Not Sure</span></li>
                                        <li><span>Alameda</span></li>
                                        <li><span>Alphine</span></li>
                                        <li><span>Amador</span></li>
                                        <li><span>Butte</span></li>
                                        <li><span>Calaveras</span></li>
                                        <li><span>Contra Costa</span></li>
                                        <li><span>Del Norte</span></li>
                                        <li><span>El Dorado</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="options-block col s12 m12" id="opt-block-3">
                                <div class="calculating-wrapper">
                                    <div class="calculating-inner">Calculating...</div>
                                </div>

                                <div class="option-details-wrapper">
                                    <h4 class="sec-color odw-title">Provide Details to Process</h4>
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
                                </div>
                            </div>
                        </div>

                        <div class="col s12">
                            <div class="flex-div* justify-content-btw form-links-cont">
                                <div style="margin: 30px 0">
                                    <button type="button" id="next-btn" class="submit-btn pry-btn btn">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="details-box-wrapper">
                        <div class="dbw">
                            <h5>
                                <span>Collecting facts for accuracy</span>
                                <hr class="dbw-hr" />
                            </h5>
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
        </div>
     </div>
</template>

<script>
import M from "materialize-css"
import $ from 'jquery'
export default {
    name: "EligibilityCalculator",
    mounted(){
        var elemsSelect = document.querySelectorAll("select");
        M.FormSelect.init(elemsSelect);

        $("#next-btn").click(function(){
            if($('#field-side-wrapper .options-block.active').is(":last-child")){
                $(this).attr('type', 'submit');
            } else {
                // Continue Button Function
                var inpField = $("#field-side-wrapper .options-block.active");

                $('#field-side-wrapper .options-block').removeClass('active');
                inpField.next().addClass('active');

                if($('#field-side-wrapper .options-block.active').is(":last-child")){
                    // $(this).text("Submit");
                    $("#next-btn").text("Submit");
                }
            }
        });
        $(".county-list li").click(function(){
            var selectedCounty = $(this).text()
            $("#search-county").val(selectedCounty);
        })
    },
    methods: {
        searchFunction() {
            // Declare variables
            let i, txtValue1;
            const input = document.querySelector('#search-county');
            const filter = input.value.toUpperCase();
            const li = document.querySelectorAll(".county-list li");

            // Loop through all list items, and hide those who don't match the search query
            for (i = 0; i < li.length; i++) {
                const ticketTypeName = li[i].querySelectorAll("span")[0];
                
                txtValue1 = ticketTypeName.textContent || ticketTypeName.innerText;
                
                if ((txtValue1.toUpperCase().indexOf(filter) > -1)) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }
    }
}
</script>

<style src="../assets/css/dismissal-calculator.css" scoped></style>
<style src="../assets/css/d-calculator.css" scoped></style>
<style src="../assets/css/auth.css" scoped></style>

<style>
    form#eligibility-calc-form .select-wrapper input.select-dropdown {
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

    form#eligibility-calc-form .dropdown-content li>span {
        color: rgba(2, 43, 105, 0.57);
        mix-blend-mode: normal;
        font-size: 14px;
    }
    form#eligibility-calc-form .select-wrapper .caret {
        display: none;
    }
    form#eligibility-calc-form img.input-icons {
        position: absolute;
        top: 18px;
        right: 20px;
        z-index: 1;
        /* width: 10px; */
    }
    .modal-overlay {
        background-color: rgba(2, 43, 105, 0.890379) !important;
        opacity: 0.9 !important;
    }
</style>