import { FC, PropsWithChildren } from 'react';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Sidebar from '@components/Sidebar';
import BackgroundCircles from '@components/BackgroundCircles';

interface IProps extends PropsWithChildren {}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className='min-h-dvh max-h-dvh h-full flex flex-col items-stretch justify-between'>
      <Header />
      <div className='flex flex-1 justify-start items-stretch m-[calc(1rem_+_56px)] mr-0 overflow-hidden'>
        <Sidebar />
        <main className='w-full overflow-y-auto p-2 pr-[calc(0.5rem_+_1rem)]'>
          {children}
          <BackgroundCircles />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
