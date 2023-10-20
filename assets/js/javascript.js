// // //////load
let load = document.querySelector(".load");
window.onload = function () {
  load.style.display = "none";
  document.body.style.overflowY = "auto";
};


// start headr links
// vars
let par_links = document.querySelectorAll(".par-links");
let par_second_links = document.querySelectorAll(".par-second-links");
let par_third_links = document.querySelectorAll(".par-third-links");
let child_links = document.querySelectorAll(".child-first-links");
let child_second_links = document.querySelectorAll(".child-second-links");
let child_third_links = document.querySelectorAll(".child-third-links");
let links_icon = document.querySelectorAll(".page-links ul i");
// code links scroll
par_links.forEach((item, index) => {
  item.onclick = function () {
    
    //!!!!!first par
    links_icon.forEach((icon, inde) => {
      child_links.forEach((item2, index2) => {
        // start remove 3 col from first col
        child_second_links.forEach((item1, index1) => {
          if (item1.classList.contains("trans0")) {
            item1.classList.remove("trans0");
            item1.classList.add("trans100");
            item1.classList.add("hide");
            setTimeout(() => {
              item1.classList.remove("trans100");
              item1.classList.add("trans-100");
            }, 2000);
          }
        });
        // end remove 3 col from first col
        // start remove 4 col from first col
        child_third_links.forEach((item1, index1) => {
          if (item1.classList.contains("trans0")) {
            item1.classList.remove("trans0");
            item1.classList.add("trans100");
            item1.classList.add("hide");
            setTimeout(() => {
              item1.classList.remove("trans100");
              item1.classList.add("trans-100");
            }, 2000);
          }
        });
        // end remove 4 col from first col
        ///////////////////////////////////////////////////////////
        // start first links
        icon.style.transform = "rotate(0deg)";
        if (item2.classList.contains("trans0")) {
          item2.classList.remove("trans0");
          item2.classList.add("trans100");
          item2.classList.add("hide");
          setTimeout(() => {
            item2.classList.remove("trans100");
            item2.classList.add("trans-100");
          }, 2000);
        }
        // for show links 2
        if (index == index2) {
          setTimeout(() => {
            if (index == inde) {
              icon.style.transform = "rotate(180deg)";
            }
            item2.classList.add("trans0");
          }, 500);
        }

        // end first links
        // start second links
        par_second_links.forEach((item1, index1) => {
          item1.onclick = function () {
            // start remove another links
            child_third_links.forEach((item3, index3) => {
              if (item3.classList.contains("trans0")) {
                item3.classList.remove("trans0");
                item3.classList.add("trans100");
                item3.classList.add("hide");
                setTimeout(() => {
                  item3.classList.remove("trans100");
                  item3.classList.add("trans-100");
                }, 2000);
              }
            });
            // end remove another links
            child_second_links.forEach((item2, index2) => {
              if (item2.classList.contains("trans0")) {
                item2.classList.remove("trans0");
                item2.classList.add("trans100");
                item2.classList.add("hide");
                setTimeout(() => {
                  item2.classList.remove("trans100");
                  item2.classList.add("trans-100");
                }, 2000);
              }
              // for show links 3
              if (index1 == index2) {
                setTimeout(() => {
                  if (index1 == inde) {
                    icon.style.transform = "rotate(180deg)";
                  }
                  item2.classList.add("trans0");
                }, 500);
              }
            });
          };
        });
        // end second links
        // start third links
        par_third_links.forEach((item1, index1) => {
          item1.onclick = function () {
            child_third_links.forEach((item2, index2) => {
              if (item2.classList.contains("trans0")) {
                item2.classList.remove("trans0");
                item2.classList.add("trans100");
                item2.classList.add("hide");
                setTimeout(() => {
                  item2.classList.remove("trans100");
                  item2.classList.add("trans-100");
                }, 2000);
              }
              // for show links 4
              if (index1 == index2) {
                setTimeout(() => {
                  item2.classList.add("trans0");
                }, 500);
              }
            });
          };
        });
        // end third links
      });
    });
  };
});


