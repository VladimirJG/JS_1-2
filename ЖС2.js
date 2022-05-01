let iteam_1 = 0;

while (true) {
    if (iteam_1 < 50)
        console.log(iteam_1 + " = Show must go on'")
    iteam_1++
}

var filters = [{
    "name": "abc"
}, {
    "name": "xyz"
}, {
    "name": "asd"
}, {
    "name": "lol"
}];

for (i in filters) {
    console.log(i);
    for (key in filters[i]) {
        console.log(key + ": " + filters[i][key] + ", ");
    }
}

var arr = ['JavaScript', 'ECMAScript', 'jQuery'];
arr.forEach(function(array_item, index) {
    console.log(array_item);
});