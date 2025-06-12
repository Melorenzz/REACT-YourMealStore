import {useState} from "react";

export default function Products({products, selectedFilter, setCart}) {
    const [disabledItems, setDisabledItems] = useState([]);
    function addToCart(item) {
        setCart(prevCart => [...prevCart, { id: item.id, image: item.image, price: item.price, name: item.name, weight: item.weight, quantity: item.quantity }]);
        setDisabledItems(prev => [...prev, item.name]);
    }
    return(
        <div className='flex flex-wrap w-full gap-[30px] relative'>
            <h2 className='absolute top-[-60px] font-[600] text-[40px]/[120%]'>{selectedFilter}</h2>
            {products ? products.map((item, index) => (
            <div key={index} className='max-w-[300px] flex flex-col justify-between w-full rounded-[18px] h-[411px] bg-white p-[12px]'>
                <img className='w-[100%] h-[220px]' src={item.image} alt=""/>
                <div>
                    <p className='text-[24px] font-600'>{item.price}</p>
                    <h4 className='text-[14px]'>{item.name}</h4>
                    <p className='text-[#B1B1B1] font-600 text-[16px]'>{item.weight}</p>
                </div>

                <button disabled={disabledItems.includes(item.name)} onClick={() => {addToCart(item); }} className='rounded-[12px] bg-[#F2F2F3] w-full h-[40px]'>{disabledItems.includes(item.name) ? ('Added') : ('Add')}</button>

            </div>
            ))
            : <div className='m-auto'>There's nothing here yet</div>
            }
        </div>

    )
}