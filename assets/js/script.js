// Navbar

function openNav() {
  document.getElementById("mySidenav").style.width = "calc(100% - 5px)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Cart   ===========================================================================================


// $(document).ready(function () {
  

// })
function closeSidebar() {
  document.getElementById("sidebar").style.width = "0"
}
function coupan() {
  var x = document.getElementById("coupon-tog");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

//  ==============================================================================================


$(document).ready(function () {
  $('#hover_btn').click(function () {
    $("#sidebar").css("width", "365px")
    document.getElementById("wrapper").style.visibility = "visible"
  });
    // setTimeout(() => {
    //   $("#download-popup").modal('show');
    // }, 
    // 1000);

    //   Main Banner
    $('.slider-fade').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        dots: true
      });
    //   Category
      $(".slick-icon").slick({
        infinite: true,
        slidesToScroll: 1,
        arrows: true,
        slidesToShow: 5,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 3,
            }
          }
        ],
        prevArrow: '<i class="fa-solid fa-chevron-left fs-4 slide-arrow prev-arrow">',
        nextArrow: '<i class="fa-solid fa-chevron-right fs-4 slide-arrow next-arrow">',
      });

      // Product Card 
      $(".slick-slider-kids").slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        arrows: true,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2,
            }
          }
        ],
        prevArrow: '<i class="fa-solid fa-chevron-left fs-4 slide-arrow prev-arrow">',
        nextArrow: '<i class="fa-solid fa-chevron-right fs-4 slide-arrow next-arrow">',
      });
      // Author
      $(".slick-icon-author").slick({
        infinite: true,
        slidesToScroll: 1,
        arrows: true,
        slidesToShow: 5,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2,
            }
          }
        ],
        prevArrow: '<i class="fa-solid fa-chevron-left fs-4 slide-arrow prev-arrow">',
        nextArrow: '<i class="fa-solid fa-chevron-right fs-4 slide-arrow next-arrow">',
      });
      //  Smal
      $(".slick-slider-new_release").slick({
        infinite: true,
        slidesToScroll: 1,
        arrows: true,
        slidesToShow: 3,
        centerPadding: 0,
        centerMode: true,
        prevArrow: $(".prev3"),
        nextArrow: $(".next3"),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          },
        ],
      });
    
})  



// Search


let searchvw = document.getElementById("searchip");
searchvw.addEventListener("click",function()
{
  document.getElementById("tool").style.display = "block";
});

window.addEventListener('mouseup', function(event){
var tool = document.getElementById('tool');
if (event.target != tool  && event.target.parentNode != tool ){
tool.style.display = 'none';
}
});

function searchFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchip");
    filter = input.value.toUpperCase();
    ul = document.getElementById("tool");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}