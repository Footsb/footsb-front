'use client';

import React, { ReactNode, useEffect } from 'react';
import Modal from 'react-modal';

interface Props {
  isOpen: boolean;
  closeAction: () => void;
  children: ReactNode;
}

const defaultStyle = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '280px',
  },
};

const ModalLayout = ({ isOpen, closeAction, children }: Props) => {
  useEffect(() => {
    Modal.setAppElement('#root');

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} style={defaultStyle} onRequestClose={closeAction}>
      {children}
    </Modal>
  );
};

export default ModalLayout;
