import WalletConnect from "./components/WalletConnect";
import TronlinkConnection from "./components/TronlinkConnection";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 ">
     <TronlinkConnection/>
    </div>
  );
}

export default App;
