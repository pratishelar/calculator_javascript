    displayNum = "";
    storedNum = "";
    operation = 0;
    queuedOperation = 0;
    calculationFinished = false;

    function clearDisplay() {

        var display = document.getElementById("display");

        displayNum = "";
        storedNum = "";
        operation = 0;
        queuedOperation = 0;
        display.value = displayNum;

    }

    function numInput(num) {

        var display = document.getElementById("display");

        if ((display.value == "") && num == "0") {
            return;
        } else if (calculationFinished == true) {
            display.value = num;
            calculationFinished = false;
        } else {
            display.value += num;
        }
    }

    function insertDecimal(dec) {

        var display = document.getElementById("display");

        for (i = 0; i < display.value.length; i++)
            if (display.value.charAt(i) == '.') {
                return;
            }

        display.value += dec;
    }

    function setOperation(command) {

        var display = document.getElementById("display"),
            displayNum = display.value;
        evalDisplay = eval(displayNum),
            evalStored = eval(storedNum);

        if (queuedOperation == 0) {
            storedNum = display.value;
        } else if (queuedOperation == 1) {
            storedNum = evalStored + evalDisplay;
        } else if (queuedOperation == 2) {
            storedNum = evalStored - evalDisplay;
        } else if (queuedOperation == 3) {
            storedNum = evalStored * evalDisplay;
        } else if (queuedOperation == 4) {
            storedNum = evalStored / evalDisplay;
        } else if (queuedOperation == 5) {
            storedNum = evalStored % evalDisplay;
        } else if (queuedOperation == 6) {
            storedNum = evalStored ^ evalDisplay;
        }

        if (command == 'add') {
            operation = 1;
        } else if (command == 'subtract') {
            operation = 2;
        } else if (command == 'multiply') {
            operation = 3;
        } else if (command == 'divide') {
            operation = 4;
        } else if (command == 'mod') {
            operation = 5;
        } else if (command == 'exponent') {
            operation = 6;
        }

        queuedOperation = operation;
        display.value = '';
    }

    function calculate() {

        var display = document.getElementById("display");
        displayNum = display.value;
        var evalDisplay = eval(displayNum),
            evalStored = eval(storedNum);

        if (operation == 1) {
            displayNum = evalStored + evalDisplay;
        } else if (operation == 2) {
            displayNum = evalStored - evalDisplay;
        } else if (operation == 3) {
            displayNum = evalStored * evalDisplay;
        } else if (operation == 4) {
            displayNum = evalStored / evalDisplay;
        } else if (operation == 5) {
            displayNum = (evalStored * evalDisplay) / 100;
        } else if (operation == 6) {
            displayNum = Math.pow(evalStored, evalDisplay);
        }

        display.value = displayNum;
        if (operation != 0)
            calculationFinished = true;

        operation = 0;
        queuedOperation = 0;
        displayNum = "";
        storedNum = "";
    }

    function sin() {
        //    var display = document.getElementById("display");
        display.value = Math.sin(display.value);
    }

    function cos() {
        //    var display = document.getElementById("display");
        display.value = Math.cos(display.value);
    }

    function tan() {
        //    var display = document.getElementById("display");
        display.value = Math.tan(display.value);
    }

    function squareroot() {
        //    var display = document.getElementById("display");
        display.value = Math.sqrt(display.value);
    }

    function log() {
        //    var display = document.getElementById("display");
        display.value = Math.log(display.value);
    }


    function piee() {

        if (display.value == "" || display.value == "0") {
            var pi = Math.PI;
            display.value = pi.toFixed(8);
        } else {

            var res = display.value * Math.PI;
            display.value = res.toFixed(8);
        }
    }

    function del() {
        //    var display = document.getElementById("display");
        display.value = display.value.substring(0, display.value.length - 1)
    }

    function minusvalue(x) {
        var i = 0;
        if (x[i] == "-") {
            document.getElementById("!").disabled = true;
        } else {
            display.value = '-' + display.value;
        }
    }

    function factorial(num) {
        // If the number is less than 0, reject it.  
        if (num < 0) {
            num = -1;
        }
        // If the number is 0, its factorial is 1.  
        else if (num == 0) {
            num = 1;
        }
        var tmp = num;
        while (num-- > 2) {
            tmp *= num;
        }
        display.value = tmp;
    }

//document.addEventListener("onload", fun, true );
//function fun()
//{
//    var el = document.getElementById("footer");
//    el.innerHTML = Date();
//};

