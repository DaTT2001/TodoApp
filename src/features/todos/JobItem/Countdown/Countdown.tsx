import React, { useEffect, useState } from 'react';
import countdown from './Countdown.module.css';
import { CountdownProps, Time } from '../../../../shared/interfaces';
import { toast } from 'react-toastify';
import { checkAndTrimString, getTimeByDistance } from '../../../../shared/util';
import moment from 'moment';
import { MINUTES_MS, SECOND_IN_MINUTE } from '../../../../shared/constants';

const Countdown = ({ timestamp, title, isCompleted }: CountdownProps): JSX.Element => {
  const now = moment().valueOf();
  const distance = timestamp - now;
  const [timeLeft, setTimeLeft] = useState<Time>(getTimeByDistance(distance));
  const [isToastEnabled, setIsToastEnabled] = useState(true);
  const [lastToastTime, setLastToastTime] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment().valueOf();
      const distance = timestamp - now;
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ day: 0, hour: 0, minute: 0, second: 0 });
      } else {
        setTimeLeft(getTimeByDistance(distance));
        const minutes = Math.floor(distance / (MINUTES_MS));
        if (minutes < SECOND_IN_MINUTE && minutes > 0 && !isCompleted && isToastEnabled) {
          if (now - lastToastTime >= 10 * MINUTES_MS) {
            toast.warning(`${checkAndTrimString(title, 30)}: ${minutes} minutes remaining`);
            setLastToastTime(now);
          }
        }
        if (minutes === 0) {
          setIsToastEnabled(false);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timestamp, isCompleted, isToastEnabled, lastToastTime]);
  return (
    <>
      <p className={countdown.countdown}>{timeLeft.day}d: {timeLeft.hour}h: {timeLeft.minute}m: {timeLeft.second}s</p>
    </>
  );
};
export default Countdown;
