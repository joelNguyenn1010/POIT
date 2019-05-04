<?php

    // foreach($_POST as $post_value) {
    //     echo strtoupper($post_value) . "<br />";
    // }

   
    function countAndTotal() {


        session_start();
        $data = $_SESSION["cart"];
        echo "<div class='mt-5'><table class='table'><tbody><tr>";
    // print_r($_SESSION["cart"]);

        $temp = 0.0;
    foreach($data as $value) {
        $temp += floatval($value['unit']);
    }

    echo '<td>Total: ' . $temp . '</td>';


    echo "<td>Number of items ". count($data) . "</td>";


    echo "</tr></tbody></table></div>";

    }
    // echo $_POST['name'];
?>