function doPost(e){
  var reportName = iterationName;
  var spreadsheet = getOrCreateIterationSpreadsheet(reportName);
  
  //e = {"postData": {"contents":'{"update_id":735673329,"message":{"message_id":358,"from":{"id":269343293,"is_bot":false,"first_name":"Seva","last_name":"Mironovich","username":"mironovich","language_code":"ru"},"chat":{"id":269343293,"first_name":"Seva","last_name":"Mironovich","username":"mironovich","type":"private"},"date":1516179373,"text":"test"}}'}}
  try {
    var content = JSON.parse(e.postData.contents);
    var doc = SpreadsheetApp.openById(SHEET_KEY);
    var sheet = doc.getSheetByName('log')
   
    sheet.getRange(sheet.getLastRow() + 1, 1).setValue([JSON.stringify(content)]);
    //DEBUG sheet.getRange(sheet.getLastRow() + 1, 1).setValue('test');
    
    var params = JSON.stringify(e);
    return ContentService
    .createTextOutput(JSON.stringify({"result":"success", "account": "test"}))
      .setMimeType(ContentService.MimeType.JSON);
  }
  catch(e) {
    return ContentService
      .createTextOutput(JSON.stringify({"result":"error", "error": e}))
      .setMimeType(ContentService.MimeType.JSON);
  } finally { //release lock
    lock.releaseLock();
  }
}
