

var displayNum = () => {
    var n1 = Math.floor(Math.random() * 3);
    var n2 = Math.floor(Math.random() * 3);

    var n3 = Math.floor(Math.random() * 13);

    var n4 = Math.floor(Math.random() * 33);
    var n5 = Math.floor(Math.random() * 1);
    var obj = [
        n1,
        n2,
        n3,
        n4,
        n5
    ]
    var numbers = [];
    for (var i in obj) {
        if (obj[i] == 0 || obj[i] == 12 || obj[i] == 2) {
            if (obj[i] != obj[i + 1]) {
                numbers.push(obj[i])
            }
        }
    }
    var narray = [...new Set(numbers)];

    document.getElementById("ans").innerHTML += `${narray} <br>`


}