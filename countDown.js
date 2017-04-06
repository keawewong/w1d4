var countdownGenerator = function(x) {

    var count = x

    return function() {
        var announce = ['Rockets already gone, bub!', 'Blast Off!', 'T-minus'];
        var i = (x > 0 ? 2 : x + 1); //locating the correct announcement
        var count = (x > 0 ? x : "");

        console.log(announce[i] + " " + count);
        x = (x <= -1 ? -1 : --x);

    }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
