import { FC } from 'react';
import { FiGrid, FiMessageCircle, FiRepeat, FiSettings, FiLogOut, FiX } from 'react-icons/fi';
import { FiCreditCard } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiFileText } from 'react-icons/fi';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="h-full w-full bg-[#222430] text-white flex flex-col">
      {/* Logo and close button */}
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-[#4285f4] mr-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.92993 4.93005L19.0699 19.0701" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-xl font-bold">Logoipsm</h1>
        </div>
       
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-6">
        <ul>
          <li className="mb-2">
            <Link href="#" className="flex items-center py-3 px-6 bg-[#4285f4] text-white">
              <FiGrid className="mr-3" size={20} />
              <span>Overview</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="flex items-center py-3 px-6 text-gray-400 hover:text-white">
              <FiMessageCircle className="mr-3" size={20} />
              <span>QAI</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="flex items-center py-3 px-6 text-gray-400 hover:text-white">
              <FiRepeat className="mr-3" size={20} />
              <span>Transactions</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="flex items-center py-3 px-6 text-gray-400 hover:text-white">
              <FiCreditCard className="mr-3" size={20} />
              <span>Wallet</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="flex items-center py-3 px-6 text-gray-400 hover:text-white">
              <FiFileText className="mr-3" size={20} />
              <span>News</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link href="#" className="flex items-center py-3 px-6 text-gray-400 hover:text-white">
              <FiMail className="mr-3" size={20} />
              <span>Mail Box</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Bottom actions */}
      <div className="mt-auto mb-6">
        <ul>
          <li className="mb-2">
            <Link href="#" className="flex items-center py-3 px-6 text-gray-400 hover:text-white">
              <FiSettings className="mr-3" size={20} />
              <span>Setting</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center py-3 px-6 text-gray-400 hover:text-white">
              <FiLogOut className="mr-3" size={20} />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar; 