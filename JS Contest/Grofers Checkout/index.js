var b = document.getElementsByTagName('table')[0];
var b1 = document.createElement('tr');
var b2 = document.createElement('td');
var b3 = document.createElement('td');
var b4 = document.createElement('td');
b4.setAttribute("data-ns-test","grandTotal");
var h = document.querySelectorAll("[data-ns-test='price']");
let sum = 0;
for(var i=0;i<h.length;i++){
    sum+=parseInt(h[i].innerHTML);
}
b2.innerHTML = 5;
b3.innerHTML = "Item-5";
b4.innerHTML = sum;
b1.appendChild(b2);
b1.appendChild(b3);
b1.appendChild(b4);
b.appendChild(b1);
