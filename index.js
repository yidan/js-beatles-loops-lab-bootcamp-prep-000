
function theBeatlesPlay(musicians,instruments){
  var array = [];
  for (let i=0; i<musicians.length;i++){

      let s =musicians[i] + " plays " +  instruments[i]
      array.push(s)

  }
  return array
}

function johnLennonFacts(array){
  
  for (let i=0;i<array.length;i++){
    array[i] += "!!!"
  }

  return array
}
