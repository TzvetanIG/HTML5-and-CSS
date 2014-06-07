/**
 * Created by Ganchev on 7.6.2014 г..
 */

function Calculator(screenId) {
    this.expresion = "0";
    this.calculatorScreen = document.getElementById(screenId);
    this.calculatorScreen.value = this.expresion;
}

Calculator.prototype.addChar = function(symbol){
    if (this.expresion == "0"){
        this.expresion = "";
    }
    this.expresion += symbol;
    this.calculatorScreen.value = this.expresion;
}

Calculator.prototype.printResult = function(){
    try {
        this.calculatorScreen.value = eval(this.expresion);
    }
    catch(e) {
        this.calculatorScreen.value = "Error";
    } finally{
        this.expresion = "0";
    }

}

Calculator.prototype.clearScr = function(){
    this.expresion = "0";
    this.calculatorScreen.value = this.expresion;

}

calculator = new Calculator("screen");