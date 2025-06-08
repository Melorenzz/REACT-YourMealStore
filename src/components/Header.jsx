import logo from '../images/logo.svg';

export default function Header(){
    return (
        <header className="mt-[24px] relative z-[10] flex justify-center">
            <img className="w-[150px]" src={logo} alt="" />
        </header>

    )
}