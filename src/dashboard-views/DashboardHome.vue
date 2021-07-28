<template>
    <div class="row">
        <div class="container">
            <div class="col s12 l8" id="chart-n-table-wrapper">
                <h4 class="ticket-status-title">Ticket Status</h4>
                <div class="chart-container">
                    <div id="piechart-container"></div>
                </div>

                <div class="tickets-summary-wrapper">
                    <div class="tickets-summary-block">
                        <span class="bold-txt-2 summary-number">5</span>
                        <div class="summary-block-title">Traffic Tickets</div>
                    </div>
                    <div class="tickets-summary-block">
                        <span class="bold-txt-2 summary-number">20%</span>
                        <div class="summary-block-title">Under Processing</div>
                    </div>
                    <div class="tickets-summary-block">
                        <span class="bold-txt-2 summary-number">2</span>
                        <div class="summary-block-title">Dismissed Ticket</div>
                    </div>

                    <hr class="summary-wrapper-divider" />

                    <div class="tickets-summary-block">
                        <span class="bold-txt-2 summary-number">2</span>
                        <div class="summary-block-title">Citation Questionnaire</div>
                    </div>
                    <div class="tickets-summary-block">
                        <span class="bold-txt-2 summary-number">1</span>
                        <div class="summary-block-title">Extented Tickets</div>
                    </div>
                    <div class="tickets-summary-block">
                        <router-link to="/dashboard" class="view-all-tickets">
                            <u>View all tickets</u>
                            <i class="material-icons">chevron_right</i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import M from "materialize-css";
// import $ from "jquery";

import * as echarts from 'echarts';
export default {
  name: "DashboardHome",
  mounted() {
      this.pageTitle();

      this.drawChart();
  },
  methods:{
    scrollToTop() {
        window.scrollTo(0, 0);
    },
    pageTitle() {
        this.$emit("changeTitle", "Account Overview"); //Function to change Page Title
    },


    // PieChart Function
    drawChart() {
        let myChart = echarts.init(document.getElementById("piechart-container"));
        let option, option_xs;

        option = {
            tooltip: {
                trigger: 'item',
                // show: false
            },
            legend: {
                show: true,
                orient: 'vertical',
                right: 0,
                top: 'center',
                itemGap: 30,
                textStyle: {
                    color: '#747C93'
                }
            },
            series: [
                {
                    name: 'Ticket Status',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    left: '-40%',
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 8,
                        borderColor: '#fff',
                        borderWidth: 6
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '20',
                            fontWeight: 'bold',
                            color: "inherit"
                        }
                    },
                    labelLine: {
                    show: false
                    },
                    data: [
                        { value: 1048, name: 'Dismissed Ticket' },
                        { value: 735, name: 'Citation Questionnaire' },
                        { value: 580, name: 'Extented Tickets' }
                    ]
                },
            ],
            color: [
                "#2D5AF6",
                "#77C6F6",
                "#C0C8D7"
            ]
        };

        option_xs = {
            tooltip: {
                trigger: 'item',
                // show: false
            },
            legend: {
                show: true,
                orient: 'horizontal',
                left: 0,
                bottom: 0,
                itemGap: 15,
                align: 'left',
                textStyle: {
                    color: '#747C93'
                }
            },
            series: [
                {
                    name: 'Ticket Status',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    top: '-10%',
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 8,
                        borderColor: '#fff',
                        borderWidth: 6
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '20',
                            fontWeight: 'bold',
                            color: "inherit"
                        }
                    },
                    labelLine: {
                    show: false
                    },
                    data: [
                        { value: 1048, name: 'Dismissed Tickets' },
                        { value: 735, name: 'Citation Questionnaire' },
                        { value: 580, name: 'Extented Tickets' }
                    ]
                },
            ],
            color: [
                "#2D5AF6",
                "#77C6F6",
                "#C0C8D7"
            ]
        };

        const mediaScreen = window.matchMedia("(min-width: 601px)")

        if (mediaScreen.matches) { // If media query matches
            if (option && typeof option === 'object') {
                myChart.setOption(option);
            }
        } else {
            if (option_xs && typeof option_xs === 'object') {
                myChart.setOption(option_xs);
            }
        }
    }
  }
};
</script>

<style scoped src="..\assets\css\dashboard.css"></style>

<style scoped>
h4.ticket-status-title {
    margin: 0;
}
</style>