import { FC, PropsWithChildren } from 'react';

import Footer from '@components/Footer';
import Header from '@components/Header';
import Sidebar from '@components/Sidebar';

interface IProps extends PropsWithChildren {}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <main className='min-h-dvh h-full p-4 flex flex-col items-stretch justify-between'>
      <Header />
      <div className='flex flex-1 justify-start items-stretch'>
        <Sidebar />
        <main className='w-full p-2'>{children}</main>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
