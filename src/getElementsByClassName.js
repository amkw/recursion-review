// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var resultsArray = [];

  if (document.body === null) {
    return null;
  } else {
    searchChildNodes(resultsArray, document.body, className);
  }
  return resultsArray;
};

// Recursive helper function to search childNodes as long as nodeList length > 0. Adds nodes with class className to resultsArray.
var searchChildNodes = function (resultsArray, element, className) {
  if (element.classList !== undefined &&
    element.classList.contains(className)) {
    resultsArray.push(element);
  }
  element.childNodes.forEach(function (currentValue) {
    searchChildNodes(resultsArray, currentValue, className);
  });
};


// var getElementsByClassName = (className) => {
//   var output = [];
//   var testFunction2 = (node) => {
//     if (node.classList) {
//       if (node.classList.toString().includes(className)) output.push(node);
//       if (node.hasChildNodes()) {
//         for (var i = 0; i < node.childNodes.length; i++) {
//           testFunction2(node.childNodes[i]);
//         }
//       }
//     }
//   }
//   testFunction2(document.body);
//   return output;
// };
