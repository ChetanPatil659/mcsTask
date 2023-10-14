import left from '../assets/Left.svg'
import Search from './searchBar/Search'

function Landing() {
    
  return (
    <>
    <div className='absolute h-screen w-scren grad z-[-1] flex flex-col items-center justify-between'>
        <div className='h-20'></div>
        <div className='h-[210px] w-screen clip bg-[#FAFBFC]'></div>
    </div>
    
    <div className="pl-[120px] pt-[200px] w-screen h-screen flex items-center justify-center gap-[35px] relative">
        
        <div className="w-[676px]">
            <h1 className='text-[65px] leading-[80px] font-bold'>
                Find <span className='bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-transparent bg-clip-text'>Partners</span> (CAs) <br />
                availabe online
            </h1>
            <h3 className='w-[670px] text-[20px] mt-[20px] text-[#616161]'>
            <span className='font-bold'>CONNECT</span> with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support
            </h3>

            <Search/>
            
        </div>
        <div>
            <img src={left} alt="" height='487px'/>
        </div>
    </div>
    </>
  )
}

export default Landing