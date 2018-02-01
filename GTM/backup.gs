function run_script () {
  
  var account = accounts()
  var scriptProperties = PropertiesService.getScriptProperties()
  var today = new Date().toDateString();
  var iterate = 0;
  
  if(scriptProperties.getProperty(iterate) < account.length) {
    iterate = scriptProperties.getProperty('iterate')
  } else {
    scriptProperties.deleteProperty('iterate')
  }
  for(iterate; account.length > iterate; iterate++) {
    var name_file = 'mgcomstat1  ' + today
    gtm_container( name_file, account[iterate] )
    scriptProperties.setProperty('all', account.length)
    scriptProperties.setProperty('iterate', iterate)
  }
}

function accounts() {
  
  var accounts = GTM.Accounts.list()
  
  var val = [];
  
  if( accounts.account && accounts.account.length ) {
    
    for( var i = 0; i < accounts.account.length; i++ ) {
      
      var acount = accounts.account[i];
      var containers = GTM.Accounts.Containers.list( acount.path )
      if ( containers.container && containers.container.length ) {
        
        for(var s = 0; s < containers.container.length; s++ ) {
          var container = containers.container[s]
          val.push({name: container.name, containerId: container.publicId, acc: 'accounts/' + acount.accountId + '/containers/' + container.containerId}) 
        }
        
      }
      Utilities.sleep(500)
    }
    return val
  }
}

function gtm_container ( name_file, address_container ) {
  

  try {
    var gtm_contain = GTM.Accounts.Containers.Versions.live( address_container.acc )
  } catch (e) {return;}
  var data = JSON.parse( gtm_contain );
  delete data.builtInVariable
  
  file_saver( name_file, JSON.stringify(data), address_container )
}

function file_saver( name_files, content_files, address_container ) { //name_files - нзвание контейнера, content_files - содержание файла
  
  if( name_files.length != -1 && content_files.length != -1 && address_container.length != -1 ) {
    var file = getOrCreateIterationSpreadsheet( name_files + ".json", content_files, address_container )
  }
}

function getOrCreateIterationSpreadsheet( driveApp, content_files, address_container ) {

  var files = DriveApp.searchFiles( "title contains '"+ driveApp +"'" )
  
  while ( files.hasNext() ) {
   var file = files.next();
   if( file.getName() == driveApp ) {
     var file = DriveApp.getFileById( file.getId() )
     var test = DriveApp.getFileById( file.getId() )
     return file.setContent(test.getAs( 'application/json' ).getDataAsString() + "\n\n" + address_container.name + " " + address_container.containerId + "\n" + content_files)/*.getAs( 'application/json' ).getDataAsString()*/;
    }
  } 
  
  return DriveApp.createFile( driveApp, address_container.name + " " + address_container.containerId + "\n" + content_files )

}
