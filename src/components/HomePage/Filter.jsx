import {useState} from 'react'
import Products from "./Products.jsx";
export default function Filter({products, setProducts, assortment}) {

    const [selectedFilter, setSelectedFilter] = useState('burgers')
    const productFilter = [
        {Name: 'burgers', Image: '../../../icons/Бургеры.svg'},
        {Name: 'Закуски', Image: '../../../icons/Закуски.svg'},
        {Name: 'hotDogs', Image: '../../../icons/Хот-доги.svg'},
        {Name: 'Комбо', Image: '../../../icons/Комбо.svg'},
        {Name: 'Шаурма', Image: '../../../icons/Шаурма.svg'},
        {Name: 'Пицца', Image: '../../../icons/Пицца.svg'},
        {Name: 'Вок', Image: '../../../icons/Вок.svg'},
        {Name: 'Десерты', Image: '../../../icons/Десерты.svg'},
        {Name: 'Соусы', Image: '../../../icons/Соусы.svg'},
    ]
    return(
        <div className="flex align-center justify-start gap-[24px] " >
            {productFilter.map((product, index) => (
                <button onClick={() => {setSelectedFilter(product.Name); setProducts(assortment[product.Name]);}} className={selectedFilter === product.Name ? 'filterButton activeFilter' : 'filterButton'} key={index}>
                    <img className='w-[24px]' src={product.Image} alt=""/> {product.Name}
                </button>
            ))}
        </div>

    )
}