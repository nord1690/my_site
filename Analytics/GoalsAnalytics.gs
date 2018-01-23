//ACCOUNT MECH Anton

function AccMechAnalytics() {

    var account_id = "";
    var resource_id = "";
    
    var Acc = [['id_webropperty' ,'Number_Goal','Name', 'URL', 'Category', 'Action', 'Label']];

	var ss = SpreadsheetApp.getActiveSheet();

    var num = ""
    var string = ""
  
  
  for(var i = 1; 13>i; i++) {

    var goals = Analytics.Management.Goals.get(account_id, resource_id, num, i)
    
    if(goals.type == "URL_DESTINATION"){
      var urld = goals.urlDestinationDetails.matchType + " " + goals.urlDestinationDetails.url
      
      var val = [num, i, goals.name, urld, "", "", ""]
      Acc.push(val)
    } else  {
      var cat = goals.eventDetails.eventConditions[0]
      var act = goals.eventDetails.eventConditions[1]
      var lbl = goals.eventDetails.eventConditions[2]
      var val1 = ""
      var val2 = ""
      var val3 = ""
      
      if(cat != undefined) {
        var val1 = cat["matchType"] + " " + cat["expression"]
      }
      
      if(act != undefined) {
        var val2 = act["matchType"] + " " + act["expression"]
      }
      
      if(lbl != undefined) {
        var val3 = lbl["matchType"] + " " + lbl["expression"]
      }
   
      var val = [num ,i,goals.name, "", val1, val2, val3]
      Acc.push(val)
    }
  }
    
    ss.getRange(string, 1, Acc.length, 7).setValues(Acc);
}
