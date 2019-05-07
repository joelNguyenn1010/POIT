<?php


   
    function countAndTotal() {


        session_start();
        $data = $_SESSION["cart"];
        echo "<div class='mt-5'><table class='table'><tbody><tr>";
    // print_r($_SESSION["cart"]);
    
    $temp = 0.0;
    foreach($data as $value) {
        $temp += floatval($value['unit']) * floatval($value['qty']);
    }

    echo '<td>Total: ' . $temp . '</td>';


    echo "<td>Number of items ". count($data) . "</td>";


    echo "</tr></tbody></table></div>";

    if(count($data) == 0) {
        echo "<h3 class='text-warning'>Cart is empty</h3>";
    } else {
        echo "<a href='#' class='btn btn-info' id='checkout' onclick='checkout()'>Checkout</a>";

    }

    }
    // echo $_POST['name'];
?>