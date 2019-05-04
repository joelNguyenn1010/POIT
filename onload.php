<?php

    // foreach($_POST as $post_value) {
    //     echo strtoupper($post_value) . "<br />";
    // }
    session_start();
    $data = $_SESSION["cart"];
    if(!isset($data) && empty($data)) {
        $data = array();
    }

    // $id = $_POST["id"];
    // $name = $_POST["name"];
    // $unit = $_POST["unit"];
    // $qty = $_POST["qty"];
    // $stock = $_POST["stock"];

    
    // array_push($data, [id=>$id, name=>$name, unit=>$unit, qty=>$qty, stock=>$stock]);
    // $_SESSION["cart"] = $data;
    // print_r($_SESSION["cart"]);
    

    // $_SESSION["cart"] = $data;

    // print_r($_SESSION["cart"]);
    foreach($data as $value) {
        // echo strtoupper($value) . "<br />";
        echo "<tr>";
        foreach($value as $v) {
            echo "<td>" . $v . "</td>";
        }
        echo "</tr>";
    }

    include 'countTotal.php';
    echo countAndTotal();


    // echo $_POST['name'];
?>