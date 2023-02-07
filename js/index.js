function myFunction() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.toggle("hide");
}

function myFunction1() {
    const noti_show = document.getElementsByTagName("body")[0];
    noti_show.classList.toggle("noti_show");
}
function myFunction2() {
    const hamburger_icon = document.getElementsByTagName("body")[0];
    hamburger_icon.classList.toggle("hamburger_icon_toggle");
}
function regPayment() {
    const reg_payment = document.getElementsByTagName("body")[0];
    reg_payment.classList.add("reg_payment");
}
function allPayment() {
    const allpayment = document.getElementsByTagName("body")[0];
    allpayment.classList.remove("reg_payment");

}
function searching() {
    const search = document.getElementsByTagName("body")[0];
    search.classList.toggle("search");
}
function dotSvg() {
    const svg = document.getElementsByTagName("body")[0];
    svg.classList.toggle("svg");
}


var xValues = [100, 200, 300, 400, 500, 100];

new Chart("myCharts", {
    type: "line",
    data: {
        labels: ["Apr 14", "Apr 15", "Apr 16", "Apr 17", "Apr 18", "Apr 19", "Apr 20", "Apr 21"],
   
        datasets: [{
            data: [0, 10, 5, 6, 3, 3, 1],
            borderColor: "#C8EE44",
            fill: false,
            label:false,
        },
        {
            label:"",
            data: [3, 6, 2, 5, 10, 6, 4],
            borderColor: "#29A073",
            fill: false
        }]
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false

                }

            }],
        },
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        }
    }
});

$(document).ready(function () {
    $(".fa-search").click(function () {
        $(".wrap, .input").toggleClass("active");
        $("input[type='text']").focus();
    });
});
jQuery(document).ready(function ($) {
    var alterClass = function () {
        var ww = document.body.clientWidth;
        if (ww < 1024) {
            $('.test').addClass('hamburger_icon_toggle');
        } else if (ww >= 1025) {
            $('.test').removeClass('hamburger_icon_toggle');
        };
    };
    $(window).resize(function () {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});
document.addEventListener('touchstart', onTouchStart, {passive: true});