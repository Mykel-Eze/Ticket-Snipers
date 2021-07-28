<template>
    <div class="row">
        <div class="container">
            <div class="col s12">
                <h4 class="ticket-status-title">Your Tickets</h4>

                <section class="dashbord-cont-wrapper">
                    <div class="col s12 l8 flex-div" id="filter-row">
                        <div class="filter-block flex-div">
                            <b class="fg-1">From:</b>
                            <div class="rel rel-select-wrapper">
                                <select name="filter-date" id="from-month-date">
                                    <option value="Jan">Jan</option>
                                    <option value="Feb">Feb</option>
                                    <option value="Mar">Mar</option>
                                    <option value="Apr">Apr</option>
                                    <option value="May">May</option>
                                    <option value="Jun">Jun</option>
                                    <option value="Jul">Jul</option>
                                    <option value="Aug">Aug</option>
                                    <option value="Sep">Sep</option>
                                    <option value="Oct">Oct</option>
                                    <option value="Nov">Nov</option>
                                    <option value="Dec">Dec</option>
                                </select>
                                <img src="../assets/images/down-2.svg" alt="caret" class="custom-caret">
                            </div>
                            <div class="rel rel-select-wrapper">
                                <select name="filter-date" id="from-year-date" class="year-date">
                                </select>
                                <img src="../assets/images/down-2.svg" alt="caret" class="custom-caret">
                            </div>
                        </div>
                        <hr class="filter-block-divider" />
                        <div class="filter-block flex-div">
                            <b class="fg-1">To:</b>
                            <div class="rel rel-select-wrapper">
                                <select name="filter-date" id="to-month-date">
                                    <option value="Jan">Jan</option>
                                    <option value="Feb">Feb</option>
                                    <option value="Mar">Mar</option>
                                    <option value="Apr">Apr</option>
                                    <option value="May">May</option>
                                    <option value="Jun">Jun</option>
                                    <option value="Jul">Jul</option>
                                    <option value="Aug">Aug</option>
                                    <option value="Sep">Sep</option>
                                    <option value="Oct">Oct</option>
                                    <option value="Nov">Nov</option>
                                    <option value="Dec">Dec</option>
                                </select>
                                <img src="../assets/images/down-2.svg" alt="caret" class="custom-caret">
                            </div>
                            <div class="rel rel-select-wrapper">
                                <select name="filter-date" id="to-year-date" class="year-date">
                                </select>
                                <img src="../assets/images/down-2.svg" alt="caret" class="custom-caret">
                            </div>
                        </div>
                        <hr class="filter-block-divider" />
                        <div class="filter-block">
                            <div class="rel rel-sort-wrapper">
                                <select name="filter-date" id="to-month-date">
                                    <option value="" disabled selected hidden>Sort by</option>
                                    <option value="Paid">Paid</option>
                                    <option value="Status">Status</option>
                                </select>
                                <img src="../assets/images/down-2.svg" alt="caret" class="custom-caret">
                            </div>
                        </div>
                    </div>

                    <div class="col s12 m9 l12 pad0 ticket-table-wrappers">
                        <div class="ticket-table-block">
                            <div class="ticket-details-wrapper">
                                <table class="ticket-details-table responsive-table">
                                    <thead>
                                        <tr>
                                            <th>Ticket ID</th>
                                            <th>Ticket Image</th>
                                            <th>Ticket Type</th>
                                            <th>Due Date</th>
                                            <th>Extension</th>
                                            <th>Paid</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="pry-color">
                                            <td>15496</td>
                                            <td>
                                                <img src="../assets/images/ticket-img.svg" alt="ticket" class="ticket-img">
                                            </td>
                                            <td class="ticket-type-cell truncate">Speeding on Highway</td>
                                            <td>May 24, 2021</td>
                                            <td>Nil</td>
                                            <td class="pry-color"> <!-- Change class to "rec-text" for Unpaid status -->
                                                <i class="material-icons">check_circle</i> <!-- Change text to "cancel" for Unpaid status -->
                                            </td>
                                            <td>Defence uplaoded </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="table-block-btn-wrapper right-align">
                                <a href="#" class="btn table-block-btn">Download Defense</a>
                            </div>
                        </div>
                        
                        <div class="ticket-table-block">
                            <div class="ticket-details-wrapper">
                                <table class="ticket-details-table responsive-table">
                                    <thead>
                                        <tr>
                                            <th>Ticket ID</th>
                                            <th>Ticket Image</th>
                                            <th>Ticket Type</th>
                                            <th>Due Date</th>
                                            <th>Extension</th>
                                            <th>Paid</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="pry-color">
                                            <td>15514</td>
                                            <td>
                                                <img src="../assets/images/ticket-img.svg" alt="ticket" class="ticket-img">
                                            </td>
                                            <td class="ticket-type-cell truncate">Obiedience by driver offenders</td>
                                            <td>May 24, 2021</td>
                                            <td>Nil</td>
                                            <td class="pry-color"> <!-- Change class to "rec-text" for Unpaid status -->
                                                <i class="material-icons">check_circle</i> <!-- Change text to "cancel" for Unpaid status -->
                                            </td>
                                            <td>Processing </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="table-block-btn-wrapper inactive right-align">
                                <a href="#" class="btn table-block-btn">Download Defense</a>
                            </div>
                        </div>
                        
                        <div class="ticket-table-block">
                            <div class="ticket-details-wrapper">
                                <table class="ticket-details-table responsive-table">
                                    <thead>
                                        <tr>
                                            <th>Ticket ID</th>
                                            <th>Ticket Image</th>
                                            <th>Ticket Type</th>
                                            <th>Due Date</th>
                                            <th>Extension</th>
                                            <th>Paid</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="pry-color">
                                            <td>15513</td>
                                            <td>
                                                <img src="../assets/images/ticket-img.svg" alt="ticket" class="ticket-img">
                                            </td>
                                            <td class="ticket-type-cell truncate">Obiedience by driver offenders</td>
                                            <td>May 24, 2021</td>
                                            <td>Nil</td>
                                            <td class="red-text">
                                                <i class="material-icons">cancel</i>
                                            </td>
                                            <td>Processing </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="table-block-btn-wrapper inactive right-align">
                                <a href="#" class="btn table-block-btn">Download Defense</a>
                            </div>
                        </div>

                        <div class="ticket-table-block">
                            <div class="ticket-details-wrapper">
                                <table class="ticket-details-table responsive-table">
                                    <thead>
                                        <tr>
                                            <th>Ticket ID</th>
                                            <th>Ticket Image</th>
                                            <th>Ticket Type</th>
                                            <th>Due Date</th>
                                            <th>Extension</th>
                                            <th>Paid</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="pry-color">
                                            <td>15512</td>
                                            <td>
                                                <img src="../assets/images/ticket-img.svg" alt="ticket" class="ticket-img">
                                            </td>
                                            <td class="ticket-type-cell truncate">Red light violation (Camera)</td>
                                            <td>June 11, 2021</td>
                                            <td>Nil</td>
                                            <td class="pry-color"> <!-- Change class to "rec-text" for Unpaid status -->
                                                <i class="material-icons">check_circle</i> <!-- Change text to "cancel" for Unpaid status -->
                                            </td>
                                            <td>
                                                <router-link to="/dashboard" class="table-block-link">Fill out questionaire</router-link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="table-block-btn-wrapper inactive right-align">
                                <a href="#" class="btn table-block-btn">Download Defense</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import M from "materialize-css";