let head = document.querySelector("header");
let bar = document.querySelector(".bar");
let search = document.querySelector(".search");
let bar_icon = document.querySelector(".bar i");
let page_fixed = document.querySelector(".page-links");
let page_search = document.querySelector(".page-search");
let fixed_links = document.querySelector(".fixed-links");
let page_phone =document.querySelector(".page-phone" )
let drop_button=document.querySelector(".dropdown a")
let drop_menu=document.querySelector(".dropdown-menu")
let link_head=document.querySelectorAll(".links-head li")
if(screen.width<=768){
  link_head.forEach(li=>{li.onclick=()=>{drop_menu.classList.remove("flex")}})
 drop_button.onclick=()=>{drop_menu.classList.toggle("flex")}
}


head.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
bar.onclick = function () {
  bar_icon.classList.toggle("fa-close");
  bar.classList.toggle("closes");
  search_icon.classList.remove("fa-magnifying-glass-minus");
  search_icon.classList.remove("closes-search");
  head.classList.remove("js-head");
  page_fixed.classList.toggle("top");
  if (page_search.classList.contains("top")) {
    page_search.classList.remove("top");
  }
  if (page_fixed.classList.contains("top")) {
    head.classList.add("js-head");
  }
  // remove links hide
  drop_menu.classList.remove("flex")
  child_links.forEach((item1, index1) => {
    item1.classList.remove("trans0");
    item1.classList.add("trans-100");
  });
  child_second_links.forEach((item1, index1) => {
    item1.classList.remove("trans0");
    item1.classList.add("trans-100");
  });
  child_third_links.forEach((item1, index1) => {
    item1.classList.remove("trans0");
    item1.classList.add("trans-100");
  });
  links_icon.forEach((icon, inde) => {
    icon.style.transform = "rotate(0deg)";
  });
  if(page_phone.classList.contains("block")){
    setTimeout(() => {
      page_phone.classList.remove("block")
    }, 2000);
  }
  else{
    page_phone.classList.add("block")
    }
  setTimeout(() => {
    fixed_links.classList.toggle("left-0");
  }, 500);
};
let search_icon = document.querySelector(".search i");
search.onclick = function () {
  head.classList.add("js-head");
  search_icon.classList.toggle("fa-magnifying-glass-minus");
  search_icon.classList.toggle("closes-search");

  if (page_search.classList.contains("top")) {
    head.classList.remove("js-head");
  }
  page_search.classList.toggle("top");
  if (page_fixed.classList.contains("top")) {
    page_fixed.classList.remove("top");
    bar_icon.classList.remove("fa-close");
    bar.classList.remove("closes");
  }

};

let pop=document.querySelector(".pop")
let pop_image=document.querySelector(".pop .pop-image")
let pop_text=document.querySelector(".pop .pop-text")
let news_pop_h6=document.querySelector(".pop .pop-text h6")
let news_pop_h5=document.querySelector(".pop .pop-text h5")

let news_pop=document.querySelectorAll(".news .for-pop ")
let news_pop_img=document.querySelectorAll(".news .for-pop img")
let news_pop_text=document.querySelectorAll(".news .for-pop .text-news")


news_pop.forEach((item_post,index_post)=>{
  // click post 
item_post.onclick=function(){
  
// image in pop 
// for copy img for pop 
news_pop_img.forEach((item_img,index_img)=>{
  
let item_img_copy=item_img.cloneNode(true);
// pop block in display 
if(index_img == index_post){
  // add in pop 
  pop_image.appendChild(item_img_copy)
  // remove  pop 

  // part text 
  news_pop_text.forEach((item_text,index_text)=>{
    let item_text_copy=item_text.cloneNode(true);
    if(index_text == index_post){
      // add in pop  
    pop_text.appendChild(item_text_copy)

      // remove in pop  
    pop.onclick=function(){
    pop_image.removeChild(item_img_copy);
      pop.classList.remove("flex")
      pop_text.removeChild(item_text_copy);
    }
    
    }
  })
}
// end part tet 
pop.classList.add("flex")

})
// end image in pop 
// part pop text 
}
// end part text
});


