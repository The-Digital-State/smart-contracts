import { BrowserRouter as Router } from "react-router-dom";
import {
  getPhantomWallet,
  getSolflareWallet,
} from "@solana/wallet-adapter-wallets";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { WorkspaceProvider } from "./WorkspaceProvider";
import { MainLayout } from "./components/MainLayout";

function App() {
  const wallets = [getPhantomWallet(), getSolflareWallet()];

  return (
    <Router>
      <WalletProvider wallets={wallets} autoConnect={true}>
        <WorkspaceProvider>
          <MainLayout />
        </WorkspaceProvider>
      </WalletProvider>
    </Router>
  );
}

export default App;
