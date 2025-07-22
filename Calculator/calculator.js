document.addEventListener("DOMContentLoaded", function() {
        let buttonclicked = false;
        let boolean=true;
        let number1 = "";
        let number2 = "";
        let sign="";
        let operator="";
        let output;
        let counter=0;


const operation=document.querySelectorAll(".operation");

operation.forEach(function(op){
    op.addEventListener("click",function(event){
        buttonclicked=true;
        if (counter==0){
        counter=1;
        sign=event.target.id;
        operator=event.target.value;
        document.getElementById("display").textContent=number1+operator;
        console.log("Operation clicked: " + sign);
        console.log(counter);
        }
        else{
        calculate(sign);
        number1=output;
        number2="";
        sign=event.target.id;
        operator=event.target.value;
        document.getElementById("display").textContent=number1+operator;
        console.log("Operation clicked: " + sign)
    }

});
 });




const mybutton = document.querySelectorAll(".btn");
mybutton.forEach(function(button){
    button.addEventListener("click",function(event){
        if (buttonclicked) {
        number2+=event.target.value;
        document.getElementById("display").textContent=number1+operator+number2;
        }
       else{
        number1+=event.target.value;
        document.getElementById("display").textContent=number1;
    }
       });
    
    });


        function calculate(operation) {
            const num1 = parseFloat(number1)
            const num2 = parseFloat(number2);
            
            switch (operation) {
                case "add":
                    output = num1 + num2;
                    break;
                case "subtract":
                    output = num1 - num2;
                    break;
                case "multiply":
                    output = num1 * num2;
                    break;
                case "divide":
                    if (num2 === 0) {
                        output = "Division by zero error";
                    } else {
                        output = num1 / num2;
                    }
                    break;
            }
            result.textContent =output;
        }

        const calculateButton = document.getElementById("calculate");
        calculateButton.addEventListener("click",function(){
            calculate(sign);
            counter=0;
            number1=output;
            buttonclicked=true;
        })

        const clear=document.getElementById("reset");
        clear.addEventListener("click",function(){
            number1="";
            number2="";
            sign="";
            operator="";
            buttonclicked=false;
            document.getElementById("display").textContent="";
            result.textContent="Result:";
            counter=0;
        })

      


        
   
   
});