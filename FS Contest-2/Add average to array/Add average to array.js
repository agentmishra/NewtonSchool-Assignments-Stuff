// Your code here

Array.prototype.average = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {

        sum = sum + this[i];
    }
    return sum / this.length
};
