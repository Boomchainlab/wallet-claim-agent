import fs from 'fs';
import path from 'path';

const ledgerFile = path.resolve(__dirname, '../agent-ledger/ledger.json');

export function logTransaction(tx: any) {
  let ledger = [];
  if (fs.existsSync(ledgerFile)) {
    ledger = JSON.parse(fs.readFileSync(ledgerFile, 'utf-8'));
  }
  ledger.push({ ...tx, timestamp: new Date().toISOString() });
  fs.writeFileSync(ledgerFile, JSON.stringify(ledger, null, 2));
  console.log('Transaction logged in ledger.');
}
