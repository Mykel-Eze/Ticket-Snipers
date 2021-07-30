<template>
    <div class="row">
        <div class="container">
            <div class="q-form-page-wrapper">
                <div class="main-cont-side">
                    <h4 class="ticket-status-title">
                        <span>Questionnaire • </span> <span class="pry-color">Speeding on Highway</span>
                    </h4>
                    <p class="page-title-description">
                        This initial section is to verify the information listed on your citation. 
                        Please refrence the top portion of your ticket for this section and note discrepancies.
                    </p>

                    <section class="dashbord-cont-wrapper">
                        <form action="#" id="questionnaires-form-wrapper">
                            <div class="questionnaire-form-field">
                                <span class="form-label">What is the driver’s first name and last name?</span>
                                <input name="driver_name" type="text" class="q-inp-field" placeholder="Enter your first name and last name">
                            </div>
                            <div class="questionnaire-form-field">
                                <span class="form-label">Did the officer write your name correctly on the citation?</span>
                                <label>
                                    <input class="with-gap" name="name_spell_check" type="radio" checked />
                                    <span>Yes</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="name_spell_check" type="radio"  />
                                    <span>No</span>
                                </label> <br />
                            </div>
                            <div class="questionnaire-form-field">
                                <span class="form-label">Please confirm your date of birth.</span>
                                <input name="dob" type="text" class="q-inp-field datepicker" placeholder="Enter your date of birth (dd/mm/yyyy)">
                            </div>
                            <div class="questionnaire-form-field">
                                <span class="form-label">Did the officer write your birthdate on the citation?</span>
                                <label>
                                    <input class="with-gap" name="dob_check" type="radio" />
                                    <span>Yes</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="dob_check" type="radio"  />
                                    <span>No</span>
                                </label> <br />
                            </div>
                            <div class="questionnaire-form-field">
                                <span class="form-label">Please confirm your dirver’s license number.</span>
                                <input name="driver_license_number" type="text" class="q-inp-field" placeholder="Enter your driver’s licnece number">
                            </div>
                            <div class="questionnaire-form-field">
                                <span class="form-label">Did the officer write the correct driver’s license number on the citation?</span>
                                <label>
                                    <input class="with-gap" name="license_number_check" type="radio" checked />
                                    <span>Yes</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="license_number_check" type="radio"  />
                                    <span>No</span>
                                </label> <br />
                            </div>
                            <div class="questionnaire-form-field">
                                <span class="form-label">What was the speed limit on the roadway?</span>
                                <label>
                                    <input class="with-gap" name="speed_limit" type="radio" checked />
                                    <span>15 miles per hour</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="speed_limit" type="radio"  />
                                    <span>20 miles per hour</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="speed_limit" type="radio"  />
                                    <span>25 miles per hour</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="speed_limit" type="radio"  />
                                    <span>30 miles per hour</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="speed_limit" type="radio"  />
                                    <span>35 miles per hour</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="speed_limit" type="radio"  />
                                    <span>40 miles per hour</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="speed_limit" type="radio" />
                                    <span>45 miles per hour</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="speed_limit" type="radio"  />
                                    <span>50 miles per hour</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="speed_limit" type="radio"  />
                                    <span>55 miles per hour</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="speed_limit" type="radio" />
                                    <span>60 miles per hour</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="speed_limit" type="radio"  />
                                    <span>65 miles per hour</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="speed_limit" type="radio"  />
                                    <span>70 miles per hour</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="speed_limit" type="radio"  />
                                    <span>I don’t know</span>
                                </label> <br />
                            </div>
                            <div class="questionnaire-form-field">
                                <span class="form-label">Did the speed limit seem appropriate for the roadway?</span>
                                <label>
                                    <input class="with-gap" name="speed_limit_appropraite" type="radio" checked />
                                    <span>Yes</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="speed_limit_appropraite" type="radio"  />
                                    <span>No</span>
                                </label> <br />
                            </div>
                            <div class="questionnaire-form-field">
                                <span class="form-label">Did you see any speed limit signs posted on the roadway?</span>
                                <label>
                                    <input class="with-gap" name="speed_limit_visibility" type="radio" checked />
                                    <span>Yes</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="speed_limit_visibility" type="radio"  />
                                    <span>No</span>
                                </label> <br />
                            </div>
                            <div class="questionnaire-form-field">
                                <span class="form-label">Do you think the officer was in a position to visually estimate your speed?</span>
                                <label>
                                    <input class="with-gap" name="officer_position" type="radio" checked />
                                    <span>Yes</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_position" type="radio"  />
                                    <span>No</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_position" type="radio"  />
                                    <span>I don't know</span>
                                </label> <br />
                            </div>
                            <div class="questionnaire-form-field">
                                <span class="form-label">How long did the officer follow your vechicle before the patrol light were engage or you were pulled over?</span>
                                <label>
                                    <input class="with-gap" name="officer_engagement_period" type="radio" checked />
                                    <span>1 minute or less</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_engagement_period" type="radio"  />
                                    <span>5 minutes</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_engagement_period" type="radio"  />
                                    <span>10 minutes</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_engagement_period" type="radio" />
                                    <span>15 minutes</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_engagement_period" type="radio"  />
                                    <span>20 minutes</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_engagement_period" type="radio"  />
                                    <span>25 minutes</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_engagement_period" type="radio" />
                                    <span>30 minutes</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_engagement_period" type="radio"  />
                                    <span>35 minutes</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_engagement_period" type="radio"  />
                                    <span>40 minutes</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_engagement_period" type="radio" />
                                    <span>45 minutes</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_engagement_period" type="radio"  />
                                    <span>50 minutes</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_engagement_period" type="radio"  />
                                    <span>55 minutes</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_engagement_period" type="radio"  />
                                    <span>60 minutes</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_engagement_period" type="radio"  />
                                    <span>65 minutes</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_engagement_period" type="radio"  />
                                    <span>I was pulled over</span>
                                </label> <br />
                            </div>
                            <div class="questionnaire-form-field">
                                <span class="form-label">Did any of the following prevent the officer from obtanning a direct view of your vehicle on the roadway?</span>
                                <label>
                                    <input class="with-gap" name="officer_view_check" type="radio" checked />
                                    <span>Other Vehicles</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_view_check" type="radio"  />
                                    <span>Foliage: Trees/Bushes</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_view_check" type="radio"  />
                                    <span>Fence</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_view_check" type="radio"  />
                                    <span>Wall</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_view_check" type="radio"  />
                                    <span>Pillar / Vetical support structer</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_view_check" type="radio"  />
                                    <span>No obstruction on the road</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_view_check" type="radio"  />
                                    <span>No obstruction on the road</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="officer_view_check" type="radio"  />
                                    <span>Others</span>
                                </label> <br />
                            </div>
                            <div class="questionnaire-form-field">
                                <span class="form-label">Did the officer show you that proper steps were taken to obtain an accurate speed reading from your vehilce?</span>
                                <label>
                                    <input class="with-gap" name="speed_reading_check" type="radio" checked />
                                    <span>Yes</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="speed_reading_check" type="radio"  />
                                    <span>No</span>
                                </label> <br />
                            </div>
                            <div class="questionnaire-form-field">
                                <span class="form-label">Did the alleged violation occur in or near any of the following zones?</span>
                                <label>
                                    <input class="with-gap" name="violation_zone" type="radio" checked />
                                    <span>Construction Zone</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="violation_zone" type="radio"  />
                                    <span>School Zone</span>
                                </label> <br />
                                <label>
                                    <input class="with-gap" name="violation_zone" type="radio"  />
                                    <span>No restricted Zone</span>
                                </label> <br />
                            </div>
                            <div class="questionnaire-form-field">
                                <span class="form-label">Tell us your story; what do you remember about the alleged speeding violation?</span>
                                <textarea class="materialize-textarea q-inp-field" placeholder="Please provide any additional details"></textarea>
                            </div>

                            <div class="submit-btn-section flex-div">
                                <div class="save-link-side">
                                    <a href="#" class="save-n-continue">Save and Continue Later</a>
                                </div>
                                <button type="submit" class="submit-btn btn pry-btn">Submit Questionnaire</button>
                            </div>
                        </form>
                    </section>
                </div>

                <div class="save-link-side hidden-sm-xs right-align">
                    <a href="#" class="save-n-continue">Save and Continue Later</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import M from "materialize-css";
// import $ from "jquery";

export default {
  name: "QuestionnaireForm",
  mounted() {
        this.pageTitle();

        var elemsDatepicker = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elemsDatepicker, {
            format: 'dd/mm/yyyyy'
        });
  },
  methods:{
    scrollToTop() {
        window.scrollTo(0, 0);
    },
    pageTitle() {
        this.$emit("changeTitle", "Citation Questionnaire"); //Function to change Page Title
    },
  }
};
</script>

<style scoped src="..\assets\css\dashboard.css"></style>

<style></style>