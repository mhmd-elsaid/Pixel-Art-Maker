function makeGrid() {
    let gridHeight, gridWidth, cols, rows, pixelCanvas ;

    gridHeight = $('#inputHeight').val(); // catch #inputHeight value
    gridWidth = $('#inputWidth').val();  // catch #inputWidth value
    pixelCanvas = $('#pixelCanvas'); 

    pixelCanvas.children().remove();

    // a loop to create the rows
    for (let x = 0; x < gridHeight; x++) {
        pixelCanvas.append("<tr></tr>");
    }

    rows = $("tr");

    // a loop to create the cols
    for (let y = 0; y < gridWidth; y++) {
        rows.append("<td></td>");
    }

    cols = pixelCanvas.find("td");

    // when the use click on a cell
    cols.click(function () {
        let color;
        color = $("#colorPicker").val();
        this.style.backgroundColor = color;
    });
}

let submit;
submit = $("input[type='submit']");

submit.click(function (event) {
    event.preventDefault();
    makeGrid();
});
  
  