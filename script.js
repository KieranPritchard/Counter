// Globel varibles
let counter = 0;

// Adds one to the counter on button press
function increase(){
    counter += 1;
    check_value(counter)
    document.getElementById('counter-display').innerHTML = counter;
}

// Subtracts one from counter on button press
function decrease(){
    counter -= 1;
    check_value(counter)
    document.getElementById('counter-display').innerHTML = counter;
}

// Resets counter to zero
function reset(){
    counter = 0;
    check_value(counter)
    document.getElementById('counter-display').innerHTML = counter;
}

// Checks if value is below zero, higher then 999, or lower then -999
function check_value(){
    if(counter < 0){
        document.getElementById('counter-display').style.color = 'red';
    } else{
        document.getElementById('counter-display').style.color = 'white';
    }

    if(counter < -9999 || counter > 9999){
        counter = 0
        document.getElementById('counter-display').innerHTML = counter;
    }
}
