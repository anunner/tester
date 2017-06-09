function person(name){
  var newPerson = {
    name:name,
    distance_traveled:0,
    say_name: function(p1){
      alert(newPerson.name)
    }
  }
  console.log(newPerson)
}
person('ferd')
