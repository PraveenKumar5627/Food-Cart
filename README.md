🍔 Food Cart App

A simple and responsive Food Cart App built using React.js. The application allows users to browse food items, add items to the cart, view cart details, and navigate between different pages.

🚀 Features

- 🍕 Display available food items
- 🛒 Add food items to the cart
- ➕ Increase item quantity
- ➖ Decrease item quantity
- 🗑️ Remove items from the cart
- 💰 Calculate the total cart price
- 🔄 Manage cart data using React Context API
- 🧭 Navigate between pages using React Router DOM
- 📱 Responsive user interface

🛠️ Technologies Used

- React.js
- JavaScript
- HTML
- CSS
- React Router DOM
- React Context API
- Vite

📂 Project Structure

src/
├── components/
├── pages/
├── context/
├── App.jsx
├── main.jsx
└── index.css

⚙️ Installation

Clone the repository:

git clone <your-repository-url>

Go to the project folder:

cd food-cart-app

Install the required dependencies:

npm install

Start the development server:

npm run dev

Then open the local URL shown in the terminal.

🧠 React Concepts Used

React Router DOM

React Router DOM is used to navigate between different pages without reloading the entire application.

Example pages can include:

- Home
- Food Menu
- Cart
- About

React Context API

The Context API is used to share cart information between components.

For example:

Food Item
   ↓
Add to Cart
   ↓
Cart Context
   ↓
Cart Page

This avoids passing cart data through many components using props.

🛒 Cart Functionality

The application allows users to:

1. Select a food item.
2. Add it to the cart.
3. Increase or decrease the quantity.
4. Remove an item.
5. View the total price.

🎯 Purpose

The purpose of this project is to practice React concepts such as:

- Components
- Props
- useState
- useContext
- React Router DOM
- Event handling
- Conditional rendering
- Array methods
- State management

🔮 Future Improvements

- User authentication
- Search and filter functionality
- Food categories
- Online payment integration
- Order history
- Backend and database integration
- Admin dashboard

👨‍💻 Author

Praveen Kumar.M

📄 License

This project is created for learning and educational purposes.
