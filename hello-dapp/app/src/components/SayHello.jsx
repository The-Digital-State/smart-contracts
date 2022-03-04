import { useContext, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WorkspaceContext } from "../WorkspaceProvider";
import { hello } from "../api/hello";

const SayHello = () => {
  const workspace = useContext(WorkspaceContext);
  const { connected } = useWallet();
  const [helloTxId, setHelloTxId] = useState(null);

  const sendHello = async () => {
    const saidHello = await hello(workspace);
    console.log(saidHello);
    setHelloTxId(saidHello);
  };

  if (!connected) {
    return (
      <div className="px-8 py-4 text-gray-700 text-center">
        Connect your wallet to say hello...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <button
        className={
          "bg-primary-dark text-white px-4 py-2 rounded-full font-semibold"
        }
        onClick={sendHello}
      >
        Say Hello!
      </button>
      {helloTxId && (
        <div className="mt-2 flex flex-col items-center">
          <div className="font-semibold text-sm">Hello Transaction ID:</div>
          <div className="text-sm">{helloTxId}</div>
        </div>
      )}
    </div>
  );
};

export default SayHello;
