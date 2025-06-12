import {useState} from 'react'
export default function ModalProductInfo() {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div onClick={() => setIsOpen(false)} className={isOpen ? 'activeModalProduct' : 'hiddenModalProduct'}>
            <div onClick={(e) => e.stopPropagation()} className='w-[684px] h-fit p-[24px] rounded-[24px] bg-[#F9F9F9]'>

            </div>
        </div>
    )
}