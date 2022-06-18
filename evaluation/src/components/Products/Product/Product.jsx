import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = ({ id, name, description }) => {
  const {
    IDcount,
    addCartItem,
    CartRemove,
    CountUpdate,
  } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const handleUpdate = async (newCount) => {
    await CountUpdate(id, newCount);
    setCount(newCount);
  };

  const handleDelete = async () => {
    await CartRemove(id);
    setCount(0);
  };

  useEffect(() => {
    if (id) {
      setCount(IDcount(id));
    }
  }, [id, IDcount]);

  return (
    <div
     
      style={{
        border: "1px solid black",
        borderRadius: "16px",
        padding: "20px",
        minWidth: "200px",
      }}
    >
      <h3 >{name}</h3>
      <h6 >{description}</h6>
      {count === 0 ? (
        <button
          
          onClick={() => {
            addCartItem({
              productId: id,
              count: 1,
            });
          }}
        >
          Add To Cart
        </button>
      ) : (
        <div>
          <button
           
            onClick={() => handleUpdate(count + 1)}
          >
            +
          </button>
          <span >{count}</span>
          <button
            
            onClick={() => handleUpdate(count - 1)}
          >
            -
          </button>
          <button
            
            onClick={handleDelete}
          >
            Remove from cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
