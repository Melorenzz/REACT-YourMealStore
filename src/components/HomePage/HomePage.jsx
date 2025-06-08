import burger from '../../images/burger.png'
import Filter from './Filter.jsx'

export default function HomePage(){
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
                <Filter></Filter>
            </div>

        </>

    )
}