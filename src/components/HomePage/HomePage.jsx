import burger from '../../images/burger.png'
import Filter from './Filter.jsx'
import Cart from './Cart.jsx'
import Products from './Products.jsx'
import { useState, useMemo } from 'react'
export default function HomePage(){
    const assortment = useMemo(() => ({
        burgers: [
            { image: '', price: '689₽', name: 'Мясная бомба', weight: '520г' },
            { image: '', price: '550₽', name: 'Супер сырный', weight: '512г' },
            { image: '', price: '639₽', name: 'Сытный', weight: '580г' },
            { image: '', price: '480₽', name: 'Тяжелый удар', weight: '470г' },
            { image: '', price: '450₽', name: 'Вечная классика', weight: '450г' },
            { image: '', price: '560₽', name: 'Итальянский', weight: '510г' },
        ],
        hotDogs: [
            { image: '', price: '290₽', name: 'Домашний хот-дог', weight: '250г' },
            { image: '', price: '239₽', name: 'Жгучий хот-дог', weight: '245г' },
            { image: '', price: '220₽', name: 'Классический хот-дог', weight: '215г' },
        ]
    }), []);

    const [products, setProducts] = useState(assortment.burgers)
    return (
        <>
            <div className="container">
                <div className="mt-[50px]  pb-[250px]  flex items-center justify-center">
                    <img src={burger} alt=""/>
                    <div>
                        <p className={'text-[50px]/[120%] max-w-[437px] font-[800] text-white'}>Только самые <span className={'text-[#FF5C00]'}>сочные бургеры!</span> </p>
                        <p className={'text-[16px] text-white font-[600] mt-[52px]'}>Бесплатная доставка от 599₽</p>
                    </div>
                </div>
                <Filter products={products} setProducts={setProducts} assortment={assortment} />
                <div className='flex w-full gap-[30px]'>
                    <Cart />
                    <Products products={products} setProducts={setProducts} assortment={assortment} />
                </div>
            </div>

        </>

    )
}