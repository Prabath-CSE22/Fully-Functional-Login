import React from 'react';

const CartItem = ({ id, product_name, quantity, total }) => {
  return (
    <div className="flex justify-between items-center bg-white border border-gray-200 rounded-lg p-5 mb-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transform transition-all duration-300">
      <div className="flex-1 min-w-0">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-gray-800">{product_name}</h3>
          <div className="flex gap-6 text-gray-600 text-sm">
            <span className="flex items-center gap-1">
              <i className="bx bx-package"></i>
              Quantity: {quantity}
            </span>
            <span className="flex items-center gap-1 font-semibold text-blue-600">
              <i className="bx bx-dollar"></i>
              Total: ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <button
        className="flex items-center justify-center bg-red-100 text-red-600 border-none w-10 h-10 rounded-lg cursor-pointer hover:bg-red-200 hover:text-red-700 transform hover:scale-105 active:scale-95 transition-all duration-200 ml-4"
        aria-label="Remove item"
      >
        <i className="bx bx-trash text-xl"></i>
      </button>
    </div>
  );
};

export default CartItem;