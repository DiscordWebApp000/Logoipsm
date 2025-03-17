import { FC } from 'react';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiLitecoin, SiBinance, SiSolana } from 'react-icons/si';
import { IconType } from 'react-icons';

interface PortfolioProps {
  isOpen: boolean;
  onClose?: () => void;
}

interface PortfolioItem {
  name: string;
  icon: IconType;
  bgColor: string;
  price: string;
  percentChange: string;
  isPositive: boolean;
  amount: string;
  symbol: string;
}

const Portfolio: FC<PortfolioProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const portfolioItems: PortfolioItem[] = [
    {
      name: "Ethereum",
      icon: FaEthereum,
      bgColor: "#627eea",
      price: "$3,245.03",
      percentChange: "13.40%",
      isPositive: false,
      amount: "0.12543",
      symbol: "ETH"
    },
    {
      name: "Bitcoin",
      icon: FaBitcoin,
      bgColor: "#f7931a",
      price: "$3,245.03",
      percentChange: "13.40%",
      isPositive: false,
      amount: "0.12543",
      symbol: "BTC"
    },
    {
      name: "Litecoin",
      icon: SiLitecoin,
      bgColor: "#bfbbbb",
      price: "$3,245.03",
      percentChange: "14.25%",
      isPositive: true,
      amount: "0.12543",
      symbol: "LTC"
    },
    {
      name: "Solana",
      icon: SiSolana,
      bgColor: "#14f195",
      price: "$3,245.03",
      percentChange: "2.00%",
      isPositive: false,
      amount: "0.12543",
      symbol: "SOL"
    },
    {
      name: "Binance Coin",
      icon: SiBinance,
      bgColor: "#f3ba2f",
      price: "$3,245.03",
      percentChange: "12.00%",
      isPositive: true,
      amount: "0.12543",
      symbol: "BNB"
    }
  ];

  return (
    <div className="h-full w-full bg-[#2c2e38] text-white flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="p-6 border-b border-gray-700 flex items-center justify-between">
        <h2 className="text-2xl font-bold">My Portfolio</h2>
      </div>

      {/* Portfolio items */}
      <div className="flex-1 p-4">
        <div className="space-y-4">
          {portfolioItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center justify-between p-3 bg-[#3a3c47] rounded-lg">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3`} style={{ backgroundColor: item.bgColor }}>
                    <Icon className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-400">{item.price}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm ${item.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {item.isPositive ? '+' : '-'}{item.percentChange}
                  </p>
                  <p className="text-sm text-gray-400">{item.amount} {item.symbol}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 