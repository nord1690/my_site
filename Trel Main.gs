function runTrelloIterationReportScript() {
  var reportName = iterationName;
  var spreadsheet = getOrCreateIterationSpreadsheet(reportName);
  var lists = retrieveOpenListsFromTrello();
  var labels = retrieveLabelsFromTrello();
  var cardsByLists = retrieveCardsByListsFromTrello(lists);
  var allCards = retrieveAllCardsFromTrello();
  var storypointsByListName = getStorypointsByListName(lists,cardsByLists);
  
  // Update the data sheets
  var iterationDetailsSheet = getOrCreateSheet(spreadsheet, "Iteration details data");
  updateIterationDetails(iterationDetailsSheet,storypointsByListName, labels, lists, cardsByLists, allCards);

  var hashTagsSheet = getOrCreateSheet(spreadsheet, "Hash Tags data");
  updateHashTagsDetails(hashTagsSheet, allCards);
  
  var iterationDetailsTest = getOrCreateSheet(spreadsheet, "Test");
  updateTestDetails(hashTagsSheet, allCards, lists, cardsByLists);

  // Remove unused default sheet "Sheet1"
  var sheet1 = spreadsheet.getSheetByName("Sheet1");
  if (sheet1) spreadsheet.deleteSheet(sheet1); 
}