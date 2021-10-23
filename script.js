function reSum()
{
  var num1 = parseInt(document.getElementById("Num1").value);
  var num2 = parseInt(document.getElementById("Num2").value);

  if( !!num1 == true && !!num2 == true ){
    let result =  document.getElementById("Sum").value = num1 + num2; 
  }else {
     let result =  document.getElementById("Sum").value = ""
  }

}