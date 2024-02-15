import logo from '../images/nasher_logo.svg';


export default function NavigationBar(){
    return(
        <div className='h-20 w-full absolute z-20 top-0 flex flex-row justify-between py-5 border-white border-opacity-25 px-6 bg-black border-b'>
            <div/>
            <img src={logo} alt="Nasher" className='h-full'/>
            <div/>
        </div>
    )
}