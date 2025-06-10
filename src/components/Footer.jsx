import LogoOrange from "../images/LogoOrange.svg"

export default function Footer(){
    return (
        <footer className='bg-white w-[100%] py-[10px] mt-[100px]'>
            <div className="container flex justify-center items-center">
                <img src={LogoOrange} alt=""/>
            </div>
        </footer>
    )
}