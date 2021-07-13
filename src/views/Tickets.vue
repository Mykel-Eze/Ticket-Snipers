<template>
  <div class="tickets-page">
    <section id="home">
        <div class="row full-height">
            <div class="container full-height">
                <div class="col s12 abt-home-cont">
                    <h3 class="col s12 l8 tickets-home-title bold-txt sec-color">
                        California Traffic Ticket Database 2020
                    </h3>
                    <div class="col s12 l10 pad0-xs">
                        <p class="abt-home-desc pry-color">
                            Ticket Snipers maintains a detailed list of all traffic tickets we service 
                            with specific information about each type of ticket. We do our best to keep 
                            this database updated and current for changes in fines, procedures, and 
                            Calfornia Traffic Laws.
                        </p>
                    </div>
                    <form action="#" class="col s12 m6 pad0-xs" id="search-form">
                        <div class="col s12 m10 pad0-xs input-field rel">
                            <input type="search" placeholder="Search CVC, Fine, Citations…" id="search" @keyup="searchFunction()" class="seacrh-field">
                            <button class="search-btn">
                                <img src="../assets/images/search-icon.svg" alt="search" class="search-icon">
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <section id="tickets-table-section">
        <div class="row">
            <div class="container">
                <div class="tickets-table-wrapper">
                    <div>
                        <table id="tickets-table">
                            <thead>
                                <tr>
                                    <th>Types of Tickets We Dismiss</th>
                                    <th>CVC</th>
                                    <th>Point</th>
                                    <th>Fine</th>
                                    <th>Our Fee</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="flex-div">
                                            <img src="../assets/images/ticket-types/ticket-1.png" alt="ticket-type-image" class="ticket-type-image">
                                            <div class="ticket-type-name">Regulation of Turns at Intersections </div>
                                        </div>
                                    </td>
                                    <td>22101</td>
                                    <td>
                                        <img src="../assets/images/check-1.svg" alt="check" class="ticket-point-icon">
                                    </td>
                                    <td> $237 and Up</td>
                                    <td>$179</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="flex-div">
                                            <img src="../assets/images/ticket-types/ticket-2.png" alt="ticket-type-image" class="ticket-type-image">
                                            <div class="ticket-type-name">Failure to Obey Posted Signs on Vehicle Crossings </div>
                                        </div>
                                    </td>
                                    <td>23336</td>
                                    <td>
                                        <img src="../assets/images/check-1.svg" alt="check" class="ticket-point-icon">
                                    </td>
                                    <td> $238 and Up</td>
                                    <td>$179</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="flex-div">
                                            <img src="../assets/images/ticket-types/ticket-3.png" alt="ticket-type-image" class="ticket-type-image">
                                            <div class="ticket-type-name">Obedience by Driver to Official Traffic Control Devices </div>
                                        </div>
                                    </td>
                                    <td>21461</td>
                                    <td>
                                        <img src="../assets/images/check-1.svg" alt="check" class="ticket-point-icon">
                                    </td>
                                    <td> $237 and Up</td>
                                    <td>$179</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="flex-div">
                                            <img src="../assets/images/ticket-types/ticket-4.png" alt="ticket-type-image" class="ticket-type-image">
                                            <div class="ticket-type-name">Cell Phone Violation	 </div>
                                        </div>
                                    </td>
                                    <td>23123</td>
                                    <td>
                                        <img src="../assets/images/cancel.svg" alt="cancel" class="ticket-point-icon">
                                    </td>
                                    <td> $162 and Up</td>
                                    <td>$99</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="flex-div">
                                            <img src="../assets/images/ticket-types/ticket-5.png" alt="ticket-type-image" class="ticket-type-image">
                                            <div class="ticket-type-name">Coasting in Neutral on Downgrade Prohibited  </div>
                                        </div>
                                    </td>
                                    <td>21710</td>
                                    <td>
                                        <img src="../assets/images/check-1.svg" alt="check" class="ticket-point-icon">
                                    </td>
                                    <td> $367 and Up</td>
                                    <td>$179</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="flex-div">
                                            <img src="../assets/images/ticket-types/ticket-6.png" alt="ticket-type-image" class="ticket-type-image">
                                            <div class="ticket-type-name">Failure to Yield For Passing Cars on Freeways and Roadways   </div>
                                        </div>
                                    </td>
                                    <td>21753</td>
                                    <td>
                                        <img src="../assets/images/check-1.svg" alt="check" class="ticket-point-icon">
                                    </td>
                                    <td> $238 and Up</td>
                                    <td>$179</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="flex-div">
                                            <img src="../assets/images/ticket-types/ticket-7.png" alt="ticket-type-image" class="ticket-type-image">
                                            <div class="ticket-type-name">Failure to Yield to Emergency Vehicle Violation </div>
                                        </div>
                                    </td>
                                    <td>21806</td>
                                    <td>
                                        <img src="../assets/images/check-1.svg" alt="check" class="ticket-point-icon">
                                    </td>
                                    <td> $490 and Up</td>
                                    <td>$179</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="flex-div">
                                            <img src="../assets/images/ticket-types/ticket-8.png" alt="ticket-type-image" class="ticket-type-image">
                                            <div class="ticket-type-name">Following Too Close Violation-Tailgating </div>
                                        </div>
                                    </td>
                                    <td>21703</td>
                                    <td>
                                        <img src="../assets/images/check-1.svg" alt="check" class="ticket-point-icon">
                                    </td>
                                    <td> $237 and Up</td>
                                    <td>$179</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="flex-div">
                                            <img src="../assets/images/ticket-types/ticket-9.png" alt="ticket-type-image" class="ticket-type-image">
                                            <div class="ticket-type-name">High Beam Headlight Violation </div>
                                        </div>
                                    </td>
                                    <td>24409</td>
                                    <td>
                                        <img src="../assets/images/check-1.svg" alt="check" class="ticket-point-icon">
                                    </td>
                                    <td> $238 and Up</td>
                                    <td>$179</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="flex-div">
                                            <img src="../assets/images/ticket-types/ticket-10.png" alt="ticket-type-image" class="ticket-type-image">
                                            <div class="ticket-type-name">HOV Lane Violation </div>
                                        </div>
                                    </td>
                                    <td>21655</td>
                                    <td>
                                        <img src="../assets/images/cancel.svg" alt="cancel" class="ticket-point-icon">
                                    </td>
                                    <td> $489 and Up</td>
                                    <td>$179</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="flex-div">
                                            <img src="../assets/images/ticket-types/ticket-11.png" alt="ticket-type-image" class="ticket-type-image">
                                            <div class="ticket-type-name">Lane Violation </div>
                                        </div>
                                    </td>
                                    <td>21658</td>
                                    <td>
                                        <img src="../assets/images/check-1.svg" alt="check" class="ticket-point-icon">
                                    </td>
                                    <td> $238 and Up</td>
                                    <td>$179</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="flex-div">
                                            <img src="../assets/images/ticket-types/ticket-12.png" alt="ticket-type-image" class="ticket-type-image">
                                            <div class="ticket-type-name">Pedestrian Crosswalk Violation </div>
                                        </div>
                                    </td>
                                    <td>21950</td>
                                    <td>
                                        <img src="../assets/images/check-1.svg" alt="check" class="ticket-point-icon">
                                    </td>
                                    <td> $238 and Up</td>
                                    <td>$179</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <ul class="pagination right-align">
                        <li class="disabled"><a href="#!"><span class="next-arr">&#10094;</span></a></li>
                        <li class="active"><a href="#!">1</a></li>
                        <li class=""><a href="#!">2</a></li>
                        <li class=""><a href="#!">3</a></li>
                        <li class=""><a href="#!">4</a></li>
                        <li class=""><a href="#!">5</a></li>
                        <li class=""><a href="#!"><span class="next-arr">&#10095;</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script>
