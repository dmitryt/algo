function createList(content) {
  return `<ul class="task2_1">${content}</ul>`;
}

function createListItem(content) {
  return `<li>${content}</li>`;
}

var OPERATIONS = {
  '+': add,
  '*': mul,
  '-': sub,
  '/': div,
};

function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

function sub(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}

function main(sum) {
  var result = [];
  Object.keys(OPERATIONS).forEach(function(sign) {
    var operation = OPERATIONS[sign];
    for (var fn = 0; fn < 10; fn++) {
      for (var sn = 0; sn < 10; sn++) {
        if (operation(fn, sn) === sum) {
          result.push(createListItem([fn, sn].join(sign)));
        }
      }
    }
  });
  return createList(result.join(''));
}

main(5);
