import { FC, ReactNode } from 'react';
import { Header, Main } from '@/Global';

interface ViewGroupProps {
  readonly children: ReactNode;
}

const ViewGroup: FC<ViewGroupProps> = ({ children }) => {
  return (
    <>
      <Header>header</Header>
      <Main>{children}</Main>
    </>
  );
};

export default ViewGroup;
