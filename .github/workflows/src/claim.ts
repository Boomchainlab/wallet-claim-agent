import { Connection, PublicKey, Transaction } from '@solana/web3.js';
import { ethers } from 'ethers';

const SOLANA_RPC = process.env.SOLANA_RPC || 'https://api.mainnet-beta.solana.com';
const EVM_RPC = process.env.EVM_RPC || 'https://mainnet.infura.io/v3/YOUR_INFURA_KEY';

const solanaConnection = new Connection(SOLANA_RPC);
const evmProvider = new ethers.providers.JsonRpcProvider(EVM_RPC);

export async function claimSolanaTokens(receiver: string) {
  // Implement Solana token claim logic here
  const pubkey = new PublicKey(receiver);
  // ... create and send transactions
  console.log(`Claimed Solana tokens to ${receiver}`);
}

export async function claimEvmTokens(receiver: string, privateKey: string) {
  const wallet = new ethers.Wallet(privateKey, evmProvider);
  // Implement EVM token claim logic here
  // e.g., calling contract methods to claim tokens
  console.log(`Claimed EVM tokens to ${receiver}`);
}
