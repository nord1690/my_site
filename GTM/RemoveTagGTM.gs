function removeTags () {
  
  var ss = SpreadsheetApp.getActiveSheet();
  var acc = ss.getRange(2, 5).getValue()
  var container = ss.getRange(2, 6).getValue()
  var work = ss.getRange(2, 7).getValue()
  var numMass = ss.getDataRange().getLastRow()
  
    for ( var i = 0; numMass > i + 1; i++ ) 
    {
      var mass = ss.getRange(i + 2, 3).getValue() 
      
      var tags = TagManager.Accounts.Containers.Workspaces.Tags.remove("accounts/" + String(acc) + "/containers/" + String(container) + "/workspaces/" + String(work) + "/tags/" + String(mass) );
    }
  
  ss.getRange(2, 1, numMass).clear()
  ss.getRange(2, 2, numMass).clear()
  ss.getRange(2, 3, numMass).clear()
}

function Tags() {
  
  var ss = SpreadsheetApp.getActiveSheet();
  var acc = ss.getRange(2, 5).getValue()
  var container = ss.getRange(2, 6).getValue()
  var work = ss.getRange(2, 7).getValue()
  
  var tags = TagManager.Accounts.Containers.Workspaces.Tags.list("accounts/" + acc + "/containers/" + container + "/workspaces/" + work)
  var arr = [['TAGS','TYPE', 'TAG_ID']]
  
  var ss = SpreadsheetApp.getActiveSheet();
  
  if (tags.tag && tags.tag.length) {
    for (var i = 0; i < tags.tag.length; i++) {
      
      var Prop = [tags.tag[i].name, tags.tag[i].type, tags.tag[i].tagId];      
      arr.push(Prop)
      
      }
  }
  
  /*ss.getDataRange().clear()*/
  ss.getRange(2, 1, ss.getDataRange().getNumColumns() ).clear()
  ss.getRange(2, 2, ss.getDataRange().getNumColumns() ).clear()
  ss.getRange(2, 3, ss.getDataRange().getNumColumns() ).clear()
  
  ss.getRange(1, 1, arr.length, 3).setValues(arr)
  
}
