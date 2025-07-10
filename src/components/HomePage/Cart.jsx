import { useEffect } from 'react';

export default function Cart({ setCart }) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    const updateQuantity = (index, delta) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity += delta;

        if (updatedCart[index].quantity <= 0) {
            updatedCart.splice(index, 1);
        }

        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    const clearCart = () => {
        localStorage.removeItem('cart');
        setCart([]);
    };

    return (
        <div className="w-[300px] flex-shrink-0 h-fit rounded-[18px] px-[16px] py-[24px] bg-white max-[900px]:w-full">
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">Корзина</h3>
                <div className="flex items-center gap-3">
                    <p className="w-[41px] h-[20px] flex items-center justify-center rounded-[6px] text-[12px] bg-[#F2F2F3]">
                        {cart.reduce((total, item) => total + item.quantity, 0)}
                    </p>
                    <button
                        onClick={clearCart}
                        className="text-sm px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
                        title="Очистить корзину"
                    >
                        Clear
                    </button>
                </div>
            </div>

            <div className="mt-[12px]">
                {cart.length !== 0 ? (
                    cart.map((item, index) => (
                        <div
                            key={index}
                            className="border-y border-[#B1B1B1] flex justify-between items-center h-[84px] w-full"
                        >
                            <div className="flex gap-[10px]">
                                <img
                                    className="w-[64px] h-[52px] rounded-[8px]"
                                    src={item.image}
                                    alt=""
                                />
                                <div className="text-[12px]">
                                    <h4>{item.name}</h4>
                                    <p className="text-[#B1B1B1]">{item.weight}</p>
                                    <p>{item.price}</p>
                                </div>
                            </div>

                            <div className="rounded-[12px] px-[12px] py-[9px] flex justify-between items-center w-[84px] h-[40px] bg-[#F2F2F3]">
                                <button onClick={() => updateQuantity(index, -1)}>-</button>
                                <p>{item.quantity}</p>
                                <button onClick={() => updateQuantity(index, 1)}>+</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-gray-400">Empty</div>
                )}

                <div className="flex justify-between items-center mt-[16px] font-semibold">
                    <p>Итого</p>
                    <p>
                        {cart
                            .reduce((total, item) => total + item.price * item.quantity, 0)
                            .toFixed(2)}
                        $
                    </p>
                </div>

                <button className="w-full h-[40px] text-white rounded-[12px] mt-[24px] bg-[#FF7020] hover:bg-[#e06512] transition-colors">
                    Place order
                </button>
                <p className="mt-[12px] text-[12px] text-center text-gray-500">Free delivery</p>
            </div>
        </div>

    );
}
