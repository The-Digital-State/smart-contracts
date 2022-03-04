import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolanaDapp } from "../target/types/solana_dapp";

describe("solanaDapp", () => {
  // Configure the client to use specified cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.SolanaDapp as Program<SolanaDapp>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.rpc.hello({});
    console.log("Your hello transaction signature", tx);
  });
});
