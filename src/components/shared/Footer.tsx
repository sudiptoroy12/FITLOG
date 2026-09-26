
import footerlogo from '../../assets/logo.png'
import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
    return (
        <div className='bg-black border-t'>
           <div className='max-w-7xl mx-auto px-6 py-4  flex flex-col md:flex-row items-center justify-between gap-4 '>
            <div className='flex gap-2'>
              <Image width={27} height={20} src={footerlogo} alt="FITLOG Logo" />
                        <Link href="/" className=" text-xl font-bold text-white">
                          FITLOG
                        </Link>
            </div>
            
                <p className='text-[#9CA3AF]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>

           
            
        </div> 
        </div>
        
    );
};

export default Footer;