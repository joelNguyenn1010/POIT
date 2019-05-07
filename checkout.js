var onCheckout = false;
const checkout = async () => {
    onCheckout = true;
    const element = 'showDetails'
    document.getElementById('title-right-frame').innerHTML = "Checkout"
    await sendDataToPHP(element, 'GET', 'checkout.php')
     document.getElementById("add-to-cart").innerHTML = 
     `
     <p class="text-primary">Checkout in process</p>
     <button onclick="cancelCheckout()" class="btn btn-info">Cancel Checkout</button>
     `
     document.getElementById("clear").disabled = true;
        document.getElementById("form-checkout").innerHTML = purchaseForm;

    }

const cancelCheckout = () => {
    onCheckout = false;
    document.getElementById("clear").disabled = false;
    document.getElementById("add-to-cart").innerHTML = '';
    document.getElementById("form-checkout").innerHTML = '';
    document.getElementById("showDetails").innerHTML = '';
    document.getElementById('title-right-frame').innerHTML = "Details"
    

}