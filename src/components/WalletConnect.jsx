import React, {useState} from 'react';

const WalletConnect = () => {
  return (

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Wallect Address
                    </h5>
                </div>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                0x6dAEO....f839B
                </p>

                <button class="px-6 py-2 text-gray-100 rounded bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                    Connect
                </button>
            </div>

  );
}

export default WalletConnect