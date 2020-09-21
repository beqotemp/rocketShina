import Glide from "@glidejs/glide";

new Glide(".glide").mount();
// var sliders = document.querySelectorAll(".slider-track");

// for (var i = 0; i < sliders.length; i++) {
//   var glide = new Glide(sliders[i], {
//     type: "carousel",
//     startAt: 0,
//     perView: 1,
//     responsive: [
//       {
//         // screens greater than >= 775px
//         breakpoint: 775,
//         settings: {
//           // Set to `auto` and provide item width to adjust to viewport
//           slidesToShow: "auto",
//           slidesToScroll: "auto",
//           itemWidth: 150,
//           duration: 0.25,
//         },
//       },
//       {
//         // screens greater than >= 1024px
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           itemWidth: 150,
//           duration: 0.25,
//         },
//       },
//     ],
//   });

//   glide.mount();
// }
