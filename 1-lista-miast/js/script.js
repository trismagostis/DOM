let cities = [
  "Warsaw",
  "Berlin",
  "Paris",
  "London",
  "New York",
  "Tokio",
  "Moscow",
];
let olElement = document.createElement("ol");
cities.forEach(function (element, index) {
  olElement.insertAdjacentHTML(
    "beforeend",
    `<li class="city">${cities[index]}</li>`
  );
});
console.log(olElement);
document.body.insertBefore(olElement, document.body.firstElementChild);
let liElements = document.getElementsByTagName("li");
// liElements.forEach(element => {
//     document.write(element.firstChild);}); trzeba najpierw zamienic na tablice Array.from(liElements).forEach((element) => {
//     console.log(element);
//     document.write(element.firstChild.textContent + '<br>')
//   })
for (let index = 0; index < liElements.length; index++) {
  const element = liElements[index];
  document.write(element.firstChild.textContent + "<br>");
}
console.log(liElements[1].firstChild);
console.log(document);
