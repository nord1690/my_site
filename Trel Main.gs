function runTrelloIterationReportScript() {
  
  var reportName = iterationName;
  var spreadsheet = getOrCreateIterationSpreadsheet(reportName);
  var allListAndCard = groupListsAndCards()
  
  // Update the data sheets
  var iterationDetailsSheet = getOrCreateSheet(spreadsheet, "Аналитика Январь 2018");
  updateListCards(iterationDetailsSheet, allListAndCard)
  
  // Remove unused default sheet "Sheet1"
  var sheet1 = spreadsheet.getSheetByName("Лист1");
  var sheet2 = spreadsheet.getSheetByName("Sheet1");
  if (sheet1) spreadsheet.deleteSheet(sheet1);
  if (sheet2) spreadsheet.deleteSheet(sheet2);
  
}
