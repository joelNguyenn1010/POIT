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

//send data to nessacry php file and render any response with given document element id
const sendDataToPHP = (elementID, method, PHPFilePath, data) => {
    var ajax = new XMLHttpRequest(); 
    ajax.onload = function () {
        const onDocumentID = document.getElementById(elementID);
        onDocumentID.innerHTML = this.responseText
    }

    ajax.open(method, PHPFilePath)
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send(`${data}`)
}




function returnProductMatchID(xml, id) {
    var xmlDoc = xml.responseXML;
    var productList = xmlDoc.getElementsByTagName("product");
    for (i = 0; i < productList.length; i++) {

        var value = productList[i].getElementsByTagName("product_id")[0].childNodes[0].nodeValue
        if (parseInt(value) === id) {
            return productList[i]
        }
    }
}



//When user click the on area map with product id, 
const onChose = async (id) => {
    const data = await findProductInXMLWithID(id);
    await sendDataToPHP("showDetails", "POST", "details.php", data);
    document.getElementById("add-to-cart").innerHTML = `<button class='btn btn-primary' onclick=addToSession(${id})>Add</button>`

}


const addToSession = async (id) => {
    const data = await findProductInXMLWithID(id);
    await sendDataToPHP("show_carts", "POST", 'cart.php', data);

}

const findProductInXMLWithID = (id) => {
    return new Promise(function (resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const product = returnProductMatchID(this, id);
                if (product) {
                    const name = product.getElementsByTagName("product_name")[0].childNodes[0].nodeValue;
                    const unit = product.getElementsByTagName("unit_price")[0].childNodes[0].nodeValue;
                    const qty = product.getElementsByTagName("unit_quantity")[0].childNodes[0].nodeValue;
                    const stock = product.getElementsByTagName("in_stock")[0].childNodes[0].nodeValue;
                    const id = product.getElementsByTagName("product_id")[0].childNodes[0].nodeValue;
                    const data = `id=${id}&name=${name}&unit=${unit}&qty=${qty}&stock=${stock}`

                    resolve(data);

                }
            }
        };
        xhttp.open("GET", "./data.xml", true);
        xhttp.send();

    });
}

//will load all the data in session
const onLoadDataSession = async () => {
    await sendDataToPHP("show_carts", "POST", 'onload.php');
}


function clearSession() {
    var ajax = new XMLHttpRequest(); // simplified for clarity
    ajax.onload = function () {
        const tbody_data = document.getElementById("show_carts");
        tbody_data.innerHTML = this.responseText
    }

    ajax.open("GET", 'clear.php')
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send();

}
