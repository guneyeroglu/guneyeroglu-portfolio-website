import { FC, PropsWithChildren } from 'react';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Sidebar from '@components/Sidebar';
import BackgroundCircles from '@components/BackgroundCircles';

interface IProps extends PropsWithChildren {}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className='min-h-dvh h-full p-4 flex flex-col items-stretch justify-between'>
      <Header />
      <div className='flex flex-1 justify-start items-stretch'>
        <Sidebar />
        <main className='w-full p-4'>
          {children}
          <BackgroundCircles />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
