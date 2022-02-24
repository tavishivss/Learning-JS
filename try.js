var fruits=["apple","banana","papaya"]
function loadfruits()
{
    document.getElementById('fruits').innerHTML=fruits;

}

function addfruits()
{
  var fruit=prompt("enter fruit name: ");
  fruits.push(fruit);
  document.getElementById('fruits').innerHTML=fruits;
  
}