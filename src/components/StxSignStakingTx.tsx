import { openSignTransaction } from '@stacks/connect';
import {
  cvToHex,
  cvToString,
  cvToValue,
  deserializeTransaction,
} from '@stacks/transactions';

import { userSession } from "../user-session";
import {  useEffect } from "react";
import { Buffer } from 'buffer';
import { StacksMainnet } from "@stacks/network";

function uint8ArrayToHex(array: Uint8Array): string {
  return Array.from(array)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

// function base64ToHex(base64: string): string {
//   const arrayBuffer = Buffer.from(base64, 'base64');
//   return uint8ArrayToHex(arrayBuffer);
// }

const serializedTx = '000000000104004193394e59080352796af99acbf7d6e9e3e01a7f0000000000000064000000000000e2770000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000302000000000216099fb88926d82f30b2f40eaf3ee423cb725bdb3b14737461636b696e672d64616f2d636f72652d7631076465706f736974000000030616099fb88926d82f30b2f40eaf3ee423cb725bdb3b0a726573657276652d763101000000000000000000000000000186a0051614004ac0c36f17e78b2e49a5897a63feb33218ee'

const ContractCallStaking = () => {
  // const bytesReader = new BytesReader(Buffer.from(serializedTx, 'base64'));
  const deserializedTx = deserializeTransaction(serializedTx);

  // const handleSignTx = async () => {
  //   const payload = deserializedTx.payload;
  //   console.log(payload.contractAddress)
  //   if (payload) {
  //     openContractCall({
  //       contractAddress: cvToString(payload.contractAddress),
  //       contractName: cvToString(payload.contractName),
  //       functionName: cvToString(payload.functionName),
  //       functionArgs: payload.functionArgs,
  //     })
  //   }
  // }

  const sign = async () => openSignTransaction({
    network: new StacksMainnet(),
    txHex: serializedTx,
  })


  useEffect(() => {
    console.log('deserializedTx', deserializedTx)
      console.log('contractAddress', (deserializedTx.payload.contractAddress))
  }, [deserializedTx])

  if (!userSession.isUserSignedIn()) {
    return null;
  }

  return (
    <div className="border rounded-sm border-r-emerald-100 p-2  mt-4">
      <p>STX Staking</p>
      {/* <p>{JSON.stringify(deserializedTx.payload)}</p> */}
      <button onClick={sign}>
      handleSignTx
      </button>
    </div>
  );
};

export default ContractCallStaking;
