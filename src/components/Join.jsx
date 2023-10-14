import blob from '../assets/blob.svg'

function Join() {
  return (
    <div className="mt-[132px] flex flex-col items-center justify-center h-[900px] w-screen relative">
        <img src={blob} alt="" className='absolute z-[-1]'/>
        <div className="text-center">
          <h1 className="font-bold text-[65px]">Want to <span className='bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-transparent bg-clip-text'>Join</span> Us?</h1>
          <h3 className="text-[24px] font-normal">To remain with us, it is essential that you diligently follow the steps provided</h3>
        </div>


        <div className="grid grid-cols-3 gap-[32px] mt-[84px]">


          <div className="w-[405px] h-[266px] rounded-[20px] p-[14px] shadow-[2px_4px_15px_0px_#8585A740] bg-white">
            <div className="text-center">
              <h3 className="text-[20px] font-bold">Commencement of business </h3>
              <h4 className="text-[16px] w-[341px]">Invested shareholders must confirm payment and office address </h4>
            </div>
            <div className="flex gap-[40px] justify-center pt-[12px] px-[32px] bg-[#F4F4F4] w-[341px] h-[113px] mx-auto mt-[20px] rounded-[10px]">
              <div className="w-1/3">
                <h3 className="text-[18px] font-bold text-[#0076CE]">Due date</h3>
                <h4 className="text-[16px]">Within 30 <br /> days</h4>
              </div>
              <div className='w-[192px]'>
                <h3 className="text-[18px] font-bold text-[#FF6666]">Penalty fees</h3>
                <h4 className="text-[14px]">₹50,000 for the company</h4>
                <h4 className="text-[14px]">₹1,000 /day for directors</h4>
              </div>
            </div>
          </div>

          <div className="w-[405px] h-[266px] rounded-[20px] p-[14px] shadow-[2px_4px_15px_0px_#8585A740] bg-white">
            <div className="text-center">
              <h3 className="text-[20px] font-bold">Auditor Appointment </h3>
              <h4 className="text-[16px] w-[341px]">Company informs new auditor and submits ADT.1 form to ROC.</h4>
            </div>
            <div className="flex gap-[40px] justify-center pt-[12px] px-[32px] bg-[#F4F4F4] w-[341px] h-[113px] mx-auto mt-[20px] rounded-[10px]">
              <div className="w-1/3">
                <h3 className="text-[18px] font-bold text-[#0076CE]">Due date</h3>
                <h4 className="text-[16px]">Within 30 <br /> days</h4>
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-[#FF6666]">Penalty fees</h3>
                <h4 className="text-[16px] w-auto">₹300 per month</h4>
              </div>
            </div>
          </div>

          <div className="w-[405px] h-[266px] rounded-[20px] p-[14px] shadow-[2px_4px_15px_0px_#8585A740] bg-white">
            <div className="text-center">
              <h3 className="text-[20px] font-bold">DIN eKYC</h3>
              <h4 className="text-[16px] w-[341px]">Directors share personal information for identification & verification  </h4>
            </div>
            <div className="flex gap-[40px] justify-center pt-[12px] px-[32px] h-[113px] bg-[#F4F4F4] w-[341px] mx-auto mt-[20px] rounded-[10px]">
              <div className="w-1/3">
                <h3 className="text-[18px] font-bold text-[#0076CE]">Due date</h3>
                <h4 className="text-[16px]">Every Year</h4>
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-[#FF6666]">Penalty fees</h3>
                <h4 className="text-[16px] w-auto">₹50,00 one time</h4>
              </div>
            </div>
          </div>

          <div className="w-[405px] h-[266px] rounded-[20px] p-[14px] shadow-[2px_4px_15px_0px_#8585A740] bg-white">
            <div className="text-center">
              <h3 className="text-[20px] font-bold">DPT-3</h3>
              <h4 className="text-[16px] w-[341px]">Companies report money taken from people to ROC; auditors confirm details.</h4>
            </div>
            <div className="flex gap-[40px] justify-center pt-[12px] h-[113px] px-[32px] bg-[#F4F4F4] w-[341px] mx-auto mt-[20px] rounded-[10px]">
              <div className="w-1/3">
                <h3 className="text-[18px] font-bold text-[#0076CE]">Due date</h3>
                <h4 className="text-[16px]">Within 30 <br /> days</h4>
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-[#FF6666]">Penalty fees</h3>
                <h4 className="text-[16px] w-auto">₹300 per month</h4>
              </div>
            </div>
          </div>

          <div className="w-[405px] h-[266px] rounded-[20px] p-[14px] shadow-[2px_4px_15px_0px_#8585A740] bg-white">
            <div className="text-center">
              <h3 className="text-[20px] font-bold">MCA Form AOC-4 </h3>
              <h4 className="text-[16px] w-[341px]">It's like an official report card for a company's documents </h4>
            </div>
            <div className="flex gap-[40px] justify-center pt-[12px] h-[113px] px-[32px] bg-[#F4F4F4] w-[341px] mx-auto mt-[20px] rounded-[10px]">
              <div className="w-2/3">
                <h3 className="text-[18px] font-bold text-[#0076CE]">Due date</h3>
                <h4 className="text-[16px]">On or Before 30th November </h4>
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-[#FF6666]">Penalty fees</h3>
                <h4 className="text-[16px] w-auto">₹200 per day (No upper limit)*</h4>
              </div>
            </div>
          </div>

          <div className="w-[405px] h-[266px] rounded-[20px] p-[14px] shadow-[2px_4px_15px_0px_#8585A740] bg-white">
            <div className="text-center">
              <h3 className="text-[20px] font-bold">MCA Form MGT-7</h3>
              <h4 className="text-[16px] w-[341px]">Companies must annually report activities and finances to the registrar.</h4>
            </div>
            <div className="flex gap-[40px] justify-center pt-[12px] h-[113px] px-[32px] bg-[#F4F4F4] w-[341px] mx-auto mt-[20px] rounded-[10px]">
              <div className="w-2/3">
                <h3 className="text-[18px] font-bold text-[#0076CE]">Due date</h3>
                <h4 className="text-[16px]">On or Before 31st December</h4>
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-[#FF6666]">Penalty fees</h3>
                <h4 className="text-[16px] w-auto">₹200 per day (No upper limit)* </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[32px] w-[1280px] text-[17px]">
          <h4>
          * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <span className="font-bold">every day</span> until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form
          </h4>
        </div>
    </div>
  )
}

export default Join

