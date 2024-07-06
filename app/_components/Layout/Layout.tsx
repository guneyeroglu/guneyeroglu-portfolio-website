import { FC, PropsWithChildren } from 'react';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Sidebar from '@components/Sidebar';
import BackgroundCircles from '@components/BackgroundCircles';

interface IProps extends PropsWithChildren {}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className='h-dvh flex flex-col items-stretch justify-between'>
      <Header />
      <div className='flex flex-1 justify-start items-stretch overflow-hidden'>
        <Sidebar />
        <main className='relative w-full overflow-y-auto p-[3rem_4rem_3rem_3rem] max-md:p-[2rem_3rem_2rem_2rem] max-xs:p-[1rem_1.5rem_1rem_0.5rem]'>
          {children}
          <BackgroundCircles />
        </main>
        <div className='sticky inset-0 right-4 w-[1px] bg-divider' />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
