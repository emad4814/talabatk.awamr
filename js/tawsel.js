var SelectorInput = document.getElementById('Selector');
var pharmacyInput = document.getElementById('pharmacySelect');
var supermarketInput = document.getElementById('supermarketSelect');
var elseInput = document.getElementById('elseSelect');

var customerNameinput = document.getElementById('customerName');
var customeraddressinput = document.getElementById('customeraddress');
var customerNumberinput = document.getElementById('customerNumber');
var areaorderinput = document.getElementById('areaorder');
var customernotesinput = document.getElementById('customernotes');
var mandobinput = document.getElementById('mandob');

var ordersList = [];


function getPlaceOrder() {
    if (supermarketInput.value !== "") {
        return supermarketInput.value;
    }

    if (pharmacyInput.value !== "") {
        return pharmacyInput.value;
    }

    if (SelectorInput.value !== "") {
        return SelectorInput.value;
    }

    if (elseInput.value !== "") {
        return elseInput.value;
    }

    return "";
}



function Add() {
    var place = getPlaceOrder();

    if (place === "") {
        alert("من فضلك اختر مكان الطلب");
        return;
    }

    var customer = {
        placeorder: place,
        name: customerNameinput.value,
        address: customeraddressinput.value,
        number: customerNumberinput.value,
        order: areaorderinput.value,
        notes: customernotesinput.value,
        mandob: mandobinput.value
    };

    ordersList.push(customer);
    display();
    clear();
}


function display() {
    var customerorders = ""
    for (var i = 0; i < ordersList.length; i++) {
        customerorders += `<tr>
    <td>${ordersList[i].placeorder}</td>
    <td>${ordersList[i].name}</td>
    <td>${ordersList[i].number}</td>
    <td>${ordersList[i].address}</td>
    <td>${ordersList[i].order}</td>
    <td>${ordersList[i].mandob}</td>
    </tr>`
    }
    document.getElementById('tableBody').innerHTML = customerorders;
}

function clear() {
    SelectorInput.value = ""
    pharmacyInput.value = ""
    supermarketInput.value = ""
    elseInput.value = ""
    customerNameinput.value = ""
    customeraddressinput.value = ""
    customerNumberinput.value = ""
    areaorderinput.value = ""
    customernotesinput.value = ""
    mandobinput.value = ""
}