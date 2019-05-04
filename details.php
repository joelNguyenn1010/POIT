<?php
    foreach($_POST as $post_value) {
        echo "<td>" . strtoupper($post_value) . "</td>";
    }
    $id = json_decode($_POST["some"]);
?>