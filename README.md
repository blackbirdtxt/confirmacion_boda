
# Confirmación de Asistencia - Boda 💍

## 1. Crear Google Sheets
- Crea una hoja en Google Sheets llamada "Respuestas"
- Columnas: Nombre | Fecha

## 2. Apps Script
- Extensiones → Apps Script
- Pega este código:

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.nombre, new Date()]);
  return ContentService.createTextOutput("ok");
}

- Implementar → Aplicación web
- Acceso: Cualquiera
- Copia la URL

## 3. Configurar
- Pega la URL en script.js (SCRIPT_URL)

## 4. Publicar
- Sube todo el contenido a:
  - GitHub Pages (recomendado)
  - Netlify
  - Vercel

## 5. Excel automático
- Google Sheets → Archivo → Descargar → Excel (.xlsx)

Proyecto listo para uso real.
