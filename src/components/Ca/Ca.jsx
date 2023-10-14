import ca from '../../CA.json'
import star from '../../assets/star.svg'
import vector from '../../assets/Vector.svg'
import account from '../../assets/account.svg'
import { useLocation } from "react-router";
import { useEffect } from 'react';


function Ca() {
  const {state} = useLocation()
  var id = state.id

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  })

  return (
    <>
      {ca.map((val) => {
        if (val.id == id) {
          return (
            <div className="flex justify-center pt-[165px] gap-[33px]">
              <div className='w-[515px] text-[20px]'>
                <h1 className='text-[35px] font-bold'>{val.name}</h1>
                <h2 className='mt-[16px]'>
                  I am here to provide my expertise in accounting and finance, which includes financial statements, economics, and auditing, all to assist you effectively
                </h2>
                <h2 className='flex gap-[10px] mt-[32px]'>
                  <img src={star} alt="" />
                  {val.rating} ({val.reviewCount})
                </h2>
                <div className='w-full h-[216px] mt-[32px] shadow-[2px_4px_15px_0px_#8585A740] rounded-[20px] flex flex-col justify-between p-[28px]'>
                  <h2 className='flex justify-between text-[20px]'>
                    <span>basic to complex tasks</span>
                    <span className='font-bold text-[24px]'>{val.price}</span>
                  </h2>
                  <h2 className='flex gap-[10px]'>
                    <img src={vector} alt="" />
                    {val.deliveryTime}
                  </h2>
                  <div className='flex gap-[25px]'>
                    <button className='w-[220px] py-[10px] border border-[#0076CE] rounded-[10px] bg-[#0076CE] text-white text-[16px] font-bold'>Request Proposal</button>

                    <button className='w-[220px] py-[10px] border-[1px] border-[#0076CE] rounded-[10px] text-[#0076CE] text-[16px] font-bold'>Chat with me</button>
                  </div>
                </div>

                <div className='mt-[32px] shadow-[2px_4px_15px_0px_#8585A740] rounded-[20px] p-[28px] '>
                  <h1 className='text-[35px] font-bold'>
                    What people say?
                  </h1>
                  <h3>
                    {val.testimonial.text}
                  </h3>
                </div>
              </div>

              <div className='w-[733px]'>
                <div className='h-[412px] rounded-[20px] bg-gray-200 overflow-hidden'>
                  <img src={val.image} alt="" />
                </div>

                <h1 className='font-bold text-[35px] mt-[32px]'>About {val.name}</h1>

                <div className='grid grid-cols-3 gap-[32px]'>
                  <div>
                    <h3 className='text-[#999999] text-[16px] font-bold'>FROM</h3>
                    <h3 className='mt-[8px] text-[20px]'>{val.about.from}</h3>
                  </div>

                  <div>
                    <h3 className='text-[#999999] text-[16px] font-bold'>PARTNER SINCE</h3>
                    <h3 className='mt-[8px] text-[20px]'>{val.about.partnerSince}</h3>
                  </div>

                  <div>
                    <h3 className='text-[#999999] text-[16px] font-bold'>AVERAGE RESPONCE TIME</h3>
                    <h3 className='mt-[8px] text-[20px]'>{val.about.averageResponseTime}</h3>
                  </div>
                </div>

                <div>
                  <h3 className='text-[#999999] text-[16px] mt-[32px] font-bold'>ABOUT</h3>
                  <h3 className='text-[20px]'>
                    {val.about.description}
                  </h3>
                </div>

                <div className='flex gap-[32px]'>
                  <div className='w-[405px]'>
                    <h3 className='text-[#999999] text-[16px] mt-[32px] font-bold'>SERVICES I OFFER</h3>
                    <ul className='list-disc pl-[25px]'>

                      {val.about.services.map((val) => {
                        return (
                          <li>{val}</li>
                        )
                      })}
                    </ul>
                  </div>

                  <div>
                    <h3 className='text-[#999999] text-[16px] mt-[32px] font-bold'>WHY ME?`</h3>
                    <ul className='list-disc pl-[25px]'>
                      {val.about.benefits.map((val) => {
                        return (
                          <li>{val}</li>
                        )
                      })}

                    </ul>
                  </div>
                </div>

              </div>

            </div>
          )
        }
      })}


      <div className='px-[129px] mt-[132px]'>
        <h1 className='font-bold text-[35px]'>Recommended for you</h1>
        <div className='grid grid-row-1 grid-flow-col gap-[32px] mt-[32px] overflow-x-scroll'>

          {ca.map((val) => {
            if (val.id != id) {
              return (
                <div className='shadow-[2px_4px_15px_0px_#8585A740] rounded-[20px] w-[405px] overflow-hidden'>
                  <div className='h-[244px] bg-gray-200 overflow-hidden flex items-center justify-center'>
                    <img src={val.image} alt={val.name} />
                  </div>
                  <div className='p-[29px]'>
                    <div className='flex justify-between'>
                      <h1 className='font-bold'>{val.name}</h1>
                      <h1 className='font-bold'>{val.price}</h1>
                    </div>
                    <h2 className='text-[16px]'>{val.about.description}</h2>
                    <h2 className='flex gap-[10px] mt-[12px]'>
                      <img src={star} alt="" />
                      {val.rating} ({val.reviewCount})
                    </h2>

                    <button className='w-[365px] mt-[32px] py-[10px] border-[1px] bg-[#0076CE] rounded-[10px] text-white text-[16px] font-bold'>View Services</button>

                  </div>
                </div>
              )
            }
          })}


        </div>
      </div>

    </>

  )
}

export default Ca