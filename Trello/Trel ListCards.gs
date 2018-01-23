function updateListCards(sheet, list){

  sheet.clear()
  
  function getHashTagsFromCardName(cardName) {
    
    var cn = cardName.trim();
    var foundHashTags = cn.match(/#[a-zа-я0-9]+/gi);
    
    return foundHashTags;
  }
  
  function getDepartmentTagsFromCardName(cardName) {
    
    var cn = cardName.trim();
    var foundDepartmentTags = cn.match(/\*[a-zа-я0-9]+/gi);
    
    return foundDepartmentTags;
  }
  
  function getStoryPointsFromCardName(cardName) {

    var cn = cardName.trim();
    var storypoints = 0;
    
    // Check if storypoints are on the first position
    if (cn.charAt(0) == "(" && cn.indexOf(")") != -1) {
      storypoints = parseInt(cn.substr(1,cn.indexOf(")")-1));
    } 
    // Check if storypoints are on the last position
    else if (cn.lastIndexOf("(") != -1 && cn.charAt(cn.length-1) == ")") {
      storypoints = parseInt(cn.substr(cn.lastIndexOf("(")+1,cn.length-2));
    } 
    
    // If 'Not-a-Number' was found, set storypoints to 0.
    if (isNaN(storypoints)) {
      storypoints = 0;
    }

    return storypoints;
  }  

  var Acc = [['Name','CardName','CardHash','Label','Hours', 'Department']]; // Headers array

  for(var i = 0; i < list.length; i++){
    
    if(list[i].card.labels[0] != undefined){
      for(var j = 0; j < list[i].card.labels.length; j++){
        if(list[i].card.labels[j].name != ''){
          var labelsName = list[i].card.labels[j].name
        }
      }
    } else {
      labelsName = ''
    }
    
    var val = [];
    val = [list[i].list.name, list[i].card.name, getHashTagsFromCardName(list[i].card.name),labelsName, getStoryPointsFromCardName(list[i].card.name), getDepartmentTagsFromCardName(list[i].card.name)]
    
    Acc.push(val)
      
  }
  
  if (sheet.getLastRow() > 0)   
    sheet.getDataRange().clear();
  	sheet.getRange(1, 1, Acc.length, 6).setValues(Acc);

}
