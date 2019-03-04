// SIZE VARIABLE //
function getSize() {
    var sizeArray = document.getElementsByClassName("size");
        for (var i=0; i < sizeArray.length; i++) {
            if (sizeArray[i].checked) {
                var selectedSize = sizeArray[i].value;
            }
        }
        if (selectedSize == "Personal") {
            var getSizeCost = 6;
        } else if (selectedSize == "Medium") {
            var getSizeCost = 10;
        } else if (selectedSize == "Large") {
            var getSizeCost = 14;
        } else if (selectedSize === "Extra Large") {
            var getSizeCost = 16;
        }        
    document.getElementById("listSize").innerHTML = selectedSize;
    document.getElementById("sizeCost").innerHTML = "$"+ getSizeCost;
}

// CRUST VARIABLE //
function getCrust() {
    var crustArray = document.getElementsByClassName("crust");
        for (var i=0; i < crustArray.length; i++) {
            if (crustArray[i].checked) {
                var selectedCrust = crustArray[i].value;
            }
            if (selectedCrust == "Cheese Stuffed") {
                var getCrustCost = 3;
            } else var getCrustCost = 0;
        }
    document.getElementById("listCrust").innerHTML = selectedCrust;
    document.getElementById("crustCost").innerHTML = "$"+ getCrustCost;
}

// SAUCE VARIABLE //
function getSauce() {
    var sauceArray = document.getElementsByClassName("sauce");
        for (var i=0; i < sauceArray.length; i++) {
            if (sauceArray[i].checked) {
                var selectedSauce = sauceArray[i].value;
            }
        }
    document.getElementById("listSauce").innerHTML = selectedSauce;
}

// CHEESE VARIABLE //
function getCheese() {
    var cheeseArray = document.getElementsByClassName("cheese");
        for (var i=0; i < cheeseArray.length; i++) {
            if (cheeseArray[i].checked) {
                var selectedCheese = cheeseArray[i].value;
            }
            if (selectedCheese == "Extra Cheese") {
                var getCheeseCost = 3;
            } else var getCheeseCost = 0;
        }
    document.getElementById("listCheese").innerHTML = selectedCheese;
    document.getElementById("cheeseCost").innerHTML = "$"+ getCheeseCost;
}

// MEAT VARIABLE //
function getMeat() {
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meat");
        for (var i=0; i < meatArray.length; i++) {
            if (meatArray[i].checked) {
                selectedMeat.push(meatArray[i].value);
            }
        }
        var joinMeat = selectedMeat.join(', ');
    if (selectedMeat.length >0)
        var getMeatCost = (selectedMeat.length - 1);
        else var getMeatCost = 0;
    document.getElementById("listMeat").innerHTML = joinMeat;
    document.getElementById("meatCost").innerHTML = "$" + getMeatCost;
}

// VEGGIE VARIABLE //
function getVeggies() {
    var selectedVeggies = [];
    var veggiesArray = document.getElementsByClassName("veggies");
        for (var i=0; i < veggiesArray.length; i++) {
            if (veggiesArray[i].checked) {
                selectedVeggies.push(veggiesArray[i].value);
            }
        }
        var joinVeggies = selectedVeggies.join(', ');
    if (selectedVeggies.length > 0)
        var getVeggiesCost = (selectedVeggies.length - 1);
    else var getVeggiesCost = 0;
    document.getElementById("listVeggies").innerHTML = joinVeggies;
    document.getElementById("veggiesCost").innerHTML = "$" + getVeggiesCost;
}

// this function calculates the total for the order //

function total() {
    
    // SIZE //
    var sizeArray = document.getElementsByClassName("size");
        for (var i=0; i < sizeArray.length; i++) {
            if (sizeArray[i].checked) {
                var selectedSize = sizeArray[i].value;
            }
        }
        if (selectedSize == "Personal") {
            var getSizeCost = 6;
        } else if (selectedSize == "Medium") {
            var getSizeCost = 10;
        } else if (selectedSize == "Large") {
            var getSizeCost = 14;
        } else if (selectedSize === "Extra Large") {
            var getSizeCost = 16;
        }      

    // CRUST //
    var crustArray = document.getElementsByClassName("crust");
        for (var j=0; j < crustArray.length; j++) {
            if (crustArray[j].checked) {
                var selectedCrust = crustArray[j].value;
            }
            if (selectedCrust == "Cheese Stuffed") {
                var getCrustCost = 3;
            } else var getCrustCost = 0;
        }

    // CHEESE //
    var cheeseArray = document.getElementsByClassName("cheese");
        for (var x=0; x < cheeseArray.length; x++) {
            if (cheeseArray[x].checked) {
                var selectedCheese = cheeseArray[x].value;
            }
            if (selectedCheese == "Extra Cheese") {
                var getCheeseCost = 3;
            } else var getCheeseCost = 0;
        }

    // MEAT //
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meat");
        for (var y=0; y < meatArray.length; y++) {
            if (meatArray[y].checked) {
                selectedMeat.push(meatArray[y].value);
            }
        }
    if (selectedMeat.length > 0)
        var getMeatCost = (selectedMeat.length - 1);
        else var getMeatCost = 0;

    // VEGGIES //
    var selectedVeggies = [];
    var veggiesArray = document.getElementsByClassName("veggies");
        for (var z=0; z < veggiesArray.length; z++) {
            if (veggiesArray[z].checked) {
                selectedVeggies.push(veggiesArray[z].value);
            }
        }
    if (selectedVeggies.length > 0)
        var getVeggiesCost = (selectedVeggies.length - 1);
    else var getVeggiesCost = 0;

    // TOTAL //
    var totalCost = getSizeCost + getCrustCost + getCheeseCost + getMeatCost + getVeggiesCost;
    document.getElementById("total").innerHTML = "$" + totalCost;
}


// Clears current selections //
function myOrder() {
    alert("Thank you for your order. Your pizza will be ready shortly.");
    document.getElementById("form").reset();
    getSize();
    getCrust();
    getSauce();
    getCheese();
    getMeat();
    getVeggies();
    total();
}
