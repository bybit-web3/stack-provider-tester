import { useCallback, useState } from "react";

const ConnectWallet = () => {
    const [address, setAddress] = useState('')
    const [publicKey, setPublicKey] = useState('')
    const connect = useCallback(() => {
        (window as any).bybitWallet.stacks.connect()
        .then((res: { address: string, publicKey: string }) => {
            console.log(res);
            const { address, publicKey } = res;
            setAddress(address);
            setPublicKey(publicKey);
        })
    }, [])
  if (address) {
    return (
      <div className="border rounded-sm border-r-emerald-100 p-2  mt-4">
        <p>mainnet address: {address}</p>
        <p>mainnet public key: {publicKey}</p>
      </div>
    );
  }

  return (
    <button className="Connect" onClick={connect}>
      Connect Wallet without authentication
    </button>
  );
};

export default ConnectWallet;
