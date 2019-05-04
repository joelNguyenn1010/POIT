
// function callPHP(params) {
//     var ajax = new XMLHttpRequest(); // simplified for clarity
//     ajax.onload = function () {
//         const product_details_topright = document.getElementById("showDetails");
//         product_details_topright.innerHTML = this.responseText
//     }

//     ajax.open("POST", 'details.php')
//     ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     ajax.send(`${params}`)
// }




// function callPHPCart(data) {
//     var ajax = new XMLHttpRequest(); // simplified for clarity
//     ajax.onload = function () {
//         const product_details_topright = document.getElementById("show_carts");
//         product_details_topright.innerHTML = this.responseText
//     }

//     ajax.open("POST", 'cart.php')
//     ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     ajax.send(`${data}`)
// }