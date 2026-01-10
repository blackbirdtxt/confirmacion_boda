
Google Sheets columnas:
Nombre | Apellido | Mensaje | Fecha

Apps Script:

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.nombre, data.apellido, data.mensaje, new Date()]);
  return ContentService.createTextOutput("ok");
}
