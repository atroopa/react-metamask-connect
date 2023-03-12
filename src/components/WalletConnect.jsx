import React, {useState} from 'react';

const WalletConnect = () => {

    const [erroMessage,    setErrorMessage]   = useState(null);
    const [defualtAccount, setDefualtAccount] = useState(null);
    const [userBalance,    setUserBalance]    = useState(null);
    const [connButtonText, setConnButtonText] = useState(null);


  return (

            <div className="flex flex-col items-center justify-center p-10 m-8 w-[750px] bg-[#303445] rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <h5 className="py-5 text-5xl bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 inline-block text-transparent bg-clip-text dark:text-white">
                        Wallect Address
                    </h5>
                </div>

                <p className="py-5 mb-3 font-normal text-1xl bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 inline-block text-transparent bg-clip-text dark:text-gray-400">
                Address : 0x6dAEO....f839B
                </p>

                <button type="button" className="w-[220px] text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    connect
                </button>
            </div>

  );
}

export default WalletConnect