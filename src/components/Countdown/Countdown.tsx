import React, { useEffect, useState, useCallback } from 'react';
import countdown from './Countdown.module.css';
import Toast from '../Toast/Toast';

interface CountdownProps {
    timestamp: number
    title: string
}

const Countdown = ({ timestamp, title }: CountdownProps): JSX.Element => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [toastVisible, setToastVisible] = useState(false);
  const showToast = useCallback(() => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 5000);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = timestamp - now;
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timestamp, showToast]);
  useEffect(() => {
    if (timeLeft.hours === 1 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 5000);
    }
  }, [timeLeft.hours, timeLeft.minutes, timeLeft.seconds]);
  return (
    <>
      <p className={countdown.countdown}>{timeLeft.days}d: {timeLeft.hours}h: {timeLeft.minutes}m: {timeLeft.seconds}s</p>
      {toastVisible && <Toast message={`Công việc ${title} còn 1 giờ để hoàn thành`} />}
    </>
  );
};
export default Countdown;
