<template>
  <div class="faq-page">
    <section id="home">
        <div class="row">
            <div class="container">
                <div class="col s12 l9" id="title-side">
                    <div class="col s12 pad0">
                        <h1 class="home-title center sec-color">
                            Welcome to Ticket Snipers <br /> Payment Accepted and Account Created
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="welcome-cont-section">
        <div class="row">
            <div class="container">
                <div class="col s12 welcome-text-desc">
                    <p>Thank you for choosing Ticket Snipers to fight your alleged traffic ticket.</p>
                    <p>
                        A client account has been set-up for you to track the progress of your alleged violation. 
                        Your recollection of the alleged violation is important, please follow the simple steps below 
                        to provide additional details for your case.
                    </p>
                    <ul>
                        <li>
                            Login to your Ticket Snipers account by clicking the login button below. Use the same email and password 
                            that were used for the account set-up. If you have forgotten your password it can be reset 
                            <router-link to="/reset-password" class="pry-color">here</router-link>.
                        </li>
                        <li>
                            Once you have logged into your <router-link to="/reset-password" class="pry-color">Ticket Snipers account</router-link> 
                            you will see your ticket has been uploaded (please upload your violation if not already submitted), click on “select” 
                            in the “Ticket Type” column and choose the exact type of traffic violation you received.
                        </li>
                        <li>
                            After you have selected the type of traffic ticket you received, your ticket status will change 
                            and your citation questionnaire will be uploaded. Complete your citation questionnaire and provide 
                            any additional information you would like for us to consider for your defense.
                        </li>
                        <li>
                            Finally, sit back and relax. We will send your defense documents to you via email immediately upon completion.
                        </li>
                    </ul>
                </div>
                <div class="col s12 center welcome-btn-wrapper">
                    <router-link to="/auth-form#login-form" class="pry-bg pry-btn">LOGIN AND TELL US YOUR STORY</router-link>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script>
// import M from 'materialize-css'
export default {
    name: "Welcome",
    components: {},
    mounted() {}
}
</script>

<style src="../assets/css/home-2.css" scoped></style>

<style scoped>
.welcome-text-desc {
    font-size: 20px;
    line-height: 30px;
    margin-top: 20px;
}
#home {
    background-color: #F2F6FB;
    background-image: url(../assets/images/breakdown-bg.png);
    height: 350px;
    min-height: 350px;
}
#home::before {
    display: none;
}
h1.home-title {
    font-size: 50px;
    transform: translateY(50%);
}
li a.pry-color {
    text-decoration: underline;
}
div#title-side {
    margin: auto;
    float: none;
}
#welcome-cont-section ul {
    padding-left: 20px;
}
#welcome-cont-section ul li {
    list-style-type: disc;
    padding: 10px 0;
}
a.pry-bg.pry-btn {
    padding: 18px 26px;
}
a.pry-bg.pry-btn:hover {
    background-color: var(--sec-color);
}
.welcome-btn-wrapper {
    margin: 50px 0;
}
@media(max-width: 992px) {
    #home {
        height: auto;
        min-height: auto;
        padding-bottom: 30px;
    }
    h1.home-title {
        transform: translateY(0);
    }
}
@media(max-width: 600px) {
    .welcome-text-desc {
        font-size: 18px;
    }
    h1.home-title {
        font-size: 30px;
    }
}
</style>