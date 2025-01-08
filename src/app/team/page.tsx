'use client';

import { useState } from 'react';

import { Cta } from '@/components/atoms/buttons';
import ModalLayout from '@/components/atoms/Modal';
import { TeamList } from '@/components/organism/listCard';
import { PageLayout } from '@/components/organism/common';
import { TeamSearchFilter } from '@/components/organism/modalContents';

const Team = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeFilterModal = () => {
    setIsOpenModal(false);
  };

  return (
    <PageLayout>
      <div className="flex flex-row-reverse p-2">
        <Cta
          value="조건 검색"
          style="link"
          color="primary"
          size="s"
          clickAction={() => {
            setIsOpenModal((prev) => !prev);
          }}
        />
      </div>
      <ul className="flex flex-col px-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => {
          return <TeamList key={el} />;
        })}
      </ul>
      <ModalLayout isOpen={isOpenModal} closeAction={closeFilterModal}>
        <TeamSearchFilter close={closeFilterModal} />
      </ModalLayout>
    </PageLayout>
  );
};

export default Team;
