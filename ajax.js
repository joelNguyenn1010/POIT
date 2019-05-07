//send data to nessacry php file and render any response with given document element id
const sendDataToPHP = (elementID, method, PHPFilePath, data) => {
    var ajax = new XMLHttpRequest();
    ajax.onload = function() {
        const onDocumentID = document.getElementById(elementID);
        onDocumentID.innerHTML = this.responseText
    }

    ajax.open(method, PHPFilePath)
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send(`${data}`)
    return ajax
}




function returnProductMatchID(xml, id) {
    var xmlDoc = xml.responseXML;
    var productList = xmlDoc.getElementsByTagName("product");
    for (i = 0; i < productList.length; i++) {

        var value = productList[i].getElementsByTagName("product_id")[0].childNodes[0].nodeValue
        if (parseInt(value) === id) {
            const product = productList[i]

            if (product) {
                const name = product.getElementsByTagName("product_name")[0].childNodes[0].nodeValue;
                const unit = product.getElementsByTagName("unit_price")[0].childNodes[0].nodeValue;
                const qty = product.getElementsByTagName("unit_quantity")[0].childNodes[0].nodeValue;
                const stock = product.getElementsByTagName("in_stock")[0].childNodes[0].nodeValue;
                const id = product.getElementsByTagName("product_id")[0].childNodes[0].nodeValue;
                const data = `id=${id}&name=${name}&unit=${unit}&qty=${qty}&stock=${stock}`
                return data;

            }
        }
    }
}


function returnQtyMatchID(xml, id) {
    var xmlDoc = xml.responseXML;
    var productList = xmlDoc.getElementsByTagName("product");
    for (i = 0; i < productList.length; i++) {

        var value = productList[i].getElementsByTagName("product_id")[0].childNodes[0].nodeValue
        if (parseInt(value) === id) {
            const product = productList[i]

            if (product) {
                // const name = product.getElementsByTagName("product_name")[0].childNodes[0].nodeValue;
                // const unit = product.getElementsByTagName("unit_price")[0].childNodes[0].nodeValue;
                // const qty = product.getElementsByTagName("unit_quantity")[0].childNodes[0].nodeValue;
                const stock = product.getElementsByTagName("in_stock")[0].childNodes[0].nodeValue;
                // const id = product.getElementsByTagName("product_id")[0].childNodes[0].nodeValue;
                // const data = `id=${id}&name=${name}&unit=${unit}&qty=${qty}&stock=${stock}`
                return parseFloat(stock);

            }
        }
    }
}


const findProductInXMLWithID = (id) => {
    return new Promise(function(resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const product = returnProductMatchID(this, id);
                if (product) {
                    resolve(product);

                }
            }
        };
        xhttp.open("GET", "./data.xml", true);
        xhttp.send();

    });
}


const findStockInXMLWithID = (id) => {
    return new Promise(function(resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const product = returnQtyMatchID(this, id);
                if (product) {
                    resolve(product);

                }
            }
        };
        xhttp.open("GET", "./data.xml", true);
        xhttp.send();

    });
}