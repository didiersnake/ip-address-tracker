import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Arrow from "../images/icon-arrow.svg"

const AddressInput = () => {
    const [address, setAddress] = useState("")
    const handleTextInput = (e) => {
        setAddress(e.target.value)
    }

    const dispatch = useDispatch()

    const locate = () => {
        
        console.log("Hello");
    }

  return (
    <div className="bg-[url(./images/pattern-bg-desktop.png)] h-[40vh]">
      <h2 className="text-lg text-white">Ip Address Tracker</h2>
      <div className='flex'>
        <input
          name="ip-address"
          value={address}
          onChange={handleTextInput}
          placeholder="Search for any IP address or domain"
          className="rounded-l-md"
        />
        <div className='p-2 bg-black rounded-r-md' onClick={locate}>
            <img src={Arrow} alt='arrow'/>
        </div>
      </div>
    </div>
  );
}

export default AddressInput