// start update taps 
// var update

let text_update = document.querySelectorAll(".text-update")
let image_update = document.querySelectorAll(".image-update")

// loop update 
text_update.forEach((item_text_update,index_text_update)=>{
  // click taps update 
  // console.log(item_text_update[1])
  item_text_update.onclick=function () {
    text_update.forEach(btn=>{ btn.classList.remove("text-active")})
    // loop image 
    image_update.forEach((item_image_update,index_image_update)=>{
      item_image_update.classList.remove("update-active")
      if(index_text_update == index_image_update){
  item_image_update.classList.add("update-active")
  item_text_update.classList.add("text-active")
}
})
// end loop image 
}
// end click 
})
// ////////////////////////////////
// start  special 
let btn_special=document.querySelector(".btn-special")
let btn_special_icon=document.querySelector(".btn-special i")
let special=document.querySelector(".who-us .left .special")
let link_special=document.querySelectorAll(".who-us .left .special div")


if (screen.width <= 768) {
btn_special.onclick=()=>{
  special.classList.toggle("h-80")
 
      btn_special_icon.classList.toggle("fa-angle-double-up")
      link_special.forEach(links=>{links.classList.toggle("block")})
      
    }
  }

  if (screen.width >= 768) {
    btn_special.onclick=()=>{
      special.classList.toggle("h-60")
     
          btn_special_icon.classList.toggle("fa-angle-double-up")
          link_special.forEach(links=>{links.classList.toggle("block")})
          
        }
      }


// start darkmode
let dark_mode= document.querySelector(".dark-mode");
let number=document.querySelectorAll(".numbers ")
let services=document.querySelectorAll(".services .service h5 ")
let se_title=document.querySelectorAll(".title-section h2 ")
dark_mode.onclick=(e)=>{
  dark_mode.classList.toggle('bg-light')
  dark_mode.classList.toggle('text-dark')
  document.body.classList.toggle('backgroun')
number.forEach(num=>{num.classList.toggle('black')})
services.forEach(ser=>{ser.classList.toggle('white')})
se_title.forEach(st=>{st.classList.toggle('third')})
}








// /////////////////////////////////////
// window.onscroll = function () {
//   if (scrollY >= 650) {
//     header.classList.add("header-fixed");
//   } else {

//     header.classList.remove("header-fixed");
//   }
// };
// // plugins
$(".fade1")
  .slick({
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    rtl: true,
  })
  .slickAnimation();
// start swip photo 

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  speed: 300,
  asNavFor: '.slider-nav',
  rtl: true,
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  autoplay: true,
  speed: 300,
  dots: true,
  centerMode: true,
  focusOnSelect: true,
    rtl: true,
});
  
// $(".autoplay")
//   .slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2300,
//     rtl:true
//   }).slickAnimation();
// ////autoplay 2
(function($){
    "use strict";

    if (screen.width <= 350) {
      $(".autoplay2").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
        rtl:true
      });
    }
     else if (screen.width <= 768) {
      $(".autoplay2").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
        rtl:true
      });
    }
    else if (screen.width <= 991) {
      $(".autoplay2").slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
        rtl:true
      });
    }
    else if (screen.width >= 991) {
      $(".autoplay2").slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
        rtl:true
      });
    }

})(jQuery);


// end slider
////////////////////////
// start animation scroll
AOS.init();

let soa =document.querySelectorAll(".aos-phone")
if(screen.width<= 768){
soa.forEach(aos=>{aos.dataset.aos="fade-up"})
}
else{

}
// end animation scroll
//////////////////////////////
// // start auto type
document.addEventListener("DOMContentLoaded", function() {
  const exampleText = ['عميد الكليه'];
  const exampleTyping = new AutoTyping('.auto', exampleText, {
      typeSpeed: 50,
      deleteSpeed: 50,
      waitBeforeDelete: 2000,
      waitBetweenWords: 500,
  });
  exampleTyping.start()
});
// ///////////////////////////////

// start counter 
     // count in who us slide 

// end count in who us slide 


// end counter 
