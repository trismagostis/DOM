function add() {
  let numberOfPoints = document.getElementsByTagName("li").length;
  let elementNode = document.createElement("li");
  let textNode = document.createTextNode(`item ${numberOfPoints+1}`);
  let attributeNode = document.createAttribute("class");
  attributeNode.value="item";
  elementNode.setAttributeNode(attributeNode);
  elementNode.appendChild(textNode);
  list=(document.body.firstElementChild);
  list.appendChild(elementNode);
}

