<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>

    <script src="./home.js"></script>
    <script src="./type.js"></script>
    <script src="./mapFood.js"></script>
    <script src="./checkout.js"></script>
    <script src="./ajax.js"></script>

    <title>Grocery Store</title>
    <link rel="stylesheet" type="text/css" href="./style.css">

</head>

<body onload="onLoadDataSession()">
    <div class="container-fluid">
        <div class="row">
            <div class="col-8">
                <h1>Grocery Store</h1>
                <hr />
                <!-- Loop through all catagories -->
                <div class="d-flex flex-column">
                    <div id="root">
                        <img src="./images/root.jpg" usemap="#root-map" />
                        <map name="root-map" id="root-map">
                            <area onmouseover="onCatagory(FROZENFOOD)" coords="10,258,163,330" shape="rect">
                            <area onmouseover="onCatagory(FRESHFOOD)" coords="187,258,336,330" shape="rect">
                            <area onmouseover="onCatagory(BEVERAGES)" coords="362,258,512,331" shape="rect">
                            <area onmouseover="onCatagory(HOMEHEALTH)" coords="538,258,692,329" shape="rect">
                            <area onmouseover="onCatagory(PETFOOD)" coords="710,257,861,330" shape="rect">
                        </map>

                    </div>
                    <div id="theElement">
                        <img src="" id="catalogy" usemap="#Map" />
                        <map name="Map" id="theElementMap">

                        </map>
                    </div>

                </div>
            </div>
            <!-- second column -->
            <div class="col-4 justify-content-center">
                <!-- <div class="d-flex flex-column "> -->

                <!-- retrieves the appropriate product entry from the MySQL products table  -->
                <div class="p-2" id="product_details_topright">
                    <h1 id="title-right-frame">Details</h1>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">In_stock</th>
                            </tr>

                        </thead>

                        <tbody id="showDetails">
                      
                        </tbody>
                    </table>

                    <div class="mt-5 mb-5"id="form-checkout"></div>


                    <div id="add-to-cart">
                    </div>



                </div>

                <!-- showing the user how many products that are already chosen and the total value of their selections so far -->
                <div class="p-2">
                    <hr />

                    <h1>Virtual Shopping Cart</h1>
                    <!-- all the products been selected -->
                    <table class="table">
                        <thead>


                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">In_stock</th>
                            </tr>

                        </thead>

                        <tbody id="show_carts">

                         


                        </tbody>
                    </table>

                    <!-- empty the shopping cart -->
                    <button class="btn btn-info" onclick='clearSession()' id="clear">Clear</button>
                    <!-- complete their shopping session  -->
                </div>

                <!-- </div> -->
            </div>
        </div>
    </div>
    </div>


</body>

</html>