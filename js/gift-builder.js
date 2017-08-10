window.onload = function(){
    'use strict';

    // Define a class like this
    function Gift(sex, age){

        // Add object properties like this
        this.sex = sex;
        this.age = age;
    }

    Gift.prototype.order = function(){
        let giftOrderContainer = document.querySelector('#giftResults');
        giftOrderContainer.innerHTML = "Hi, I want to order a gift for a " + this.sex + ', ' + this.age +  ' ' +" year old human, please...";
    };
    

    var orderBtn = document.getElementById('submitOrder');

    orderBtn.addEventListener('click', function(event){

        event.preventDefault(); //stops default HTML link behaviour
        
        let sexChoice = document.getElementById('sexSelector'); // Identify sex choice made by user
        let sexChoiceValue = sexChoice.value; // get the value of the <option> tag as defined in the HTML
        
        let ageChoice = document.getElementById('ageSelector');
        let ageChoiceValue = ageChoice.value;


        // Instantiate new Gift with 'new'
        var myGiftOptions = new Gift(sexChoiceValue, ageChoiceValue);

        // Invoke the class method on the new object
        myGiftOptions.order();
        
        //define the order results paragraph
        var hiddenOrder = document.getElementById('giftResults');
        
        //remove the hidden CSS class to show the order
        hiddenOrder.classList.remove('hidden');
        

    });
};