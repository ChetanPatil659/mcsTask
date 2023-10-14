import { Link, useNavigate } from "react-router-dom";
import ca from '../../CA.json'
import { useEffect, useRef, useState } from "react";


function search() {

  const input = useRef()
  const list = useRef()
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [name, setName] = useState('')
  const [searchClick, setSearchClick] = useState(1)
  const searchResult = useRef()
  const navigate = useNavigate()

  // const submit = (e)=>{
  //   e.preventDefault()
    
  //   // navigate('/search', {search: input.current.value})
  // }

  useEffect(()=>{
    input.current.addEventListener('focus', ()=>{setIsOpen(true)})
    // input.current.addEventListener('focusout', ()=>{setIsOpen(false)})
    
  })


  return (
    <form className='flex items-center justify-between rounded-[10px] border-[1px] mt-[60px] border-[#BFBFBF] h-[73px] relative'>

      <input ref={input} onChange={(e)=>{ setSearch(e.target.value) } } type="text" name="" id="" className='w-[484px] text-[18px] font-bold h-full pl-[30px]' placeholder='Search by name'/>
      {isOpen && 

        <div ref={searchResult} className="w-[484px] max-h-[300px] z-[19] bg-white shadow-[2px_4px_15px_0px_#8585A740] absolute top-[73px] overflow-y-scroll px-[30px] py-[10px]">
        <ul ref={list}>
          {ca
          .filter((item)=>{
              const val = search.toLowerCase()
              const searchVal = item.name.toLowerCase()
              if(val == '') return searchVal

              return val && searchVal.startsWith(val)
            })
          .map((val)=>{
              return(
                <li onClick={e=>{
                  setSearchClick(val.id)
                  console.log(searchClick);
                  setName(val.name)
                }}
                  className="py-[10px]" key={val.id}>
                    <Link to='/search' state={{id: val.id}}>{val.name}</Link>
                </li>
              )
          })
          }
        </ul>
      </div>
       }

      <button type="submit">
        <Link to='/search' state={{id: searchClick}} className='px-[20px] py-[10px] border border-[#0076CE] rounded-[10px] bg-[#0076CE] text-white w-[186px] h-[73px] flex items-center justify-center text-[18px] font-bold'>Search</Link>
      </button>
          
    </form>
  )
}

export default search;