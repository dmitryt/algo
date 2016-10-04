function createTable(content) {
  return '<table style="border-collapse: collapse; table-layout: fixed">$content</table>'
            .replace('$content', content);
}

function createTableRow(content) {
  return '<tr>$content</tr>'.replace('$content', content);
}

function createTableCell(color, args) {
  return '<td style="background-color: $color" width="auto" height="auto">$cContent</td>'
            .replace(/\$color/g, color)
            .replace(/\$cContent/g, args.cContent);
}

function renderFractal(n, forceBlack) {
  var rows = [];
  var cells;
  if (n === 0) {
    return '';
  }
  for (var r = 0; r < 3; r++) {
    cells = [];
    for (var c = 0; c < 3; c++) {
      var isCenterCell = c === 1 && r === 1;
      var color = isCenterCell || forceBlack ? 'black' : 'white';
      cells.push(createTableCell(color, {
        cContent: renderFractal(n - 1, isCenterCell || forceBlack)
      }));
    }
    rows.push(createTableRow(cells.join('')));
  }
  return createTable(rows.join(''));
}

function main(n) {
  var depth = Math.round(Math.log(n) / Math.log(3));
  return renderFractal(depth);
}

main(3*3*3*3*3);
