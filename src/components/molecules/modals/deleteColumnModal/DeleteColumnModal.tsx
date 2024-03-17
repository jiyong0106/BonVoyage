import React, { useState } from 'react';
import styles from './deleteColumnModal.module.scss';
import Button from '@/components/atoms/buttons/button';

interface ModalProps {
  onClose: () => void;
}

export default function DeleteColumnModal({ onClose }: ModalProps) {
  return (
    <div className={styles['cardDetailModal']}>
      <div className={styles['modalContent']}>
        <h1 className={styles['modalTitle']}>컬럼의 모든 카드가 삭제됩니다.</h1>

        <div className={styles['buttonArea']}>
          <Button
            name="취소"
            type="modal"
            color="white"
            onClick={onClose}
          ></Button>
          <Button name="삭제" type="modal" color="blue" />
        </div>
      </div>
    </div>
  );
}
