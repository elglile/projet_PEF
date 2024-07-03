// var b = function (a) {
//     if (a.type === "resize") {
//         document.body.classList.remove("navbar-dropdown-open");
//         var c = document.querySelector(".navbar-dropdown");
//         c.querySelector(".navbar-collapse").classList.remove("show");
//         c.classList.remove("opened");
//         Array.from(c.querySelectorAll('.navbar-toggler[aria-expanded="true"]')).forEach(function (a) {
//             var d = a.getAttribute("data-target");
//             var b = document.querySelector(d);
//             b && (b.classList.remove("in"), b.setAttribute("aria-expanded", "false"), a.setAttribute("aria-expanded", "false"));
//         });
//     }
//     var c = document.documentElement.scrollTop;
//     Array.from(document.querySelectorAll(".navbar-dropdown")).forEach(function (a) {
//         a.matches(".navbar-fixed-top") && (a.matches(".transparent") && !a.classList.contains("opened") && (c > 0 ? a.classList.remove("bg-color") : a.classList.add("bg-color")), c > 0 ? a.classList.add("navbar-short") : a.classList.remove("navbar-short"));
//     });
// };
// var c;
// ["scroll", "resize"].forEach(function (a) {
//     document.addEventListener(a, function (a) {
//         clearTimeout(c);
//         c = setTimeout(function () {
//             b(a);
//         }, 10);
//     });
// });
// ["show.bs.collapse", "hide.bs.collapse"].forEach(function (a) {
//     document.addEventListener(a, function (b) {
//         if ((b = b.target.closest(".navbar-dropdown"))) {
//             if (a === "show.bs.collapse") {
//                 document.body.classList.add("navbar-dropdown-open");
//                 b.classList.add("opened");
//             } else {
//                 document.body.classList.remove("navbar-dropdown-open");
//                 b.classList.remove("opened");
//                 var c = new Event("scroll.bs.navbar-dropdown.data-api");
//                 window.dispatchEvent(c);
//                 b.dispatchEvent(c);
//                 b.dispatchEvent(new Event("collapse.bs.navbar-dropdown"));
//             }
//         }
//     });
// });
// document.querySelector("html").classList.contains("is-builder") || document.addEventListener("click", function (a) {
//     a = a.target;
//     if (!a.classList.contains("nav-link") && !a.parentNode.classList.contains("nav-link")) {
//         var b = document.querySelector("#navbarSupportedContent"),
//             c = document.querySelector(".navbar-dropdown"),
//             d = b.classList.contains("show"),
//             e = a.closest(".nav-item a:not(.dropdown-toggle)");
//         if (c.classList.contains("collapsed")) {
//             if (d && !a.closest(".navbar-collapse")) {
//                 var f = new bootstrap.Collapse(b);
//             }
//         }
//     }
// });
// document.addEventListener("collapse.bs.nav-dropdown", function (a) {
//     (a = a.relatedTarget.closest(".navbar-dropdown")) && (a = a.querySelector('.navbar-toggler[aria-expanded="true"]')) && a.dispatchEvent(new Event("click"));
// });
// document.querySelectorAll(".nav-link.dropdown-toggle").forEach(function (a) {
//     a.addEventListener("click", function (a) {
//         a.preventDefault();
//         a.target.parentNode.classList.toggle("open");
//     });
// });