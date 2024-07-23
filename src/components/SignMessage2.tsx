import { useCallback, useState } from "react";

const SignMessage = () => {

  const [message, setMessage] = useState('Hello, Bybit.')

  const [result, setResult] = useState<any>(null);

  const handleSignMessage = useCallback(() => {
    (window as any).bybitWallet.stacks.signMessage({
      message,
    })
      .then((res: any) => {
        console.log('onFinish', res)
        setResult(res)
      })
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
            <div>Signature: {result?.signature}</div>
            <div>Public Key: {result?.publicKey}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignMessage;
