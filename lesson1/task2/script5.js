#!/usr/local/bin node

function createTable(content) {
  return '<table width="300" style="border-collapse: collapse; table-layout: fixed">$content</table>'.replace('$content', content);
}

function createTableRow(content) {
  return '<tr>$content</tr>'.replace('$content', content);
}

function createTableCell(grad) {
  return '<td style="background-color: rgb($grad, $grad, $grad)" height="1"></td>'.replace(/\$grad/g, grad);
}

function main(n) {
  var content = '';
  var rows = [];
  var cells = [];
  var maxGrad = 255;
  var gradStep = Math.floor(maxGrad / n);

  for (var i = 0; i < n; i++) {
    cells = [];
    for (var j = n - 1; j >= 0; j--) {
      cells.push(createTableCell(gradStep * Math.ceil((i + j) / 2)));
    }
    rows.push(createTableRow(cells.join('')));
  }
  return createTable(rows.join(''));
}

main(100);
