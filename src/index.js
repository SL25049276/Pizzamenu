
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Header({ isOpen }) {
  return (
    <header>
      <h1 style={{ color: "orange", fontSize: 48, textTransform: "uppercase" }}>
        Lewin's Pizza Co.
      </h1>
      {isOpen && <p>Authentic Italian Cuisine</p>}
    </header>
  );
}

function Menu() {
  const pizzas = [
    {
      image: "focaccia.jpg",
      name: "Focaccia",
      description: "Fresh focaccia bread",
      price: "$10"
    },
    {
      image: "funghi.jpg",
      name: "Funghi",
      description: "Mushrooms and Mozzarella",
      price: "$12"
    },
    {
      image: "margherita.jpg",
      name: "Margherita",
      description: "Tomato, Mozzarella and Basil",
      price: "$12"
    },
    {
      image: "prosciutto.jpg",
      name: "Prosciutto",
      description: "Tomato, Mozzarella and Prosciutto",
      price: "$14"
    },
    {
      image: "salamino.jpg",
      name: "Salamino",
      description: "Tomato, Mozzarella and Salami",
      price: "$14"
    },
    {
      image: "spinaci.jpg",
      name: "Spinaci",
      description: "Tomato, Mozzarella, Spinach and Ricotta cheese",
      price: "$10"
    }
  ];

  return (
    <main>
      <section className="menu">
        <h2>Our Menu</h2>
        <div className="pizzas">
          {pizzas.map((pizza, index) => (
            <Pizza
              key={index}
              image={pizza.image}
              name={pizza.name}
              description={pizza.description}
              price={pizza.price}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

function Pizza({ image, name, description, price }) {
  return (
    <article className="pizza">
      <img src={"pizzas/" + image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </article>
  );
}

function Order() {
  return (
    <div className="order">
      <p>We're currently open</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Footer({ isOpen }) {
  return (
    <footer className="footer">
      {isOpen ? (
        <Order />
      ) : (
        <p>Sorry, we're closed</p>
      )}
    </footer>
  );
}

function App() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;

  return (
    <div className="container">
      <Header isOpen={isOpen} />
      <Menu />
      <Footer isOpen={isOpen} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

