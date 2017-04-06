function findWaldo(arr, found) {
    arr.forEach(function(element, i) {

        if (arr[i] === "Waldo") {
            found(i); // execute callback
        }
    })
}

function actionWhenFound(i) {
    console.log(`Found him! at item ${i}`);
}

findWaldo(["Alice", "Waldo", "Bob", "Winston"], actionWhenFound);
