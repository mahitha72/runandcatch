var count=0;
var checked=false;
function mOver(obj) {
  if(checked==false){
  count=count+1;
  document.getElementById("demo").innerHTML=count;
  checked=true;

  }
  else{
    alert("touch the mango");
  }
}  
function Over(obj){
checked=false;
}
function myfun(){
count=0;
document.getElementById("demo").innerHTML=count;
checked=false;
}