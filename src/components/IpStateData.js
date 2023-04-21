import React from "react";

const IpStateData = ({ data }) => {
  return (
    <div className="fixed top-[146px] left-5 md:top-[200px] md:left-[200px] bg-transparent z-[10000] ">
      <div className="w-full flex flex-col gap-2 md:flex-row md:gap-4 justify-center items-start bg-white rounded-xl px-24 py-5">
        <div className="flex flex-col gap-1 justify-center items-start border-r pr-4 border-gray-200">
          <p className="text-gray-400 font-semibold text-xs uppercase">
            Ip location
          </p>
          <p className='w-40'>
            <strong>192.168.56.101</strong>
          </p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-start border-r pr-4 border-gray-200">
          <p className="text-gray-400 font-semibold text-xs uppercase">
            Location
          </p>
          <p className='w-40'>
            <strong>192.168.56.101 ,192.168.56.101</strong>
          </p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-start border-r pr-4 border-gray-200">
          <p className="text-gray-400 font-semibold text-xs uppercase">
            timezone
          </p>
          <p className='w-40'>
            <strong>192.168.56.101</strong>
          </p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-start border-r pr-4 border-gray-200">
          <p className="text-gray-400 font-semibold text-xs uppercase">Isp</p>
          <p className='w-40'>
            <strong>192.168.56.101</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IpStateData;
