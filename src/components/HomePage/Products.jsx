export default function Products({products, selectedFilter}) {
    return(
        <div className='flex flex-wrap w-full gap-[30px] relative'>
            <h2 className='absolute top-[-60px] font-[600] text-[40px]/[120%]'>{selectedFilter}</h2>
            {products ? products.map((item, index) => (
            <div key={index} className='max-w-[300px] w-full rounded-[18px] h-[411px] bg-white p-[12px]'>
                <img className='w-[100%] h-[220px]' src={item.image} alt=""/>
                <p className='text-[24px] font-600'>{item.price}</p>
                <h4 className='text-[14px]'>{item.name}</h4>
                <p className='text-[#B1B1B1] font-600 text-[16px]'>{item.weight}</p>
                <button className='rounded-[12px] bg-[#F2F2F3] w-full h-[40px]'>Add</button>
            </div>
            ))
            : <div className='m-auto'>There's nothing here yet</div>
            }
        </div>

    )
}