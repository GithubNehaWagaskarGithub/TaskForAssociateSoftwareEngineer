function sortDescending() {
    var inputArray = document.getElementById("inputArray").value;
    var numbers = inputArray.split(',').map(function(item) {
        return parseFloat(item);
    });

    for (var i = 0; i < numbers.length; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            if (numbers[i] < numbers[j]) {
                var temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }

    document.getElementById("outputArray").textContent = numbers.join(', ');
}