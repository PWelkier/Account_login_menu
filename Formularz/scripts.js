function sprawdzImie() {    var imie = document.getElementById("imie").value;    var regex = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{0,99}$/;    var button = document.getElementById("button");    if (!regex.test(imie)) {        document.getElementById("imie").style.backgroundColor = "yellow";        document.getElementById("imie").style.color = "black";        document.getElementById("error1").textContent = "To nie jest prawdziwe imię";        button.disabled = true;    } else {        document.getElementById("imie").style.backgroundColor = "white";        document.getElementById("error1").textContent = "";        button.disabled = false;    }}function sprawdzNazwisko() {    var nazwiskoInput = document.getElementById("nazwisko");    var nazwisko = nazwiskoInput.value;    var regex = /^[A-Z][a-z]{0,149}([-]{1}[A-Z][a-z]{0,149})?$/;    var button = document.getElementById("button");    if (!regex.test(nazwisko)) {        document.getElementById("error2").textContent = "To nie może być prawdziwe nazwisko";        nazwiskoInput.style.backgroundColor = "yellow";        nazwiskoInput.style.color = "black";        button.disabled = true;    } else {        document.getElementById("error2").textContent = "";        nazwiskoInput.style.backgroundColor = "white";        nazwiskoInput.style.color = "black";        button.disabled = false;    }}function sprawdzMiejscowosc() {    var miejscowoscInput = document.getElementById("miejscowosc");    var miejscowosc = miejscowoscInput.value;    var regex = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{0,99}$/;    var button = document.getElementById("button");    if (!regex.test(miejscowosc)) {        document.getElementById("error3").textContent = "To nie może być prawdziwa miejscowość";        miejscowoscInput.style.backgroundColor = "yellow";        miejscowoscInput.style.color = "black";        button.disabled = true;    } else {        document.getElementById("error3").textContent = "";        miejscowoscInput.style.backgroundColor = "white";        miejscowoscInput.style.color = "black";        button.disabled = false;    }}function sprawdzNrTelefonu() {    var telefonInput = document.getElementById("telefon");    var telefon = telefonInput.value;    var regex = /^\d+$/;    var button = document.getElementById("button");    if (!regex.test(telefon)) {        document.getElementById("error4").textContent = "Nr telefonu składa się z samych cyfr";        telefonInput.style.backgroundColor = "yellow";        telefonInput.style.color = "black";        button.disabled = true;    } else {        document.getElementById("error4").textContent = "";        telefonInput.style.backgroundColor = "white";        telefonInput.style.color = "black";        button.disabled = false;    }}