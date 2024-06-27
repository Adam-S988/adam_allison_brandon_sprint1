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

// Function showing the popup message.
function showPopup(message) {
  const popup = document.createElement('div');
  popup.id = 'order-popup';
  popup.innerText = message;
  document.body.appendChild(popup);

  // Removing the popup after 5 seconds.
  setTimeout(() => {
    popup.remove();
  }, 5000);
}

// EventListener attached to the "Complete Order" button on order.html to show the order was completed.
document.addEventListener('DOMContentLoaded', function () {
  const orderForm = document.querySelector('form');
  if (orderForm && window.location.pathname.endsWith('order.html')) {
    orderForm.addEventListener('submit', function (event) {
      event.preventDefault();
      displayOrder();

      // A pop-up showing saying you order was completed after 1 seconds.
      setTimeout(() => {
        showPopup('Your order has been completed!');
      }, 1000);
    });
  }

  // Showing the customer order summary on order.html page.
  if (
    document.getElementById('order-summary') &&
    window.location.pathname.endsWith('order.html')
  ) {
    displayOrder();
  }
});
