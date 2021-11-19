<?php
 header('Access-Control-Allow-Origin: *');
    $connect = mysqli_connect('mysql.ct8.pl', 'm20178_Pets', 'PetsTheBest12', 'm20178_Pets');

    $quest = "SELECT animals.Title, animals.Introduction, animals.Id, animals.GeneralText, animals.Image From animals Order By id DESC";


    $wynik = mysqli_query($connect, $quest);
    while ($row = mysqli_fetch_assoc($wynik)) {
        $json[] = $row;


    }
    echo json_encode($json);
    ?>