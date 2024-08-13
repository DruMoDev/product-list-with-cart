/* eslint-disable react/prop-types */
import carbonNeutral from "../images/icon-carbon-neutral.svg";
import deleteIcon from "../images/icon-remove-item.svg";
import addToCartIcon from "../images/icon-add-to-cart.svg";
import plusIcon from "../images/icon-increment-quantity.svg";
import lessIcon from "../images/icon-decrement-quantity.svg";

const CartList = ({ cart, setCart, handleAddToCart, handleDeleteFromCart }) => {
  const deleteItemFromCart = (item) => {
    const newCart = cart.filter((i) => i.name !== item.name);
    setCart(newCart);
  };

  return (
    <>
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 w-full relative">
                  <img src={item.image.thumbnail} alt={item.name} />
                  <div className="">
                    <h3 className="text-lg text-colors-rose600 font-semibold">
                      {item.name}
                    </h3>
                    <div className="flex gap-3 text-base text-colors-rose400 font-semibold">
                      <div className="flex items-center justify-center gap-2">
                        <button onClick={() => handleDeleteFromCart(item)}>
                          <img
                            src={lessIcon}
                            alt="add to cart"
                            className="border px-1.5 py-2.5 rounded-full bg-colors-rose300 hover:bg-colors-rose500 transition-all ease-in"
                          />
                        </button>
                        <p className="text-base font-bold text-colors-rose500">
                          {cart.find((i) => i.name === item.name).quantity}
                        </p>
                        <button onClick={() => handleAddToCart(item)}>
                          <img
                            src={plusIcon}
                            alt="add to cart"
                            className="border px-2 py-2 rounded-full bg-colors-rose300 hover:bg-colors-rose500 transition-all ease-in"
                          />
                        </button>
                      </div>
                      <p className="text-lg">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <p className="text-2xl text-colors-red font-semibold dolar">
                        ${item.price.toFixed(2) * item.quantity}
                      </p>
                    </div>
                  </div>
                  <button onClick={() => deleteItemFromCart(item)}>
                    <img
                      src={deleteIcon}
                      alt="delete"
                      className="size-5 right-3 top-3 absolute"
                    />
                  </button>
                </div>
              </div>
              <hr className="my-5" />
            </div>
          ))}
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-xl text-colors-rose600 font-semibold">
              Order Total
            </h3>
            <p className="text-4xl  text-colors-red font-bold dolar">
              ${cart.reduce((a, c) => a + c.price * c.quantity, 0).toFixed(2)}
            </p>
          </div>
          <div className="flex gap-5 items-center justify-center mx-auto bg-colors-rose100 px-24 py-4 rounded-lg">
            <img src={carbonNeutral} alt="carbon neutral" />
            <p>
              This is a <strong>carbon-neutral</strong> delivery
            </p>
          </div>

          <button className="bg-colors-red text-white font-semibold text-lg py-3 rounded-full hover:bg-opacity-90 transition-all mt-5">
            Confirm Order
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 mb-5">
          <img
            src={addToCartIcon}
            alt={"Add to cart icon"}
            className="h-[300px]"
          />
          <h3 className="text-lg text-slate-700 font-semibold">
            Your added items will be here.
          </h3>
        </div>
      )}
    </>
  );
};
export default CartList;
