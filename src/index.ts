//----------
// enums 101
//----------

enum Priority{
  Lowest=0,
  Low=1,
  Medium=2,
  High=3,
  Urgent=4
}


function addTicket(details: string, priority: Priority){
  if(priority == Priority.Lowest){
      // doing something
  }
  if(priority == 1){
       // doing something
  }
  if(priority == 2){
       // doing something
  }
  if(priority == 3){
       // doing something
  }
  if(priority == 4){
       // doing something
  }
}

addTicket('fix computer', Priority.Urgent)
