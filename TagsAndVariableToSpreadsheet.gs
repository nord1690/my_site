function Tags() {
  
  var tags = TagManager.Accounts.Containers.Workspaces.Tags.list("accounts/76300699/containers/1218699/workspaces/127")
  var arr = [['TAGS','TYPE']]
  
  var ss = SpreadsheetApp.getActiveSheet();
  ss.clear();
  
  if (tags.tag && tags.tag.length) {
    for (var i = 0; i < tags.tag.length; i++) {
      
      var Prop = [tags.tag[i].name, tags.tag[i].type];      
      arr.push(Prop)
      
      }
  }
  
  ss.getDataRange().clear()
  ss.getRange(1, 1, arr.length, 2).setValues(arr)
  
}

function Variable() {
  
  var tags = TagManager.Accounts.Containers.Workspaces.Variables.list("accounts/76300699/containers/1218699/workspaces/127")
  var arr = [['VARIABLES' , 'TYPE']]
  
  var ss = SpreadsheetApp.getActiveSheet();
  
  if (tags.variable && tags.variable.length) {
    for (var i = 0; i < tags.variable.length; i++) {
      
      var Prop = [tags.variable[i].name,tags.variable[i].type];      
      arr.push(Prop)
      
      }
  }
  
  ss.getRange(1, 3, arr.length, 2).setValues(arr)
  
}
