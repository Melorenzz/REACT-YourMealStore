import burger from '../../images/burger.png'
import Filter from './Filter.jsx'
import Cart from './Cart.jsx'
import Products from './Products.jsx'
import { useState, useMemo } from 'react'
export default function HomePage(){
    const assortment = useMemo(() => ({
        Burgers: [
            { image: '../../../public/burgers/Мясная бомба.png', price: '689₽', name: 'Мясная бомба', weight: '520г' },
            { image: '../../../public/burgers/Супер сырный.png', price: '550₽', name: 'Супер сырный', weight: '512г' },
            { image: '../../../public/burgers/Сытный.png', price: '639₽', name: 'Сытный', weight: '580г' },
            { image: '../../../public/burgers/Тяжелый удар.png', price: '480₽', name: 'Тяжелый удар', weight: '470г' },
            { image: '../../../public/burgers/Вечная классика.png', price: '450₽', name: 'Вечная классика', weight: '450г' },
            { image: '../../../public/burgers/Итальянский.png', price: '560₽', name: 'Итальянский', weight: '510г' },
        ],
        'Hot-dogs': [
            { image: '../../../public/hotDogs/Домашний хот-дог.png', price: '290₽', name: 'Домашний хот-дог', weight: '250г' },
            { image: '../../../public/hotDogs/Жгучий хот-дог.png', price: '239₽', name: 'Жгучий хот-дог', weight: '245г' },
            { image: '../../../public/hotDogs/Классический хот-дог.png', price: '220₽', name: 'Классический хот-дог', weight: '215г' },
        ]
    }), []);

    const [products, setProducts] = useState(assortment.Burgers)
    const [selectedFilter, setSelectedFilter] = useState('Burgers')

    const [cart, setCart] = useState([])

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
                <Filter setProducts={setProducts} assortment={assortment} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}  />
                <div className='flex w-full gap-[30px] mt-[122px]'>
                    <Cart cart={cart} />
                    <Products products={products} assortment={assortment} selectedFilter={selectedFilter} setCart={setCart} />
                </div>
            </div>

        </>

    )
}