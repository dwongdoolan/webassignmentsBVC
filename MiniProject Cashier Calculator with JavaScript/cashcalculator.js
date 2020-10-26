var products = [];
var strQuantity = "";
var shoppingCart = [];
var shoppingCartLength = 0;
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];


function addingItem() {
    var item = document.getElementById('productName').value;
    var product = {
        name: item,
        price: 0
    }
    document.getElementById("productName").value = ""; //clears input box

    if (item != "") {
        products.push(product);
        var menuList = document.getElementById("firstSelect");
        var myOption = document.createElement("option");
        myOption.text = product.name;
        menuList.add(myOption);
    }
}

function addPriceofProduct() {
    var item = document.getElementById("firstSelect").value;
    var priceOfProduct = document.getElementById("unitPrice").value;
    document.getElementById("unitPrice").value = "";
    var i;
    if (priceOfProduct != "") {
        for (i = 0; i < products.length; i++) {
            if (products[i].name == item) {
                products[i].price = priceOfProduct;
                var unitMenuList = document.getElementById("secondSelect");
                var myOption = document.createElement("option");
                myOption.text = products[i].name + " $" + priceOfProduct + "/unit";
                unitMenuList.add(myOption);
            }
        }
    }
}

function addUnit0() {
    strQuantity += "0";
}
function addUnit1() {
    strQuantity += "1";
}
function addUnit2() {
    strQuantity += "2";
}
function addUnit3() {
    strQuantity += "3";
}
function addUnit4() {
    strQuantity += "4";
}
function addUnit5() {
    strQuantity += "5";
}
function addUnit6() {
    strQuantity += "6";
}
function addUnit7() {
    strQuantity += "7";
}
function addUnit8() {
    strQuantity += "8";
}
function addUnit9() {
    strQuantity += "9";
}

function addToCart() {
    var totalUnits = parseInt(strQuantity, 10);
    strQuantity = ""; //clears unit quantity
    var item = document.getElementById("secondSelect").value;
    console.log(totalUnits);
    console.log(products[0].name);
    for (var i = 0; i < products.length; i++) {
        if (item.search(products[i].name) >= 0) {
            var productWithQuantityObject = {
                product: products[i],
                units: totalUnits,
                totalPrice: products[i].price * totalUnits
            };
            console.log(productWithQuantityObject);
            shoppingCart.push(productWithQuantityObject);
            shoppingCartLength++;
        }
    }
}

function calcAmountDue() {
    var grandPrice = 0;
    var rowStart = 3;
    var tax;
    var table = document.getElementById("thisTable");
    for (var i = 0; i < shoppingCart.length; i++) {
        var cartItem = shoppingCart[i];
        var product2 = cartItem.product;
        console.log(product2);
        var totalPrice = cartItem.totalPrice;
        grandPrice += totalPrice;

        var myUnits = cartItem.units;
        var pricePerUnit = product2.price;

        var myRow = table.insertRow(rowStart);
        rowStart++;

        var dataCell1 = myRow.insertCell(0);
        var dataCell2 = myRow.insertCell(1);
        var dataCell3 = myRow.insertCell(2);
        var dataCell4 = myRow.insertCell(3);

        dataCell1.innerHTML = product2.name;
        dataCell2.innerHTML = pricePerUnit;
        dataCell3.innerHTML = myUnits;
        dataCell4.innerHTML = totalPrice;

        console.log(totalPrice);
        console.log(grandPrice);
    }
    tax = grandPrice * 0.05;
    if (shoppingCart.length > 0) {
        document.getElementById("totalPrice").innerHTML = "Total Price: " + grandPrice.toFixed(2);
        document.getElementById("totalTax").innerHTML = "Total Tax: " + tax.toFixed(2);
        document.getElementById("amountDue").innerHTML = "Amount Due: " + (grandPrice + tax).toFixed(2);
    }
    shoppingCart = [];
}

function clearOrder() {
    var table = document.getElementById("thisTable");
    var rowStart = 3;
    for (var i = 0; i < shoppingCartLength; i++) {
        table.deleteRow(rowStart);
    }
    shoppingCartLength = 0;
    shoppingCart = [];

    document.getElementById("totalPrice").innerHTML = "Total Price: ";
    document.getElementById("totalTax").innerHTML = "Taxes: ";
    document.getElementById("amountDue").innerHTML = "Amount Due: ";
}

function myDisplayDateTime() {
    var dateFromTable = document.getElementById("date");
    var time = document.getElementById("time");
    var date = new Date();
    dateFromTable.innerHTML = "Date: " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    var hours = date.getHours();
    if (hours > 12) {
        var min = date.getMinutes();
        if (min < 10) {
            time.innerHTML = "Time: " + (date.getHours() - 12) + ":0" + date.getMinutes() + " PM";
        }
        else {
            time.innerHTML = "Time: " + (date.getHours() - 12) + ":" + date.getMinutes() + " PM";
        }
    }
    else {
        if (min < 10) {
            time.innerHTML = "Time: " + (date.getHours() + 12) + ":0" + date.getMinutes() + " AM";
        }
        else {
            time.innerHTML = "Time: " + (date.getHours() + 12) + ":" + date.getMinutes() + " AM";
        }
    }
}