import $ from "jquery";

export default {
  name: "DashboardNav",
  mounted() {
        this.pageTitle();
        this.setYears(-5) // set the previous five years in dropdown

        const elemSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemSelect);

        const mediaScreen = window.matchMedia("(min-width: 993px)")

        if (mediaScreen.matches) { // If media query matches
            $(".ticket-details-table").addClass("centered")
        } else {
            $(".ticket-details-table").removeClass("centered")
        }
  },
  methods:{
    scrollToTop() {
        window.scrollTo(0, 0);
    },
    pageTitle() {
        this.$emit("changeTitle", "Traffic Tickets"); //Function to change Page Title
    },
    setYears(val) {
    const today = new Date();
    const year = today.getFullYear();
    for (let i = 0; i > val; i--) {
        $('.year-date')
            .append($("<option></option>")
            .attr("value", year + i)
            .text(year + i)); 
        }
    }
  }
};
</script>

<style scoped src="..\assets\css\dashboard.css"></style>

<style>
.filter-block .select-wrapper input.select-dropdown.dropdown-trigger {
    height: 20px;
    border: none;
    max-width: 100%;
    padding: 0;
    color: #767E94;
    font-family: var(--font2);
    margin: 0;
}
.filter-block .select-wrapper .caret {
    display: none;
}
.filter-block .dropdown-content li>a, .filter-block .dropdown-content li>span {
    color: var(--pry-color);
}
.filter-block .dropdown-content {
    min-width: auto;
}
.filter-block .dropdown-content::-webkit-scrollbar {
    width: 4px;
}
</style>