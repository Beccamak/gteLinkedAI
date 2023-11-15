import Metrix  from '../assets/images/metrix 1 (1).png'
import {ReactComponent as LineVector }from '../assets/svg/Vector 4.svg';
// import {ReactComponent as Chain} from '../assets/svg/chain.svg'
// import {ReactComponent as StarEmoji} from '../assets/svg/star.svg'
import Chain from '../assets/images/chain-9365116-7621444.png';
import StarEmoji from '../assets/images/1f4a5.png';
import Boy from '../assets/images/man-wearing-smart-glasses-touching-virtual-screen 1.png';
import Globe from '../assets/images/Image 1.png';
import Button from './buttonComponent';
const HeaderComponent = () => {
    return(
        <header className="py-6 border-b-1 border-b-[#ffffff] ">
            <img src={Metrix} className='  absolute right-0' alt='Connected Metrix Lines' />
            <div className='h-full w-full relative py-6' >
            <p className='absolute top-0 right-0 font-bold text-3xl '>Making a Revolution in HR Innovation</p>
            <LineVector className='absolute right-0 top-8'/>
            </div>
            <div className='flex  justify-center gap-3'>
                <div className='w-6/12 mt-8'>
                    <h1 className='text-6xl font-bold font-clash'>getlinkedTech <br/>
                    Hackathon<span className='text-purple'>1.0</span>
                    <img src={Chain} alt='Chain Emoji' className='inline' />
                    <img src={StarEmoji} alt='Star Emoji' className='inline' />
                    </h1>
                    <h4 className='mb-4'>Participate in getlinked tech Hackathon 2023 stand
                        <br /> 
                         a chance to win a Big prize</h4>
                         <Button text="Register" />
                         <p className='mt-6'>00H 00M 00s</p>
                </div>
                <div className='w-6/12 relative'>
                    <img src={Boy} alt='Man putting on Glasses' className='relative' />
                    <img src={Globe} alt='Globe Image' className='absolute top-0 left-0' />
                </div>
            </div>
        </header>
    )
}


export default HeaderComponent;