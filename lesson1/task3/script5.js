function createTable(content) {
  return '<table style="border-collapse: collapse; table-layout: fixed">$content</table>'
            .replace('$content', content);
}

function createTableRow(content) {
  return '<tr>$content</tr>'.replace('$content', content);
}

function createTableCell(color, args) {
  return '<td style="background-color: $color" width="$cSize" height="$cSize"></td>'
            .replace(/\$color/g, color)
            .replace(/\$cSize/g, args.cSize);
}

function getDelta(i, j, radius) {
  return i*i + j*j - radius*radius;
}

function main(n, args) {
  var rows = [];
  var cells = [];
  var r = Math.floor(n / 2);
  var delta = null;
  var color = null;

  for (var i = -r; i <= r; i++) {
    cells = [];
    for (var j = -r; j <= r; j++) {
      delta = getDelta(i, j, r);
      if (delta > 0) {
        color = 'white';
      } else if (delta < 0) {
        if (getDelta(i - 1, j, r) > 0 || getDelta(i, j - 1, r) > 0 || getDelta(i + 1, j, r) > 0 || getDelta(i, j + 1, r) > 0) {
          color = 'black';
        } else {
          color = 'blue';
        }
      } else {
        color = 'black';
      }
      cells.push(createTableCell(color, args));
    }
    rows.push(createTableRow(cells.join('')));
  }
  return createTable(rows.join(''), args);
}

main(100, { cSize: 1 });
