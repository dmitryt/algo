function createList(content) {
  return `<ul class="task2_1">${content}</ul>`;
}

function createListItem(content) {
  return `<li>${content}</li>`;
}

var OPERATIONS = ['+', '*', '-', '/'];

function exec(depth, sum, acc) {
  result = [];
  acc = acc || '';
  for (var i = 1; i < 10; i++) {
    if (depth === 1) {
      if (eval(acc + i) === sum) {
        result.push(acc + i);
      }
    } else {
      OPERATIONS.forEach(function(operation) {
        result = result.concat(exec(depth - 1, sum, acc + i + operation));
      });
    }
  }
  return result;
}

function main(n, sum) {
  var result = exec(n, sum).map(createListItem);
  return createList(result.join(''));
}

main(3, 5);
