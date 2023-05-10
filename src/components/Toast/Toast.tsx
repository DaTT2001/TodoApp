import React from 'react';
import toast from './Toast.module.css'

interface ToastProps {
  message: string;
}

const Toast = ({ message }: ToastProps) => {
  return (
    <div className={toast.toast}>
      <p>{message}</p>
    </div>
  );
};

export default Toast;