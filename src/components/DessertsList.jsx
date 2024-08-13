/* eslint-disable react/prop-types */
import data from "../../data.json";
import addToCartIcon from "../images/icon-add-to-cart.svg";
import plusIcon from "../images/icon-increment-quantity.svg";
import lessIcon from "../images/icon-decrement-quantity.svg";

const DessertsList = ({
  cart,
  handleAddToCart,
  handleDeleteFromCart,
}) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {data.map((item, index) => {
        const itemInCart = cart.some((i) => i.name === item.name);

        return (
          <div key={index}>
            <div className="relative mb-8 ">
              <img src={item.image.desktop} alt={item.name} />
              {itemInCart ? (
                <div className="flex w-[200px] px-7 h-[50px] rounded-full border border-colors-rose400 text-white bg-colors-red font-semibold absolute -bottom-5 right-[50px] items-center justify-between">
                  <button onClick={() => handleDeleteFromCart(item)}>
                    <img
                      src={lessIcon}
                      alt="add to cart"
                      className="border px-1.5 py-2.5 rounded-full  hover:bg-black stroke-current hover:border-colors-red transition-all ease-in"
                    />
                  </button>
                  {cart.find((i) => i.name === item.name).quantity}
                  <button onClick={() => handleAddToCart(item)}>
                    <img
                      src={plusIcon}
                      alt="add to cart"
                      className="border px-2 py-2 rounded-full  hover:bg-black stroke-current hover:border-colors-red transition-all ease-in"
                    />
                  </button>
                </div>
              ) : (
                <button
                  className="flex gap-2 w-[200px] px-7 h-[50px] rounded-full border border-colors-rose400 text-colors-rose900 bg-white font-semibold absolute -bottom-5 right-[50px] items-center justify-center hover:text-colors-red transition-all"
                  onClick={() => handleAddToCart(item)}>
                  <img src={addToCartIcon} alt="add to cart" />
                  Add to Cart
                </button>
              )}
            </div>
            <p className="text-base text-colors-rose400 font-semibold tracking-tighter">
              {item.category}
            </p>
            <h2 className="text-lg text-colors-rose600 font-semibold tracking-tighter">
              {item.name}
            </h2>
            <p className="text-lg text-colors-red font-semibold tracking-tighter dolar">
              ${item.price.toFixed(2)}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default DessertsList;
