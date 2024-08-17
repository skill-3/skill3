import React from "react";

interface Transaction {
  walletAddress: string;
  date: string;
  event: string;
  amount: string;
}

const transactions: Transaction[] = [
  {
    walletAddress: "4030.40",
    date: "18-06-2017 12:38:42",
    event: "ETH/USDT",
    amount: "4030.40",
  },
  {
    walletAddress: "4030.40",
    date: "18-06-2017 12:38:42",
    event: "BTC/USDT",
    amount: "4030.40",
  },
  {
    walletAddress: "4030.40",
    date: "18-06-2017 12:38:42",
    event: "ETH/USDT",
    amount: "4030.40",
  },
  {
    walletAddress: "4030.40",
    date: "18-06-2017 12:38:42",
    event: "BTC/USDT",
    amount: "4030.40",
  },
  {
    walletAddress: "4030.40",
    date: "18-06-2017 12:38:42",
    event: "BTC/USDT",
    amount: "4030.40",
  },
  {
    walletAddress: "4030.40",
    date: "18-06-2017 12:38:42",
    event: "BTC/USDT",
    amount: "4030.40",
  },
  {
    walletAddress: "4030.40",
    date: "18-06-2017 12:38:42",
    event: "BTC/USDT",
    amount: "4030.40",
  },
  {
    walletAddress: "4030.40",
    date: "18-06-2017 12:38:42",
    event: "ETH/USDT",
    amount: "4030.40",
  },
  {
    walletAddress: "4030.40",
    date: "18-06-2017 12:38:42",
    event: "ETH/USDT",
    amount: "4030.40",
  },
  {
    walletAddress: "4030.40",
    date: "18-06-2017 12:38:42",
    event: "ETH/BTC",
    amount: "4030.40",
  },
  {
    walletAddress: "4030.40",
    date: "18-06-2017 12:38:42",
    event: "ETH/BTC",
    amount: "4030.40",
  },
  {
    walletAddress: "4030.40",
    date: "18-06-2017 12:38:42",
    event: "ETH/BTC",
    amount: "4030.40",
  },
  {
    walletAddress: "4030.40",
    date: "18-06-2017 12:38:42",
    event: "BTC/USDT",
    amount: "4030.40",
  },
  {
    walletAddress: "4030.40",
    date: "18-06-2017 12:38:42",
    event: "BTC/USDT",
    amount: "4030.40",
  },
];

const TransactionTable: React.FC = () => {
  return (
    <div className="flex items-start self-start mt-14 text-lg leading-none text-slate-600 max-md:mt-10">
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-8 py-4 text-sm font-bold tracking-wide leading-none uppercase bg-gray-100 text-left">
              Wallet Address
            </th>
            <th className="px-8 py-4 text-sm font-bold tracking-wide leading-none uppercase bg-gray-100 text-left">
              Date
            </th>
            <th className="px-8 py-4 text-sm font-bold tracking-wide leading-none uppercase bg-gray-100 text-left">
              Event
            </th>
            <th className="px-8 py-4 text-sm font-bold tracking-wide leading-none uppercase bg-gray-100 text-left">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-8 py-6 whitespace-nowrap text-lg">
                {transaction.walletAddress}
              </td>
              <td className="px-8 py-6 whitespace-nowrap text-lg">
                {transaction.date}
              </td>
              <td className="px-8 py-6 whitespace-nowrap text-lg">
                {transaction.event}
              </td>
              <td className="px-8 py-6 whitespace-nowrap text-lg">
                {transaction.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
