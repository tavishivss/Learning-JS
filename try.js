function nic(){
  if(nickname.checked)
  {
      nn.style.display="inline";
      nyc.setAttribute('required',true);
  }
  else
  {
      nyc.removeAttribute('required');
      nn.style.display="none";
      
  }
}