// Function that will allow the customer order to be calculated.
// Assigns on order item to a value (how much it costs)
function calculateOrder() {
  const menuItems = [
    { id: 'omelette', name: 'Omelette', price: 11.99 },
    { id: 'waffles', name: 'Waffles', price: 8.99 },
    { id: 'toast', name: 'French Toast', price: 6.99 },
    { id: 'breakfast', name: 'All-American Breakfast', price: 15.99 },
    { id: 'pancakes', name: 'Pancakes', price: 5.99 },
    { id: 'burger', name: 'Burger and Fries', price: 18.99 },
    { id: 'chicken', name: 'Fried Chicken', price: 9.99 },
    { id: 'onion', name: 'Onion Rings', price: 5.99 },
    { id: 'delight', name: 'HashBrown Delight', price: 13.99 },
    { id: 'sandwich', name: 'Club Sandwich', price: 8.99 },
    { id: 'meatloaf', name: 'Meatloaf', price: 10.99 },
    { id: 'chowder', name: 'Clam Chowder', price: 13.99 },
    { id: 'tacos', name: 'Disco Tacos', price: 10.99 },
    { id: 'chips', name: 'Potato Chips', price: 3.99 },
    { id: 'pies', name: 'Homemade Pies', price: 6.99 },
    { id: 'cake', name: 'Slice of Cake', price: 4.99 },
    { id: 'brownie', name: 'Brownie Explosion', price: 6.99 },
    { id: 'sundae', name: 'Fudge Sundae', price: 5.99 },
    { id: 'coffee', name: 'Coffee', price: 2.99 },
    { id: 'milkshake', name: 'Neon Milkshake', price: 4.99 },
    { id: 'mocktail', name: "Gary's Mocktails", price: 7.99 },
    { id: 'soda', name: 'Soft Drinks', price: 1.99 },
    { id: 'juice', name: 'Juice', price: 0.99 },
  ];

  let total = 0;
  let orderDetails = '';

  // Calculates how much the order will be total by take the item price and multiplying it by the quantity.
  menuItems.forEach((item) => {
    const quantity = parseInt(document.getElementById(item.id).value, 10);
    if (quantity > 0) {
      const itemTotal = item.price * quantity;
      total += itemTotal;
      orderDetails += `${item.name}: ${quantity} x $${item.price.toFixed(
        2
      )} = $${itemTotal.toFixed(2)}\n`;
    }
  });

  // Stores the customers order in local storage.
  localStorage.setItem('orderDetails', orderDetails);
  localStorage.setItem('totalAmount', total.toFixed(2));
}

// Function showing the popup message.  and removing it after 5 seconds.
function showPopup(message) {
  const popup = document.createElement('div');
  popup.id = 'order-popup';
  popup.innerText = message;
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 5000);
}

// Function that will display the order details and total amount on order.html page.
function displayOrder() {
  const orderDetails = localStorage.getItem('orderDetails');
  const totalAmount = localStorage.getItem('totalAmount');

  if (orderDetails && totalAmount) {
    document.getElementById(
      'order-summary'
    ).textContent = `Order Summary:\n\n${orderDetails}\nTotal Amount: $${totalAmount}`;
  }
}

// Getting the payment options information and giving eventListener.
document.addEventListener('DOMContentLoaded', function () {
  const creditCardOption = document.getElementById('credit-card');
  const debitCardOption = document.getElementById('debit-card');
  const cashOption = document.getElementById('cash');
  const creditCardDetails = document.getElementById('credit-card-info');

  creditCardOption.addEventListener('change', toggleCreditCardInfo);
  debitCardOption.addEventListener('change', toggleCreditCardInfo);
  cashOption.addEventListener('change', toggleCreditCardInfo);

  // Function to show or hide the created div depending on whether or not the credit card option was picked.
  function toggleCreditCardInfo() {
    if (creditCardOption.checked) {
      creditCardDetails.style.display = 'block';
    } else {
      creditCardDetails.style.display = 'none';
    }
  }

  // Function to validate the credit card information so that errors will occur if inout improperly.
  function validateCreditCardInfo() {
    const cardNumber = document.getElementById('card-number').value;
    const cardExpiration = document.getElementById('card-expiration').value;
    const cardCVV = document.getElementById('card-cvv').value;
    const cardNumberPattern = /^[0-9]{16}$/;
    const cardExpirationPattern = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    const cardCVVPattern = /^[0-9]{3}$/;

    if (!cardNumberPattern.test(cardNumber)) {
      alert('Error, input must be a 16-digit card number.');
      return false;
    }

    if (!cardExpirationPattern.test(cardExpiration)) {
      alert('Error, invalid expiration date. Must be MM/YY format.');
      return false;
    }

    if (!cardCVVPattern.test(cardCVV)) {
      alert('Error, invalid CVV. Must be a 3-digit CVV.');
      return false;
    }

    return true;
  }

  // Function to validate entire form to that errors will occur if required fields aren't filled before submitting.
  function validateForm() {
    const fullName = document.getElementById('full-name').value.trim();
    const phoneNumber = document.getElementById('phone-number').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();

    if (!fullName) {
      alert('Enter your full name.');
      return false;
    }

    if (!phoneNumber) {
      alert('Error, enter your phone number.');
      return false;
    }

    if (!email) {
      alert('Error, enter your email.');
      return false;
    }

    if (!address) {
      alert('Error, enter your address.');
      return false;
    }

    if (creditCardOption.checked && !validateCreditCardInfo()) {
      return false;
    }

    return true;
  }

  // Show the completed order popup or the error pop up if required fields were not filled.
  const orderForm = document.querySelector('form');
  orderForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
      displayOrder();
      setTimeout(() => {
        showPopup('Your order has been completed!');
      }, 1000);
    } else {
      showPopup('Error, Fill out all required fields.');
    }
  });
});

displayOrder();
