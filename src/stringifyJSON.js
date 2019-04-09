// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'boolean'){return "" + obj}
  if (typeof obj === 'number'){return "" + obj}
  if (typeof obj === 'string'){return `"${obj}"`}
  if (obj === null){return "" + null}
  if (typeof obj === 'object'){

    var output = [];
    for (var key in obj){
      var currKey = key;
      var currVal = obj[key];
      if (typeof currVal === 'function' || currVal === undefined){
        // do nothing
      }else if(Array.isArray(obj)){
        output.push(stringifyJSON(currVal))
      }else{
          output.push(`${stringifyJSON(currKey)}:${stringifyJSON(currVal)}`);
      }
    }
    if (Array.isArray(obj)){return `[${output}]`}
    if (!Array.isArray(obj)){return `{${output}}`}
  }
};