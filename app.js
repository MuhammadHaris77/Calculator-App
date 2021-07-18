




 var a = document.getElementById('getValue');
  function cal(num){
      a.value += num 
  }

  function result(){
      a.value = eval(a.value)
      if( a.value == "++" ){
          alert("something wrong calculate pattern ")
      }
      else{
          "sb theak ha"
      }
  }
  function reset(){
      a.value = ""
  }