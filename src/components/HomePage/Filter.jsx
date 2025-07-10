
import Products from "./Products.jsx";
export default function Filter({setProducts, assortment, selectedFilter, setSelectedFilter}) {
    const baseUrl=import.meta.env.VITE_BASE_URL;

    const productFilter = [
        {Name: 'Burgers', Image: `${baseUrl}/icons/Бургеры.svg`},
        {Name: 'Snacks', Image: `${baseUrl}/icons/Закуски.svg`},
        {Name: 'Hot-dogs', Image: `${baseUrl}/icons/Хот-доги.svg`},
        {Name: 'Combo', Image: `${baseUrl}/icons/Комбо.svg`},
        {Name: 'Kebab', Image: `${baseUrl}/icons/Шаурма.svg`},
        {Name: 'Pizza', Image: `${baseUrl}/icons/Пицца.svg`},
        {Name: 'Wok', Image: `${baseUrl}/icons/Вок.svg`},
        {Name: 'Deserts', Image: `${baseUrl}/icons/Десерты.svg`},
        {Name: 'Sauces', Image: `${baseUrl}/icons/Соусы.svg`},
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