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
    <div className="bg-[url(./images/pattern-bg-desktop.png)] h-[35vh] md:h-[40vh] flex items-center flex-col gap-3 pt-8">
      <h2 className="text-lg font-semibold text-white">IP Address Tracker</h2>
      <div className="flex">
        <input
          name="ip-address"
          value={address}
          onChange={handleTextInput}
          placeholder="Search for any IP address or domain"
          className="rounded-l-xl p-2 md:w-[450px] focus:outline-none hover:cursor-pointer"
        />
        <div
          className="p-4 bg-black rounded-r-xl hover:cursor-pointer"
          onClick={locate}
        >
          <img src={Arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default AddressInput