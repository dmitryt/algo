#!/usr/local/bin node

function createTable(content) {
  return '<table width="200">$content</table>'.replace('$content', content);
}

function createTableRow(content) {
  return '<tr>$content</tr>'.replace('$content', content);
}

function createTableCell(color) {
  return '<td bgColor="$color" height="11"></td>'.replace('$color', color);
}

function main(n) {
  var content = '';
  var rows = [];
  var cells = [];
  var middle = Math.floor(n / 2);

  for (var i = 0; i < n; i++) {
    cells = [];
    for (var j = 0; j < n; j++) {
      var isMiddleCell = j === middle;
      var isUpperMiddle = ( i + j ) >= n - 1 && i >= j;
      if (n % 2 === 0 && !isMiddleCell) {
        isMiddleCell = middle - j  === 1;
      }
      cells.push(createTableCell( isMiddleCell || isUpperMiddle ? 'red' : 'green'));
    }
    rows.push(createTableRow(cells.join('')));
  }
  return createTable(rows.join(''));
}

main(17);
