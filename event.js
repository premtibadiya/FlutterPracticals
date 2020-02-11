function test()
{
    var x=document.getElementById("name");
    x.value=x.value.toUpperCase()
 
}
function change()
{
    var x=document.getElementById("id");
    alert("id is  "+x.value)
}
function B1() {
    prefer = document.forms[0].browser.value;
    alert("You prefer browsing internet with " + prefer);
 
  }