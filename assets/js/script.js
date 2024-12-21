var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}


//Shop page
document.addEventListener("DOMContentLoaded", () => {
    const productPriceElement = document.getElementById("product-price");
    const productImageElement = document.getElementById("product-image");
    const quantityOptions = document.querySelectorAll("input[name='quantity']");
    const buyNowButton = document.getElementById("buy-now-btn");

    const priceMapping = {
      1: "$69.00",
      3: "$177.00",
      6: "$294.00"
    };

    const imageMapping = {
      1: "assets/images/1bottle.png",
      3: "assets/images/3bottle.png",
      6: "assets/images/6bottle.png"
    };

    quantityOptions.forEach(option => {
      option.addEventListener("change", () => {
        const selectedQuantity = option.value;
        productPriceElement.textContent = priceMapping[selectedQuantity];
        productImageElement.src = imageMapping[selectedQuantity];
      });
    });

    buyNowButton.addEventListener("click", () => {
      const selectedQuantity = Array.from(quantityOptions).find(option => option.checked).value;
      const selectedPrice = priceMapping[selectedQuantity];

      // Simulate sending data to a payment gateway
      alert(`Redirecting to payment gateway. Quantity: ${selectedQuantity} bottle(s), Price: ${selectedPrice}`);

      // Example of redirecting to a payment URL (replace with your payment URL)
      window.location.href = `https://yourpaymentgateway.com/checkout?quantity=${selectedQuantity}&price=${selectedPrice}`;
    });
  });