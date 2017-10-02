function Accounts() {
  
  var accounts = tagmanager.Accounts.list()
  var Acc = [['NameAcc','NameCont','ContainerID']]; //Headers array
  
  var ss = SpreadsheetApp.getActiveSheet()
  ss.clear()
 
  if( accounts.account && accounts.account.length )
  {
    
    for( var i = 0; i < accounts.account.length; i++ ) 
    {
      
      var acount = accounts.account[i];
      var containers = tagmanager.Accounts.Containers.list( acount.path )
      
      if ( containers.container && containers.container.length ) {
        
        for(var s = 0; s < containers.container.length; s++ )
        { 
          var container = containers.container[s]
          var val = [];
          val = [acount.name ,container.name, container.publicId]
          Acc.push(val)
        }
        
      }  
    }
   
  }
  
  if (ss.getLastRow() > 0)   
  ss.getDataRange().clear();
  ss.getRange(1, 1, Acc.length, 3).setValues(Acc);
  
}
