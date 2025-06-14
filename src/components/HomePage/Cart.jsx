import {useEffect, useState} from 'react'

export default function Cart({cart}){

    // const [cartQuantity, setCartQuantity] = useState(0)
    useEffect(() => {
        console.log(cart)
    }, [cart])

    return(
        <div className='w-[300px] flex-shrink-0 h-fit rounded-[18px] px-[16px] py-[24px] bg-white'>
            <div className='flex justify-between align-center'>
                <h3>Корзина</h3>
                <p className='w-[41px] h-[20px] flex items-center justify-center rounded-[6px] text-[12px] bg-[#F2F2F3]'>{cart.reduce((total, item) => total + item.quantity, 0)}</p>
            </div>
            <div className={'mt-[12px]'}>
                { cart.length !== 0 ? cart.map((item, index) => (
                    <div key={index} className='border-y-solid border-y-[1px] border-y-[#B1B1B1] flex justify-between items-center h-[84px]  w-full'>
                        <div className='flex gap-[10px]'>
                            <img className='w-[64px] h-[52px] rounded-[8px]' src={item.image} alt=""/>
                            <div className={'text-[12px]'}>
                                <h4 className=''>{item.name}</h4>
                                <p className='text-[#B1B1B1]'>{item.weight}</p>
                                <p className=''>{item.price}</p>
                            </div>
                        </div>

                        <div className='rounded-[12px] px-[12px] py-[9px] flex justify-between align-center w-[84px] h-[40px] bg-[#F2F2F3]'>
                            <button >-</button>
                            <p>{item.quantity}</p>
                            <button >+</button>
                        </div>
                    </div>
                )) : (<div className='text-gray-400'>Empty</div>) }
                <div className={'flex justify-between items-center mt-[16px]'}>
                    <p>Итого</p>
                    <p>{cart.reduce((total, item) => total + item.price, 0).toFixed(2)}$</p>
                </div>
                <button className={'w-full h-[40px] text-white rounded-[12px] mt-[24px] bg-[#FF7020]'}>Place order</button>
                <p className={'mt-[12px] text-[12px]'}>Free delivery</p>
            </div>
        </div>
    )
}