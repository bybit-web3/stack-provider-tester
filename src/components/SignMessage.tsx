import { showSignMessage } from "@stacks/connect";

import { userSession } from "../user-session";
import { useCallback, useState } from "react";

const SignMessage = () => {

  const [message, setMessage] = useState('Hello, Bybit.')

  const [result, setResult] = useState<any>(null);

  const handleSignMessage = useCallback(() => {
    showSignMessage({
      appDetails: {
        name: "Stacks React Starter",
        icon: window.location.origin + "/logo512.png",
      },
      onFinish: (data) => {
        console.log('onFinish', data)
        setResult(data)
      },
      message,
      userSession,
    },
    (window as any).bybitWallet.stacks
    );
  }, []);

  return (
    <div className="border rounded-sm border-r-emerald-100 p-2 mt-4">
      <div>
        <input type="text" name="message" id="message" value={message} onChange={e => setMessage(e.target.value)} />
        <button className="sign-message" onClick={handleSignMessage}>
          Sign Message
        </button>
      </div>
      <div>
        {result && (
          <div>
            <div>Signature: {result.signature}</div>
            <div>Public Key: {result.publicKey}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignMessage;
