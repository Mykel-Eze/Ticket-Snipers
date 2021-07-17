<template>
  <div class="media-page">
    <section id="home">
        <div class="row">
            <div class="container">
                <div class="col s12 l8 offset-l2" id="title-side">
                    <h1 class="home-title center">
                        <div class="sec-color">The Latest Media as it Relates to Traffic Tickets</div>
                    </h1>
                </div>
                <form action="#" class="col s12 m6 offset-m3 pad0-xs" id="search-form">
                    <div class="col s12 m10 offset-m1 pad0-xs input-field rel">
                        <input type="search" placeholder="Type the keyword(s) here" id="search" @keyup="searchFunction()" class="seacrh-field">
                        <button class="search-btn">
                            <img src="../assets/images/search-icon.svg" alt="search" class="search-icon">
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <section id="media-grid-section">
        <div class="row">
            <div class="container">
                <div class="col s12 filter-div">
                    <ul class="filter-links-wrapper">
                        <li class="active">
                            <span class="filter-link">All</span>
                        </li>
                        <li>
                            <span class="filter-link">Cell Phone</span>
                        </li>
                        <li>
                            <span class="filter-link">Driving Record</span>
                        </li>
                        <li>
                            <span class="filter-link">Traffic School</span>
                        </li>
                        <li>
                            <span class="filter-link">Commercial Driver</span>
                        </li>
                        <li>
                            <span class="filter-link">California</span>
                        </li>
                        <li>
                            <span class="filter-link">Distracted Driving</span>
                        </li>
                        <li>
                            <span class="filter-link">Stop Sign</span>
                        </li>
                        <li>
                            <span class="filter-link">Speeding</span>
                        </li>
                        <li>
                            <span class="filter-link">Red Light Camera Ticket</span>
                        </li>
                        <li>
                            <span class="filter-link">California Traffic</span>
                        </li>
                    </ul>
                </div>

                <div class="media-grid-wrapper">
                    <div class="col s12 media-grid">
                        <router-link to="/auth-page" custom v-slot="{ navigate }">
                            <div class="media-block" @click="navigate" @keypress.enter="navigate" role="link">
                                <div class="media-thumbnnail">
                                    <img src="../assets/images/blog-images/blog-1.png" alt="blog-thumbnail" class="media-img">
                                </div>
                                <div class="media-tag-div">
                                    <span class="media-tag">Driving Record</span>
                                    <span class="media-tag">Traffic School</span>
                                </div>
                                <div class="media-title bold-txt">
                                    How to Check My Driving Record in California
                                </div>
                                <div class="author-date-div">
                                    <span class="media-author">
                                        By <span class="pry-color">Ticket Snipers</span> • 
                                    </span>
                                    <span class="media-upload-date">Feburary 16, 2021</span>
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/auth-page" custom v-slot="{ navigate }">
                            <div class="media-block" @click="navigate" @keypress.enter="navigate" role="link">
                                <div class="media-thumbnnail">
                                    <img src="../assets/images/blog-images/blog-2.png" alt="blog-thumbnail" class="media-img">
                                </div>
                                <div class="media-tag-div">
                                    <span class="media-tag">Distracted Driving</span>
                                </div>
                                <div class="media-title bold-txt">
                                    What Counts as Reckless Driving in California?
                                </div>
                                <div class="author-date-div">
                                    <span class="media-author">
                                        By <span class="pry-color">Ticket Snipers</span> • 
                                    </span>
                                    <span class="media-upload-date">Feburary 11, 2021</span>
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/auth-page" custom v-slot="{ navigate }">
                            <div class="media-block" @click="navigate" @keypress.enter="navigate" role="link">
                                <div class="media-thumbnnail">
                                    <img src="../assets/images/blog-images/blog-3.png" alt="blog-thumbnail" class="media-img">
                                </div>
                                <div class="media-tag-div">
                                    <span class="media-tag">Red Light Camera Ticket</span>
                                </div>
                                <div class="media-title bold-txt">
                                    How can I Know if a Red Light Camera Caught Me
                                </div>
                                <div class="author-date-div">
                                    <span class="media-author">
                                        By <span class="pry-color">Ticket Snipers</span> • 
                                    </span>
                                    <span class="media-upload-date">Feburary 04, 2021</span>
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/auth-page" custom v-slot="{ navigate }">
                            <div class="media-block" @click="navigate" @keypress.enter="navigate" role="link">
                                <div class="media-thumbnnail">
                                    <img src="../assets/images/blog-images/blog-4.png" alt="blog-thumbnail" class="media-img">
                                </div>
                                <div class="media-tag-div">
                                    <span class="media-tag">California</span>
                                </div>
                                <div class="media-title bold-txt">
                                    New California Driving Laws 2021
                                </div>
                                <div class="author-date-div">
                                    <span class="media-author">
                                        By <span class="pry-color">Ticket Snipers</span> • 
                                    </span>
                                    <span class="media-upload-date">Feburary 28, 2021</span>
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/auth-page" custom v-slot="{ navigate }">
                            <div class="media-block" @click="navigate" @keypress.enter="navigate" role="link">
                                <div class="media-thumbnnail">
                                    <img src="../assets/images/blog-images/blog-5.png" alt="blog-thumbnail" class="media-img">
                                </div>
                                <div class="media-tag-div">
                                    <span class="media-tag">Stop Sign</span>
                                    <span class="media-tag">California</span>
                                </div>
                                <div class="media-title bold-txt">
                                    What Is A “California Stop”
                                </div>
                                <div class="author-date-div">
                                    <span class="media-author">
                                        By <span class="pry-color">Ticket Snipers</span> • 
                                    </span>
                                    <span class="media-upload-date">November 07, 2020</span>
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/auth-page" custom v-slot="{ navigate }">
                            <div class="media-block" @click="navigate" @keypress.enter="navigate" role="link">
                                <div class="media-thumbnnail">
                                    <img src="../assets/images/blog-images/blog-6.png" alt="blog-thumbnail" class="media-img">
                                </div>
                                <div class="media-tag-div">
                                    <span class="media-tag">California Traffic Ticket</span>
                                    <span class="media-tag">Lane Splitting</span>
                                </div>
                                <div class="media-title bold-txt">
                                    What is Lane Splitting in California?
                                </div>
                                <div class="author-date-div">
                                    <span class="media-author">
                                        By <span class="pry-color">Ticket Snipers</span> • 
                                    </span>
                                    <span class="media-upload-date">October 20, 2020</span>
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/auth-page" custom v-slot="{ navigate }">
                            <div class="media-block" @click="navigate" @keypress.enter="navigate" role="link">
                                <div class="media-thumbnnail">
                                    <img src="../assets/images/blog-images/blog-7.png" alt="blog-thumbnail" class="media-img">
                                </div>
                                <div class="media-tag-div">
                                    <span class="media-tag">Commercial Driver</span>
                                </div>
                                <div class="media-title bold-txt">
                                    What to do if You Receive a CDL Traffic Ticket in California – Consequences…
                                </div>
                                <div class="author-date-div">
                                    <span class="media-author">
                                        By <span class="pry-color">Ticket Snipers</span> • 
                                    </span>
                                    <span class="media-upload-date">October 06, 2020</span>
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/auth-page" custom v-slot="{ navigate }">
                            <div class="media-block" @click="navigate" @keypress.enter="navigate" role="link">
                                <div class="media-thumbnnail">
                                    <img src="../assets/images/blog-images/blog-8.png" alt="blog-thumbnail" class="media-img">
                                </div>
                                <div class="media-tag-div">
                                    <span class="media-tag">Speeding</span>
                                </div>
                                <div class="media-title bold-txt">
                                    I Got a Speeding Ticket in California Now What
                                </div>
                                <div class="author-date-div">
                                    <span class="media-author">
                                        By <span class="pry-color">Ticket Snipers</span> • 
                                    </span>
                                    <span class="media-upload-date">September 25, 2020</span>
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/auth-page" custom v-slot="{ navigate }">
                            <div class="media-block" @click="navigate" @keypress.enter="navigate" role="link">
                                <div class="media-thumbnnail">
                                    <img src="../assets/images/blog-images/blog-9.png" alt="blog-thumbnail" class="media-img">
                                </div>
                                <div class="media-tag-div">
                                    <span class="media-tag">California Traffic Ticket</span>
                                </div>
                                <div class="media-title bold-txt">
                                    Traffic Sting Planned for Saturday
                                </div>
                                <div class="author-date-div">
                                    <span class="media-author">
                                        By <span class="pry-color">Ticket Snipers</span> • 
                                    </span>
                                    <span class="media-upload-date">September 07, 2020</span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col s12 pagination-wrapper">
                        <ul class="pagination center">
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
        </div>
    </section>

  </div>
</template>

<script>
export default {
    name: "MediaBlog",
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
                
                txtValue1 = ticketTypeName.textContent || ticketTypeName.innerText;
                txtValue2 = ticketCVC.textContent || ticketCVC.innerText;
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
    max-height: 500px;
}
#home::before {
    display: none;
}
button.search-btn {
    right: 6px;
}
#home input#search {
    padding: 0 60px;
    padding-left: 15px;
}
@media(max-width: 992px) {
    #home {
        min-height: auto;
        padding-bottom: 20px;
    }
}
@media(max-width: 600px) {
    button.search-btn {
        right: -5px;
    }
}
</style>
