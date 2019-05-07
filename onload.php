<?php

    // foreach($_POST as $post_value) {
    //     echo strtoupper($post_value) . "<br />";
    // }
    session_start();
    $data = $_SESSION["cart"];
    if(!isset($data) && empty($data)) {
        $data = array();
    }

    foreach($data as $value) {
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