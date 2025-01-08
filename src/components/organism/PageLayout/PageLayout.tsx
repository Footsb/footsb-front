import { ReactNode } from 'react';
import { SearchBox } from '@/components/molecules';
import { ToastContainer } from 'react-toastify';
import Gnb from '../Gnb';

interface Props {
  children: ReactNode;
}

const PageLayout = ({ children }: Props) => {
  return (
    <main className="relative max-w-[390px] min-w-[280px] mx-auto overscroll-none">
      <SearchBox />
      <article className="pb-24">{children}</article>
      <Gnb />
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        closeButton={true}
        rtl={false}
        draggable
        stacked
        closeOnClick
        theme="light"
      />
    </main>
  );
};

export default PageLayout;
