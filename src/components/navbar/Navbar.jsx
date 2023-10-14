import logo from '../../assets/image 1.svg'
import DownArrow from '../../assets/Down arrow.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
      <div className="w-full h-[85px] flex items-center px-[120px] justify-between fixed z-[99] backdrop-blur-sm">
        <div className="flex items-center justify-center">
            <Link to='/'><img src={logo} alt=""  className='p-[16px]' height='45px'/></Link>
            
            <a href="/" className='flex items-center justify-center h-[27px] w-auto gap-1 p-[16px]'>
            <h1 className='font-black text-[18px]'>Solutions</h1>
            <img src={DownArrow} alt="" />
            </a>

            <a href="/" className='flex items-center justify-center h-[27px] w-auto gap-1 p-[16px]'>
            <h1 className='font-black text-[18px]'>Features</h1>
            <img src={DownArrow} alt="" />
            </a>

            <div className='w-[83px] h-[62px]'>
            {/* background: linear-gradient(74.71deg, #FEDDEE 0%, #FCF6FC 31.77%, #C5EAED 64.58%, #FDDDFE 100%); */}

            </div>
            
            <a href="/" className='flex items-center justify-center h-[27px] w-auto gap-1 p-[16px]'>
            <h1 className='font-black text-[18px]'>About</h1>
            <img src={DownArrow} alt="" />
            </a>
        </div>

        <div className="flex items-center justify-center font-bold text-[16px] align-center gap-[10px]">
            <button className='px-[20px] py-[10px] border-[1px] border-[#0076CE] rounded-[10px] text-[#0076CE]'>Login</button>
            <button className='px-[20px] py-[10px] border border-[#0076CE] rounded-[10px] bg-[#0076CE] text-white'>Register</button>
        </div>
      </div>
    )
  }
  