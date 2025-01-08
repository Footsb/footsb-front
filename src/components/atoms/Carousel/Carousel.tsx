import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Carousel = ({ children }: Props) => {
  return (
    <div className="p-4 w-full overflow-x-scroll scrollBarHide">
      <ul className="flex gap-4 pr-4 w-max">{children}</ul>
    </div>
  );
};

export default Carousel;
