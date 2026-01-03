var searchInput = document.getElementById('search');
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

    if (customerNameinput.value === "") {
        alert("سجل اسمك علشان نتعرف عليك");
        return;
    }

    if (customeraddressinput.value === "") {
        alert("عنوانك مطلوب علشان نوصلك");
        return;
    }

    if (customerNumberinput.value === "") {
        alert("رقم الموبايل مطلوب");
        return;
    }

    if (areaorderinput.value === "") {
        alert("سجل الطلب");
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

    // إضافة أو تعديل (مرة واحدة فقط)
    if (currentorder === null) {
        ordersList.push(customer);
        showSuccess("✅ تم إضافة الطلب بنجاح");
    } else {
        ordersList[currentorder] = customer;
        currentorder = null;
        showSuccess("✏️ تم تعديل الطلب بنجاح");
    }

    display();
    clear();
}

function showSuccess(message) {
    var msg = document.getElementById("successMsg");
    msg.innerText = message;
    msg.classList.remove("d-none");

    setTimeout(function () {
        msg.classList.add("d-none");
    }, 5000);
}



function display() {
    var customerorders = ""
    for (var i = 0; i < ordersList.length; i++) {
        customerorders += `<tr>
        <td>${i + 1}</td>
    <td>${ordersList[i].placeorder}</td>
    <td>${ordersList[i].name}</td>
    <td>${ordersList[i].number}</td>
    <td>${ordersList[i].address}</td>
    <td>${ordersList[i].order}</td>
    <td>${ordersList[i].mandob}</td>
    <td>
    <button onclick="updateOrder(${i})" class="btn btn-warning btn-sm">Update</button>
    <button onclick="deletorders(${i})" class="btn btn-danger btn-sm">Delete</button>
    </td>
    </tr>`
    }
    document.getElementById('tableBody').innerHTML = customerorders;
}



function deletorders(order) {
    var confirmDelete = confirm("متأكد إنك عايز تحذف الطلب؟");
    if (confirmDelete) {
        ordersList.splice(order, 1)
        console.log(ordersList)
        display();
        clear();
    }
}


function search() {
    var term = searchInput.value.toLowerCase();
    var customerorders = "";

    for (var i = 0; i < ordersList.length; i++) {
        if (
            ordersList[i].name.toLowerCase().includes(term) ||
            ordersList[i].number.includes(term)
        ) {
            customerorders += `
            <tr>
                <td>${i + 1}</td>
                <td>${ordersList[i].placeorder}</td>
                <td>${ordersList[i].name}</td>
                <td>${ordersList[i].number}</td>
                <td>${ordersList[i].address}</td>
                <td>${ordersList[i].order}</td>
                <td>${ordersList[i].mandob}</td>
                <td>
                    <button onclick="updateOrder(${i})" class="btn btn-warning btn-sm">Update</button>
                    <button onclick="deletorders(${i})" class="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>`;
        }
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


var currentorder = null;

function updateOrder(index) {
    currentorder = index;

    customerNameinput.value = ordersList[index].name;
    customeraddressinput.value = ordersList[index].address;
    customerNumberinput.value = ordersList[index].number;
    areaorderinput.value = ordersList[index].order;
    customernotesinput.value = ordersList[index].notes;
    mandobinput.value = ordersList[index].mandob;
}


function updateOrder(index) {
    currentorder = index;

    customerNameinput.value = ordersList[index].name;
    customeraddressinput.value = ordersList[index].address;
    customerNumberinput.value = ordersList[index].number;
    areaorderinput.value = ordersList[index].order;
    customernotesinput.value = ordersList[index].notes;
    mandobinput.value = ordersList[index].mandob;

    // إعادة مكان الطلب
    SelectorInput.value = ordersList[index].placeorder;
    pharmacyInput.value = ordersList[index].placeorder;
    supermarketInput.value = ordersList[index].placeorder;
    elseInput.value = ordersList[index].placeorder;
}


// $(function () {

//     var aboutSection = $(".container");

//     aboutSection.hide();

//     aboutSection.show(2000, function () {
//         $('.form-control').slideDown(5000);
//     });

// });


$('.container-fluid').slideDown(3000);




// ==============معلومة سريعة - لتحويل الحروف الي صغير او كبير===================
// var name = eMAD
// var term = "A"
// console.log(name.toLowerCase().includes(term.toLowerCase()))

// ========================================================================

