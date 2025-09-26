
import Products from "./Products.jsx";
export default function Filter({setProducts, assortment, selectedFilter, setSelectedFilter}) {

    const productFilter = [
        {Name: 'Burgers', Image: `icons/Бургеры.svg`},
        {Name: 'Snacks', Image: `icons/Закуски.svg`},
        {Name: 'Hot-dogs', Image: `icons/Хот-доги.svg`},
        {Name: 'Combo', Image: `icons/Комбо.svg`},
        {Name: 'Kebab', Image: `icons/Шаурма.svg`},
        {Name: 'Pizza', Image: `icons/Пицца.svg`},
        {Name: 'Wok', Image: `icons/Вок.svg`},
        {Name: 'Deserts', Image: `icons/Десерты.svg`},
        {Name: 'Sauces', Image: `icons/Соусы.svg`},
    ]
    return(
        <div className="flex align-center justify-start gap-[24px] overflow-x-auto" >
            {productFilter.map((product, index) => (
                <button onClick={() => {setSelectedFilter(product.Name); setProducts(assortment[product.Name]);}} className={selectedFilter === product.Name ? 'filterButton activeFilter' : 'filterButton'} key={index}>
                    <img className='w-[24px]' src={product.Image} alt=""/> {product.Name}
                </button>
            ))}
        </div>

    )
}