import { useConnect } from "@stacks/connect-react";
import { StacksMainnet } from "@stacks/network";
import {
  AnchorMode,
  PostConditionMode,
} from "@stacks/transactions";

import { userSession } from "../user-session";
import { useCallback, useState } from "react";
const STX_TO_USTX = 1_000_000;

const ContractCallVote = () => {
  const [amount, setAmount] = useState('0.001')
  const [recipient, setRecipient] = useState('SP34J5JX8P30TJDSE77JNJ6D96D1TZXV63ARDJV7X')

  const { doSTXTransfer } = useConnect();

  const handleTranfer = useCallback(() => {
    if (!recipient || !amount) {
      throw new Error('recipient and amount are required')
    }
    doSTXTransfer({
      network: new StacksMainnet(),
      anchorMode: AnchorMode.Any,
      postConditionMode: PostConditionMode.Deny,
      postConditions: [],
      amount: BigInt(parseFloat(amount) * STX_TO_USTX),
      recipient,
      onFinish: (data) => {
        console.log("onFinish:", data);
        window
          .open(
            `https://explorer.hiro.so/txid/${data.txId}?chain=mainnet`,
            "_blank"
          )
          ?.focus();
      },
      onCancel: () => {
        console.log("onCancel:", "Transaction was canceled");
      },
    },
    window.bybitWallet.stacks,
  );
  }, [amount, doSTXTransfer, recipient]);

  if (!userSession.isUserSignedIn()) {
    return null;
  }

  return (
    <div className="border rounded-sm border-r-emerald-100 p-2  mt-4">
      <p>STX Transfer</p>
      <p className="mt-2">Amount: 
        <input className="ml-2" type="number" value={amount} onChange={e => setAmount(e.target.value)} />
      </p>
      <p className="mt-2">Recipient: 
        <input className="ml-2" type="text" value={recipient} onChange={e => setRecipient(e.target.value)} />
      </p>
      <button onClick={handleTranfer}>
        make transfer
      </button>
    </div>
  );
};

export default ContractCallVote;
