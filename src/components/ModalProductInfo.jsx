import {useState} from 'react'
export default function ModalProductInfo() {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div onClick={() => setIsOpen(false)} className={isOpen ? 'activeModalProduct' : 'hiddenModalProduct'}>
            <div onClick={(e) => e.stopPropagation()} className=' justify-between w-[684px] h-fit p-[24px] rounded-[24px] bg-[#F9F9F9]'>
                <h3 className='text-[40px] font-[600]'>Product name</h3>

                <div className=' flex gap-[16px] justify-center'>
                    <div className='w-[276px]'>
                        <img className='rounded-[16px] w-full h-[220px]' src="" alt=""/>
                    </div>
                    <div>
                        <p className='w-[344px]'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae blanditiis, commodi consequatur delectus, distinctio est explicabo fugit ipsa minima molestiae omnis ratione reiciendis sed suscipit? Commodi dolorum eum odio?
                        </p>
                    </div>

                </div>
                <div>
                    <button className='w-full rounded-[12px] h-[40px] bg-[#FF7020] mt-[40px] text-white'>Add</button>
                    <button></button>
                    <p>123r</p>

                </div>

            </div>
        </div>
    )
}