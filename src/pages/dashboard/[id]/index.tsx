import EventDashboardBtn from '@/components/atoms/buttons/eventDashboardBtn';
import SideBar from '@/components/atoms/sideBar/SideBar';
import CardSection from '@/components/molecules/cardSection/CardSection';
import CreateColumnModal from '@/components/molecules/modals/createColumnModal/CreateColumnModal';
import MyHeader from '@/components/molecules/myHeader/MyHeader';
import styles from '@/styles/dashboard.module.scss';
import React, { useState } from 'react';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleaddColumnButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles['background']}>
      <MyHeader profileImageUrl="/assets/icon/logo.svg" nickname="배유철" />
      <SideBar />
      <section className={styles['section']}>
        <CardSection title="toDo" />
        <CardSection title="onProgress" />
        <CardSection title="done" />
        <div className={styles['newColumnArea']}>
          <EventDashboardBtn
            onClick={handleaddColumnButtonClick}
            name="새로운 컬럼 추가하기"
            type="addColumn"
          />
        </div>
      </section>
      {isModalOpen && (
        <CreateColumnModal onClose={closeModal}></CreateColumnModal>
      )}
    </div>
  );
}