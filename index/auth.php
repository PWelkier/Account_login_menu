<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username == 'Patryk' && $password == 'Welkier') {
        echo "Zalogowano pomyślnie!";
    } else {
        echo "<p class='error-message'>Błędny login lub hasło!</p>";
    }
}
?>
