import burger from '../../images/burger.png'
import Filter from './Filter.jsx'
import Cart from './Cart.jsx'
import Products from './Products.jsx'
import { useState, useMemo } from 'react'
export default function HomePage(){
    const assortment = useMemo(() => ({
        Burgers: [
            { id: 1, image: '/burgers/Мясная бомба.png', price: 689, name: 'Мясная бомба', weight: '520г', quantity: 1 },
            { id: 2, image: '/burgers/Супер сырный.png', price: 550, name: 'Супер сырный', weight: '512г', quantity: 1 },
            { id: 3, image: '/burgers/Сытный.png', price: 639, name: 'Сытный', weight: '580г', quantity: 1 },
            { id: 4, image: '/burgers/Тяжелый удар.png', price: 480, name: 'Тяжелый удар', weight: '470г', quantity: 1 },
            { id: 5, image: '/burgers/Вечная классика.png', price: 450, name: 'Вечная классика', weight: '450г', quantity: 1 },
            { id: 6, image: '/burgers/Итальянский.png', price: 560, name: 'Итальянский', weight: '510г', quantity: 1 },
        ],
        'Hot-dogs': [
            { id: 7, image: '/hotDogs/Домашний хот-дог.png', price: 290, name: 'Домашний хот-дог', weight: '250г', quantity: 1 },
            { id: 8, image: '/hotDogs/Жгучий хот-дог.png', price: 239, name: 'Жгучий хот-дог', weight: '245г', quantity: 1 },
            { id: 9, image: '/hotDogs/Классический хот-дог.png', price: 220, name: 'Классический хот-дог', weight: '215г', quantity: 1 },
        ]
    }), []);

    const [products, setProducts] = useState(assortment.Burgers)
    const [selectedFilter, setSelectedFilter] = useState('Burgers')

    const [cart, setCart] = useState([])

    return (
        <>
            <div className="container">
                <div className="mt-[50px] pb-[250px] flex items-center justify-center max-[900px]:flex-col">
                    <img src={burger} alt=""/>
                    <div>
                        <p className={' text-5xl max-w-[437px] font-[800] text-white max-[900px]:text-center max-[500px]:text-4xl'}>Только самые <br /> <span className={'text-[#FF5C00]'}>сочные бургеры!</span> </p>
                        <p className={' text-[16px] text-white font-[600] mt-[52px] max-[900px]:text-center '}>Бесплатная доставка от 599₽</p>
                    </div>
                </div>
                <Filter setProducts={setProducts} assortment={assortment} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}  />
                <div className='flex w-full gap-[30px] mt-[122px] max-[900px]:flex-wrap'>
                    <Cart setCart={setCart}  />
                    <Products products={products} assortment={assortment} selectedFilter={selectedFilter} setCart={setCart} />
                </div>
            </div>

        </>

    )
}