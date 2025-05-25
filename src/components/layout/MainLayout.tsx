import React from 'react';
import { Header } from './Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white">
      <Header />
      <main className="relative">
        {children}
      </main>
    </div>
  );
};