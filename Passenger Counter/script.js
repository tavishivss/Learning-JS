let count=0;
function add()
{             
 count=count+1;
 document.getElementById('count-el').innerHTML=count;
 return(count);
}

function reset()
{
 count=0;
 document.getElementById('count-el').innerHTML=count
 return(count);
}

function sub()
{
 count=count-1;
 document.getElementById('count-el').innerHTML=count
 return(count);
}

function save() {
    var saveEl=document.getElementById("save-el");
    let countStr = count + " - ";
    
    saveEl.innerText += countStr;
  
    console.log(count);
}