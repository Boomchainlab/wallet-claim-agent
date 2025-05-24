import TelegramBot from 'node-telegram-bot-api';
import { claimSolanaTokens, claimEvmTokens } from './claim';

const token = process.env.TELEGRAM_BOT_TOKEN!;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/autoclaim/, async (msg) => {
  const chatId = msg.chat.id;
  const solReceiver = process.env.SOLANA_RECEIVER_WALLET!;
  const evmReceiver = process.env.EVM_RECEIVER_WALLET!;
  const evmPrivateKey = process.env.EVM_PRIVATE_KEY!;

  try {
    await claimSolanaTokens(solReceiver);
    await claimEvmTokens(evmReceiver, evmPrivateKey);
    bot.sendMessage(chatId, 'Auto claim executed successfully.');
  } catch (error) {
    bot.sendMessage(chatId, `Error during auto claim: ${error.message}`);
  }
});
