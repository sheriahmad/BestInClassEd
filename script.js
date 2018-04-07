function printNumbers() {
    for(var i = 0; i <= 100; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log("ThreeFive\n");
        }
        else if (i % 3 == 0) {
            console.log("Three\n");
        }
        else if (i % 5 == 0) {
            console.log("Five\n");
        }
        else {
            console.log("%d", i);
        }
    }
}
printNumbers();