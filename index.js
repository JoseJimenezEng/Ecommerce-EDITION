// const url = 'https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '5c84aed12amshce14695552c8849p15db50jsn5336d9a18268',
// 		'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
// 	}
// };

// (async () => {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
//  })()

// window.addEventListener('scroll', function() {
//        // Get the current page scroll position
//        scrollTop = window.scrollY || document.documentElement.scrollTop;
//        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
//         console.log(scrollTop)
//            // if any scroll is attempted, set this to the previous value
//            window.onscroll = function() {
//                window.scrollTo(scrollLeft, scrollTop);
//            };

//   });
// let contScroll = 0;
// window.onscroll = function () {
//     if(contScroll >= 10){contScroll = 0}else{contScroll++}
//     window.scrollTo(0, 0);
//     let bg = document.getElementById("main");
//     if(contScroll == 0){
//         contScroll++
//         bg.classList.toggle("bg");
//     }
    
    
// };
AOS.init()
let typed = new Typed('#typed', {
    strings: ["la nueva moda", "la nueva vida", "E D I T I O N ^10000"],
    backSpeed: 70, typeSpeed: 70
    , loop: true,
    loopCount: Infinity,
})

export {typed}