export default {
    name: "Tickets",
    components: {},
    methods: {
        searchFunction() {
            // Declare variables
            let i, txtValue1, txtValue2, txtValue3;
            const input = document.querySelector('#search');
            const filter = input.value.toUpperCase();
            const tr = document.querySelectorAll("#tickets-table tbody tr");

            // Loop through all list items, and hide those who don't match the search query
            for (i = 0; i < tr.length; i++) {
                const ticketTypeName = tr[i].querySelectorAll("td")[0];
                const ticketCVC = tr[i].querySelectorAll("td")[1];
                const ticketFine = tr[i].querySelectorAll("td")[3];
                
                txtValue1 = ticketTypeName.textContent || ticketTypeName.innerText
                txtValue2 = ticketCVC.textContent || ticketCVC.innerText
                txtValue3 = ticketFine.textContent || ticketFine.innerText ;
                
                if ((txtValue1.toUpperCase().indexOf(filter) > -1) || (txtValue2.toUpperCase().indexOf(filter) > -1) || (txtValue3.toUpperCase().indexOf(filter) > -1)) {
                tr[i].style.display = "";
                } else {
                tr[i].style.display = "none";
                }
            }
        }
    }
}
</script>

<style src="../assets/css/home-2.css" scoped></style>

<style scoped>
#home {
    background-color: #F2F6FB;
    background-image: url(../assets/images/breakdown-bg.png);
}
#home::before {
    display: none;
}
.home-btn-wrapper {
    margin: 7% 0 4%;
}
@media(max-width: 992px) {
  #home {
    height: auto;
    min-height: auto;
    padding-bottom: 12px;
  }
}
</style>