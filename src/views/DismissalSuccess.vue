<template>
    <div id="eligibility-calculator">
        <div class="row">
            <form action="/auth-page" class="col s12 m10 offset-m1 z-depth-5" id="eligibility-success">
                <h4 class="ec-form-title">Traffic Ticket Eligibility Calculator</h4>
                <div class="field-and-details-wrappers">
                    <div id="field-side-wrapper">
                        <div class="options-wrappper">
                            <div class="options-block col s12 m12 active center" id="opt-block-1">
                                <div class="flex-div">
                                    <span>This citation can be successfully challenged</span>
                                    <img src="../assets/images/like.svg" alt="like" class="">
                                </div>
                                <p class="progress-p">
                                    <img src="../assets/images/progress.svg" alt="progress-bar">
                                </p>
                                <p>
                                    You have a beatable traffic ticket.
                                </p>
                                <p>
                                    Allow our experienced legal team to challenge your case below
                                </p>
                            </div>
                        </div>

                        <div class="col s12">
                            <div class="flex-div* justify-content-btw form-links-cont">
                                <div style="margin: 30px 0">
                                    <button type="button" id="next-btn" class="submit-btn pry-btn btn">Get Started</button>
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

<style scoped>
.options-block {
    font-size: 20px;
}
.options-block .flex-div {
    display: flex;
    align-items: center;
    justify-content: center;
}
.options-block .flex-div span {
    margin-right: 10px;
}
.options-block p {
    margin: 1.8em 0;
}
.options-block p.progress-p {
    max-width: 100%;
}
@media(max-width: 600px) {
    form#eligibility-success {
        transform: none;
    }
}
</style>

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