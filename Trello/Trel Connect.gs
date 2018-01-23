function retrieveCardsByListsFromTrello( lists ) {
  
  var cards = retrieveAllCardsFromTrello();
  return groupCardsByLists( cards, lists );
}

function groupListsAndCards() {

  var trelloUrlCards = "https://trello.com/1/boards/" + trelloBoardId + "/cards?filter=visible&key=" + trelloAppKey + "&token=" + trelloAuthToken;
  var trelloUrlLists = "https://trello.com/1/boards/" + trelloBoardId + "/lists?filter=open&key=" + trelloAppKey + "&token=" + trelloAuthToken;
  var responseCards = UrlFetchApp.fetch(trelloUrlCards);
  var responseLists = UrlFetchApp.fetch(trelloUrlLists);
  var cards = JSON.parse(responseCards.getContentText());
  var lists = JSON.parse(responseLists.getContentText());
  var all = []
  
  for( var i = 0; i < cards.length; i++ ) {
    for( var j = 0; j < lists.length; j++ ) {
      if( cards[i].idList == lists[j].id ) {
        all.push({ 
          card: cards[i],
          list: lists[j] 
        })
      }
    }
  } 
  
  return all
}
