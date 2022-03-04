use anchor_lang::prelude::*;

declare_id!("4p7xxfk5gXg6y9fLY6686Cf3JPDVabJg8gwnPfBBoRDE");

#[program]
pub mod solana_dapp {
    use super::*;

    pub fn hello(_ctx: Context<Hello>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Hello {}
