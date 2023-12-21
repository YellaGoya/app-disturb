import { FC, ReactNode } from 'react';
import Header from '@/components/Header.tsx';

interface ViewGroupProps {
  readonly children: ReactNode;
}

const ViewGroup: FC<ViewGroupProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default ViewGroup;
