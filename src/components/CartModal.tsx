"use client";

import Image from "next/image";

const CartModal = () => {
  const CartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!CartItems ? (
        <div>Card is Empty</div>
      ) : (
        <>
        <h2 className="text-xl">Sepetim</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src={
                  "https://images.pexels.com/photos/11230252/pexels-photo-11230252.jpeg"
                }
                alt=""
                width={72}
                height={72}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-500 rounded-sm">10 TL</div>
                  </div>

                  {/* DESC */}
                  <div className="text-sm text-gray-500">Mevcut</div>
                </div>

                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">QTY.2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>Toplam</span>
              <span>50 TL</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4" >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, a.
            </p>
            <div className="flex justify-between text-sm">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Card</button>
                <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
