function onCatagory(id) {
    console.log(id)
    const image = document.getElementById("catalogy")
    const mapElement = document.getElementById("theElementMap")
    if (id === 'frozenfood') {
        image.src = "./images/frozenfood.png"
        mapElement.innerHTML = mapFrozen

    } else if (id === 'freshfood') {
        image.src = "./images/freshfood.png"
        mapElement.innerHTML = mapFresh

    } else if (id === 'beverages') {
        image.src = "./images/beverages.png"
        mapElement.innerHTML = mapBer

    } else if (id === 'homehealth') {
        image.src = "./images/homehealth.png"
        mapElement.innerHTML = mapHome

    } else if (id === 'petfood') {
        image.src = "./images/petfood.png"
        mapElement.innerHTML = mapPet

    }
}





//When user click the on area map with product id, 
const onChose = async(id) => {
    //check if there is id and user have click on checkout button
    if (id && !onCheckout) {

        const limit = await findStockInXMLWithID(id)
        console.log(limit)
        document.getElementById("add-to-cart").innerHTML =

            // get the limit input, fetch the data quantity

            `
        <form onsubmit="addToSession(${id})">
        <input class="w-25" placeholder="quantity" required type="number" id="quantityCart" min="1" max="${limit}"/>
        <button class='btn btn-info'>Add</button>
        </form>
        `
        const data = await findProductInXMLWithID(id);
        console.log(data)
        await sendDataToPHP("showDetails", "POST", "details.php", data);
    }
}



// add all matched product with given id to cart session
// findProductInXMLWithID is function return promise with data that match with id
// after that, send that data to suitable PHP file to render
const addToSession = async(id) => {
    //any customer function to find product go here
    //get the quantity input from form
    const quantity = document.getElementById("quantityCart").value;

    //fetch all the nessessary info about product and attact it with the quanity form
    const data = await findProductInXMLWithID(id) + `&quantity=${quantity}`;

    // send all the data in form serializer format to cart.php
    await sendDataToPHP("show_carts", "POST", 'cart.php', data);
}

//will load all the data in session
const onLoadDataSession = async() => {
    await sendDataToPHP("show_carts", "POST", 'onload.php');
}


//when user hit the clear session button
//make ajax request to clear.php file to tell it to empty the cart session
function clearSession() {
    var ajax = new XMLHttpRequest(); // simplified for clarity
    ajax.onload = function() {
        //reload all components when finish clear session
        onLoadDataSession()
    }
    ajax.open("GET", 'clear.php')
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send();

}