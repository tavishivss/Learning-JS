function billingFunction()
{
 var same = document.getElementById('same');
 var ship_name = document.getElementById('shippingName');
 var ship_zip = document.getElementById('shippingZip');
 var bill_name = document.getElementById('billingName');
 var bill_zip = document.getElementById('billingZip');
 if(same.checked)
 {
 bill_name.setAttribute('value',ship_name.value);
 bill_zip.setAttribute('value',ship_zip.value);
 }
 else
 {
 bill_name.removeAttribute('value');
 bill_zip.removeAttribute('value');
 }
}