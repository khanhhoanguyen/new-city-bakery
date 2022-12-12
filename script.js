const form = document.getElementById('myform');

function sheetClick(){
    if (sheetCake.checked){
        document.getElementById('radiusSize').disabled = true;
        document.getElementById('numberOfRoundLayers').disabled = true;
    }
}

function roundClick(){
    if (roundCake.checked){
        document.getElementById('lengthSize').disabled = true;
        document.getElementById('widthSize').disabled = true;
        document.getElementById('numberOfSheetLayers').disabled = true;
    }
}


function onFormSubmit(e){
    e.preventDefault();//prevent from refresh the page after submitting

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const streetAddress = document.getElementById('streetAddress').value;
    const postalCode = document.getElementById('postalCode').value;
    const phoneNumber = document.getElementById('tel').value;
    const email = document.getElementById('email').value;

    const length = document.getElementById('lengthSize').value;
    const width = document.getElementById('widthSize').value;
    const sheetLayers = document.getElementById('numberOfSheetLayers').value;

    const radius = document.getElementById('radiusSize').value;
    const roundLayers = document.getElementById('numberOfRoundLayers').value;

    const sheet = sheetCake.checked;
    const round = roundCake.checked;
    const creamCheeseAdded = creamCheese.checked;
    const creamCheesePrice = 5;
    const fruitAndAlmondsAdded = fruitAndAlmonds.checked;
    const fruitAndAlmondsPrice = 7;
    const fruitJamAdded = fruitJam.checked;
    const fruitJamPrice = 4;

    console.log(sheet, round, sheetLayers, roundLayers);

    let area;
    let remainArea;
    let minArea;

    let basePrice;
    let increaseLayerPrice;
    let increaseDimensionPrice;
    let subTotalPrice;
    let totalPrice;
    
    if (sheet === true){
        minArea = 900;
        area = length * width;
        remainArea = area - minArea;

        basePrice = 18;
        increaseDimensionPrice = remainArea * 0.02;
        increaseLayerPrice = 0.5 * (basePrice + increaseDimensionPrice) * (sheetLayers - 1)  ;
        subTotalPrice = (basePrice + increaseLayerPrice + increaseDimensionPrice); 

        output.innerHTML =  firstName  + ' ' + lastName + '<br>';
        output.innerHTML +=  streetAddress  + '<br>';
        output.innerHTML +=  postalCode  + '<br>';
        output.innerHTML +=  phoneNumber  + '<br>';
        output.innerHTML +=  email  + '<br>';
        output.innerHTML += '<p>' + '</p>';
        output.innerHTML += '<p>' + "Your Order:"  + '</p>';
        output.innerHTML += '<p>' + '</p>';
        output.innerHTML += "Sheet cake " + length + "cm and "+ width+" cm with "+ sheetLayers+ " layers: "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'+ subTotalPrice + '<br>';
        if (creamCheeseAdded === true && fruitAndAlmondsAdded === true && fruitJamAdded === true){
            output.innerHTML += "Cream Cheese icing "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$' + creamCheesePrice + '<br>';
            output.innerHTML += "Fruit and Almond topping "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + fruitAndAlmondsPrice + '<br>';
            output.innerHTML += "Fruit Jam filling "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + fruitJamPrice + '<br>';
            totalPrice = subTotalPrice + creamCheesePrice + fruitAndAlmondsPrice + fruitJamPrice;
        }
        else if(creamCheeseAdded === true && fruitAndAlmondsAdded === true){
            output.innerHTML +="Cream Cheese icing "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + creamCheesePrice + '<br>';
            output.innerHTML +="Fruit and Almond topping "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + fruitAndAlmondsPrice + '<br>';
            totalPrice = subTotalPrice + creamCheesePrice + fruitAndAlmondsPrice;
        }
        else if(creamCheeseAdded === true && fruitJamAdded === true){
            output.innerHTML += "Cream Cheese icing "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + creamCheesePrice + '<br>';
            output.innerHTML += "Fruit Jam filling "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + fruitJamPrice + '<br>';
            totalPrice = subTotalPrice + creamCheesePrice + fruitJamPrice;
        }
        else if(fruitAndAlmondsAdded === true && fruitJamAdded === true){
            output.innerHTML +="Fruit and Almond topping "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + fruitAndAlmondsPrice + '<br>';
            output.innerHTML +="Fruit Jam filling "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + fruitJamPrice + '<br>';
            totalPrice = subTotalPrice + fruitAndAlmondsPrice + fruitJamPrice;
        }
        else if(creamCheeseAdded === true){
            output.innerHTML +="Cream Cheese icing "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + creamCheesePrice + '<br>';
            totalPrice = subTotalPrice + creamCheesePrice;
        }
        else if(fruitAndAlmondsAdded === true){
            output.innerHTML +="Fruit and Almond topping "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + fruitAndAlmondsPrice + '<br>';
            totalPrice = subTotalPrice + fruitAndAlmondsPrice;
        }
        else if(fruitJamAdded === true){
            output.innerHTML +="Fruit Jam filling "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + fruitJamPrice + '<br>';
            totalPrice = subTotalPrice + fruitJamPrice;
        }
        else{
            totalPrice = subTotalPrice;
        }
        output.innerHTML += "Total: "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + parseFloat(totalPrice).toFixed(2);

    }
    else{
        minArea = 707;
        area = radius * radius * 3.14;
        remainArea = area - minArea;

        basePrice = 15;
        increaseDimensionPrice = remainArea * 0.02;
        increaseLayerPrice = 0.5 * (basePrice + increaseDimensionPrice) * (roundLayers - 1)  ;
        subTotalPrice = (basePrice + increaseLayerPrice + increaseDimensionPrice);

        output.innerHTML =  firstName  + ' ' + lastName + '<br>';
        output.innerHTML +=  streetAddress  + '<br>';
        output.innerHTML +=  postalCode  + '<br>';
        output.innerHTML +=  phoneNumber  + '<br>';
        output.innerHTML +=  email  + '<br>';
        output.innerHTML += '<p>' + '</p>';
        output.innerHTML += '<p>' + "Your Order:"  + '</p>';
        output.innerHTML += '<p>' + '</p>';
        output.innerHTML += "Round cake " + radius +"cm with "+ roundLayers+ " layers: "+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0$' + subTotalPrice  + '<br>';
        if (creamCheeseAdded === true && fruitAndAlmondsAdded === true && fruitJamAdded === true){
            output.innerHTML += "Cream Cheese icing "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$' + creamCheesePrice + '<br>';
            output.innerHTML += "Fruit and Almond topping "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + fruitAndAlmondsPrice + '<br>';
            output.innerHTML += "Fruit Jam filling "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + fruitJamPrice + '<br>';
            totalPrice = subTotalPrice + creamCheesePrice + fruitAndAlmondsPrice + fruitJamPrice;
        }
        else if(creamCheeseAdded === true && fruitAndAlmondsAdded === true){
            output.innerHTML +="Cream Cheese icing "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + creamCheesePrice + '<br>';
            output.innerHTML +="Fruit and Almond topping "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + fruitAndAlmondsPrice + '<br>';
            totalPrice = subTotalPrice + creamCheesePrice + fruitAndAlmondsPrice;
        }
        else if(creamCheeseAdded === true && fruitJamAdded === true){
            output.innerHTML += "Cream Cheese icing "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + creamCheesePrice + '<br>';
            output.innerHTML += "Fruit Jam filling "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + fruitJamPrice + '<br>';
            totalPrice = subTotalPrice + creamCheesePrice + fruitJamPrice;
        }
        else if(fruitAndAlmondsAdded === true && fruitJamAdded === true){
            output.innerHTML +="Fruit and Almond topping "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + fruitAndAlmondsPrice + '<br>';
            output.innerHTML +="Fruit Jam filling "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + fruitJamPrice + '<br>';
            totalPrice = subTotalPrice + fruitAndAlmondsPrice + fruitJamPrice;
        }
        else if(creamCheeseAdded === true){
            output.innerHTML +="Cream Cheese icing "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + creamCheesePrice + '<br>';
            totalPrice = subTotalPrice + creamCheesePrice;
        }
        else if(fruitAndAlmondsAdded === true){
            output.innerHTML +="Fruit and Almond topping "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + fruitAndAlmondsPrice + '<br>';
            totalPrice = subTotalPrice + fruitAndAlmondsPrice;
        }
        else if(fruitJamAdded === true){
            output.innerHTML +="Fruit Jam filling "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + fruitJamPrice + '<br>';
            totalPrice = subTotalPrice + fruitJamPrice;
        }
        else{
            totalPrice = subTotalPrice;
        }
        output.innerHTML += "Total: "+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$'  + parseFloat(totalPrice).toFixed(2);
    }
    
}

myform.onsubmit = onFormSubmit;