var num=[]

function numb()
{
  document.getElementById('add').innerHTML=num;
}

function avg()
{
  if(num.length==0)
  {
    document.write("oops empty!!");
  }
  else 
  {
    sum=0;
    for(i=0; i<num.length; i++)
    {
      sum=sum+num[i];
    }
    avg=sum/num.length;
    document.getElementById('add').innerHTML=avg;
  }

}

