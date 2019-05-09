<?php

    // foreach($_POST as $post_value) {
    //     echo strtoupper($post_value) . "<br />";
    // }
    session_start();
    $data = $_SESSION["cart"];
    if(!isset($data) && empty($data)) {
        $data = array();
    }

    $id = $_POST["id"];
    $name = $_POST["name"];
    $unit = $_POST["unit"];
    $qty = $_POST["quantity"];
    $stock = $_POST["stock"];
    
    // print_r(in_array($id, $data));
    if($qty && is_numeric($qty) == 1) {
    $data[$id] = [id=>$id, name=>$name, unit=>$unit, qty=>$qty, stock=>$stock];
}
    
    $_SESSION["cart"] = $data;




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