import logo from '../assets/image 1 (1).svg'
import social from '../assets/social.svg'

function Footer() {
  return (
    <div>
        <div className='mt-[132px] bg-gradient-to-r from-[#0076CE] from-[-7.82%] to-[#9400D3] to-[143.96%] px-[128px] pt-[41px]'>
        <div className='flex justify-between'>
        <div>
            <img src={logo} alt="" className=''/>
            <h6 className='w-[272px] text-white text-[14px] mt-[15px]'>
            India's first platform dedicated to simplifying partner search
            </h6>
        </div>

        <div className='grid grid-cols-5 gap-[64px] text-white'>
            <div className='w-[132px] text-[16px] leading-6 flex flex-col gap-[22px]'>
                
                    <span className='text-[14px] font-bold'>COMPANY</span>
                    <span>About</span> 
                    <span>Pricings</span> 
                    <span>Careers</span>
                
            </div>

            <div className='w-[132px] text-[16px] leading-6 flex flex-col gap-[22px]'>
                
                    <span className='text-[14px] font-bold'>SOLUTIONS</span> 
                    <span>Search</span> 
                    <span>Connect</span> 
                    <span>Research</span> 
                    <span>Academy</span>
                
            </div>

            <div className='w-[132px] text-[16px] leading-6 flex flex-col gap-[22px]'>
                
                    <span className='text-[14px] font-bold'>RESOURCES</span>
                    <span>Blogs</span>
                    <span>Forms</span>
                    
                
            </div>

            <div className='w-[132px] text-[16px] leading-6 flex flex-col gap-[22px]'>
                
                    <span className='text-[14px] font-bold'>SUPPORT</span>
                    <span>Help</span>
                    <span>Contact Us</span>
                    
                
            </div>

            <div className='w-[132px] text-[16px] leading-6 font-normal flex flex-col gap-[22px]'>
                
                    <span className='text-[14px] font-bold'>LEGAL</span>
                    <span>Privacy</span> 
                    <span>Terms</span> 
                    <span>Accessibility</span>
                
            </div>
        </div>
        </div>

        <div className='w-[1280px] border mt-[32px]'></div> 
        <div className='w-[1280px] flex justify-between text-white mt-[32px] pb-[41px]'>
            <div className='text-[14px]'>Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</div>
            <div><img src={social} alt="" /></div>
        </div>
    </div>
    <div className='flex items-center justify-center h-[57px] bg-black text-white text-[12px]'>
    Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved
    </div>
    </div>
  )
}

export default Footer

// background: linear-gradient(95.74deg, #0076CE -7.82%, #9400D3 143.96%);
