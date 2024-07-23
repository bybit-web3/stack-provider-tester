import "./App.css";
import ConnectWallet from "./components/ConnectWallet";
import ConnectWithoutAuth from "./components/ConnectWithoutAuth";
import ContractCallVote from "./components/ContractCallVote";
import SignMessage from "./components/SignMessage";
import SignMessage2 from "./components/SignMessage2";
import StxTransfer from "./components/StxTransfer";
import StxTransfer2 from "./components/StxTransfer2";
import StxSignStakingTx from "./components/StxSignStakingTx";

function App() {
  return (
    <>
      <h2 className="mb-4">Stacks.js 👋</h2>

      {/* ConnectWallet file: `./src/components/ConnectWallet.js` */}
      <ConnectWallet />
      
      {/* ConnectWithoutAuth file: `./src/components/ConnectWithoutAuth.js` */}
      <ConnectWithoutAuth />

      {/* ContractCallVote file: `./src/components/ContractCallVote.js` */}
      <ContractCallVote />

      <SignMessage />
      <SignMessage2 />

      <StxTransfer />
      <StxTransfer2 />
      <StxSignStakingTx />

      <div>
        <a
          className="App-link-stacks"
          href="https://docs.hiro.so/stacks.js/overview"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn to build on Stacks
        </a>
      </div>
      <div>
        <a
          className="App-link-stacks"
          href="https://github.com/hirosystems/stacks.js"
          rel="noopener noreferrer"
          target="_blank"
        >
          Visit the official Stacks.js repo
        </a>
      </div>

      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

  <div>
    Password: <input type="password" id="myInput" /><br /><br />
  </div>
    </>
  );
}

export default App;
