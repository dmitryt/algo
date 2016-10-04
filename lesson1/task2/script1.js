function createTable(content, args) {
  return '<table width="$width" style="border-collapse: collapse; table-layout: fixed">$content</table>'
            .replace('$content', content)
            .replace('$width', args.width);
}

function createTableRow(content) {
  return '<tr>$content</tr>'.replace('$content', content);
}

function createTableCell(grad, args) {
  return '<td style="background-color: rgb($grad, $grad, $grad)" height="$cHeight"></td>'
            .replace(/\$grad/g, grad)
            .replace(/\$cHeight/g, args.cHeight);
}

function main(n, args) {
  var content = '';
  var rows = [];
  var cells = [];
  var maxGrad = 255;
  var gradStep = maxGrad / (n - 1);
  args = args || {};

  for (var i = 0; i <= n - 1; i++) {
    cells = [];
    for (var j = n - 1; j >= 0; j--) {
      cells.push(createTableCell(Math.ceil(gradStep * (i + j) / 2), args));
    }
    rows.push(createTableRow(cells.join('')));
  }
  return createTable(rows.join(''), args);
}

main(3, { width: 250, cHeight: 70 });
