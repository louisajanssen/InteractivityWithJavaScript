/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction() {
    var Name = document.getElementById("shippingName").value;
  var Zipcode = document.getElementById("shippingZip").value;

  if (document.getElementById('same').checked==true)
  {
    document.getElementById('billingName').value = Name;
    document.getElementById('billingZip').value = Zipcode;
  }
  else {
    document.getElementById('billingName').value= null;
    document.getElementById('billingZip').value= null;
  }
}