import { useState } from "react";
import DessertsList from "./components/DessertsList";
import CartList from "./components/CartList";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    const itemExist = cart.find((i) => i.name === item.name);
    if (itemExist) {
      const newCart = cart.map((i) =>
        i.name === itemExist.name ? { ...i, quantity: i.quantity + 1 } : i
      );
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleDeleteFromCart = (item) => {
    const itemExist = cart.find((i) => i.name === item.name);
    if (itemExist.quantity > 1) {
      const newCart = cart.map((i) =>
        i.name === itemExist.name ? { ...i, quantity: i.quantity - 1 } : i
      );
      setCart(newCart);
    } else {
      const newCart = cart.filter((i) => i.name !== item.name);
      setCart(newCart);
    }
  };

  return (
    <main className="grid grid-cols-5 h-dvh py-32 container mx-auto gap-10">
      <section className="col-span-3 flex flex-col">
        <h1 className="text-colors-rose900 mb-10 text-6xl font-bold">
          Desserts
        </h1>
        <DessertsList
          cart={cart}
          handleDeleteFromCart={handleDeleteFromCart}
          handleAddToCart={handleAddToCart}
        />
      </section>

      <section className="col-span-2 ">
        <div className="bg-white flex flex-col gap-5 px-10 py-10 border rounded-lg ">
          <h2 className="text-3xl text-colors-red font-bold mb-10">
            Your Cart (0)
          </h2>

          <CartList
            cart={cart}
            setCart={setCart}
            handleDeleteFromCart={handleDeleteFromCart}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
