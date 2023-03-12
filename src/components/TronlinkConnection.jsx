import { useEffect, useState } from "react";

function TronlinkConnection() {
  const [address, setAddress] = useState("");

  useEffect(() => {
    const connect = async () => {
      try {
        // دریافت دسترسی به ترانلینک
        await window.tronWeb?.connect();

        // دریافت آدرس کیف پول کاربر
        const accounts = await window.tronWeb?.defaultAddress.base58;
        setAddress(accounts);
      } catch (error) {
        console.log(error);
      }
    };

    connect();
  }, []);

  return (
    <div>
      <button className="text-white">Connect to TronLink</button>
      {address && <p>Connected wallet: {address}</p>}
    </div>
  );
}

export default TronlinkConnection;
