import { useEffect } from "react";

export default function Products({ products, selectedFilter, setCart }) {
    function addToCart(item) {
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        if (!existingCart.find((cartItem) => cartItem.id === item.id)) {
            const updatedCart = [...existingCart, item];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            setCart(updatedCart);
        }
    }

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    return (
        <div className="w-full">
            <h2 className="mb-6 font-semibold text-[40px]/[120%]">{selectedFilter}</h2>

            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-[30px]">
                {products && products.length > 0 ? (
                    products.map((item, index) => {
                        const isInCart = storedCart.some((cartItem) => cartItem.id === item.id);

                        return (
                            <div
                                key={index}
                                className="flex flex-col justify-between rounded-[18px] h-[411px] bg-white p-[12px]"
                            >
                                <img className="w-full h-[220px] object-cover rounded-md" src={item.image} alt="" />
                                <div className="mt-3">
                                    <p className="text-[24px] font-semibold">{item.price}</p>
                                    <h4 className="text-[14px]">{item.name}</h4>
                                    <p className="text-[#B1B1B1] font-semibold text-[16px]">{item.weight}</p>
                                </div>

                                <button
                                    disabled={isInCart}
                                    onClick={() => addToCart(item)}
                                    className={`rounded-[12px] cursor-pointer w-full h-[40px] mt-4 transition-colors ${
                                        isInCart
                                            ? "bg-[rgb(255,112,45)] text-white cursor-not-allowed"
                                            : "bg-[#F2F2F3] hover:bg-[#e0e0e2]"
                                    }`}
                                >
                                    {isInCart ? "Added" : "Add"}
                                </button>
                            </div>
                        );
                    })
                ) : (
                    <div className="col-span-full text-center text-gray-500">There's nothing here yet</div>
                )}
            </div>
        </div>
    );
}
