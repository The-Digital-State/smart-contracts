import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import SayHello from "./SayHello";

export function MainLayout() {
  return (
    <div className="w-full flex flex-col items-center space-y-2 px-8 py-6">
      <div>
        {/* Connect wallet */}
        <WalletModalProvider>
          <WalletMultiButton></WalletMultiButton>
        </WalletModalProvider>
      </div>
      <SayHello />
    </div>
  );
}
