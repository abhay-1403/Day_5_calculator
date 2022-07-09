function disp(val){

    document.getElementById("result").value+=val;
  }
  
  function clr(){
      document.getElementById("result").value="";
  }
  
  function ansval(){
      document.getElementById("result").value=eval(document.getElementById("result").value);
  }