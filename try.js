var num=[10,20,30,40,50,60]

function numb()
{
  document.getElementById('add').innerHTML=num;
}

function avg()
{
  sum=0;
  for(i=0; i<num.length; i++)
  {
    sum=sum+num[i];
  }
  avg=sum/num.length;
  document.getElementById('add').innerHTML=avg;

}
