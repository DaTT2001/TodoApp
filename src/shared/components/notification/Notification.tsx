import React from 'react';
import ReactModal from 'react-modal';
import { CustomModalProps } from '../../interfaces';
import { NOTIFICATION_CONTENT, NOTIFICATION_OVERLAY } from '../../constants';

const Notification = ({ isOpen, onRequestClose, contentLabel, messege }: CustomModalProps): JSX.Element => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      style={{
        content: NOTIFICATION_CONTENT,
        overlay: NOTIFICATION_OVERLAY
      }}
    >
      {messege}
    </ReactModal>
  );
};

export default Notification;
