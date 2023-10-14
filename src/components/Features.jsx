import leftGroup from '../assets/leftgroup.svg'
import search from '../assets/search.svg'
import table from '../assets/table.svg'
import degree from '../assets/degree.svg'
import enquire from '../assets/enquire.svg'


function Features() {
  return (
    <div className='flex items-center justify-center mt-[132px]'>
        <div className='w-[670px]' >
            <h1 className='text-[65px] font-bold'>
            <span className='bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-transparent bg-clip-text'>All-in-One </span> platform that Makes Easier
            </h1>
            <h2 className='w-[604px] text-[24px]'>
            We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals
            </h2>


            <div className='grid grid-cols-2 gap-[32px] mt-[32px]'>
                <div className='flex gap-[16px] items-start'>
                    <img src={search} alt="" />
                    <h2 className='text-[20px] w-[205px]'>
                    <span className='font-bold'>SEARCH</span> for vital company information 
                    </h2>
                </div>

                <div className='flex gap-[16px] items-start'>
                    <img src={enquire} alt="" />
                    <h2 className='text-[20px] w-[205px]'>
                    <span className='font-bold'>CONNECT</span>  with the resources to meet your business needs
                    </h2>
                </div>

                <div className='flex gap-[16px] items-start'>
                    <img src={table} alt="" />
                    <h2 className='text-[20px] w-[205px]'>
                    <span className='font-bold'>RESEARCH</span>  and generate reports that drive growth 
                    </h2>
                </div>

                <div className='flex gap-[16px] items-start'>
                    <img src={degree} alt="" />
                    <h2 className='text-[20px] w-[205px]'>
                    <span className='font-bold'>ACADEMY</span>  to give you the skills for success in your career
                    </h2>
                </div>
            </div>
            
        </div>
        <div>
            <img src={leftGroup} alt="" />
        </div>
    </div>
  )
}

export default Features