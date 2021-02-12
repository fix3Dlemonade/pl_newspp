/* Author: Kacper Woźniak */

var dData = new Date();

function date() {
    document.getElementById('date').innerHTML = dData.getDate() + '/' + ('0' + (dData.getMonth() + 1)).slice(-2) + '/' + dData.getFullYear();
}