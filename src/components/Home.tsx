import { useRef, useState, useEffect, ChangeEvent } from 'react';
// import dnms from 'assets/dnms.mp3';
import alarm from '@/assets/alarm.mp3';
import keep from '@/assets/keep.mp3';

import * as s from '@/components/Home.ts';

const Home = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const alarmRef = useRef<HTMLAudioElement>(null);

  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [timeToAlarm, setTimeToAlarm] = useState<Date | false>(false);
  const [timeLast, setTimeLast] = useState<Date>(new Date());

  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);

  const [alarmStatus, setAlarmStatus] = useState<boolean>(false);

  useEffect(() => {
    const time = new Date();
    setHour(time.getHours());
    setMinute(time.getMinutes());
  }, []);

  useEffect(() => {
    audioRef.current?.addEventListener('pause', () => {
      setTimeToAlarm(false);
    });

    audioRef.current?.addEventListener('play', () => {
      setTimeToAlarm(timeLast);
    });

    const alarmHour = timeToAlarm ? timeToAlarm.getHours() : null;
    const alarmMinute = timeToAlarm ? timeToAlarm.getMinutes() : null;

    const timer = setInterval(() => {
      const time = new Date();
      setCurrentTime(time);

      if (timeToAlarm && time.getHours() === alarmHour && time.getMinutes() === alarmMinute) {
        audioRef.current?.pause();
        if (audioRef.current) audioRef.current.currentTime = 0;
        alarmRef.current?.play();
        setAlarmStatus(true);
        setTimeToAlarm(false);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeToAlarm, timeLast]);

  const handleTime = () => {
    if (timeToAlarm) {
      setTimeToAlarm(false);
      audioRef.current?.pause();
      if (audioRef.current) audioRef.current.currentTime = 0;
    } else {
      const time = new Date();
      time.setHours(hour);
      time.setMinutes(minute);

      setTimeToAlarm(time);
      setTimeLast(time);
      audioRef.current?.play();
    }
  };

  const handleAlarm = () => {
    alarmRef.current?.pause();
    if (alarmRef.current) alarmRef.current.currentTime = 0;
    setAlarmStatus(false);
  };

  const handleHourChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHour(Number(e.target.value));
  };

  const handleMinuteChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMinute(Number(e.target.value));
  };

  return (
    <s.Main>
      <s.InputWrapper editable={!alarmStatus && !timeToAlarm}>
        <s.HourInput value={hour} onChange={handleHourChange} />
        <s.MinuteInput value={minute} onChange={handleMinuteChange} />
      </s.InputWrapper>

      {alarmStatus ? (
        <button type="button" onClick={handleAlarm}>
          알람 제거
        </button>
      ) : (
        <button type="button" onClick={handleTime}>
          {timeToAlarm ? '알람 해제' : '알람 설정'}
        </button>
      )}

      <audio ref={audioRef} controls loop style={{ visibility: 'hidden' }}>
        <source src={keep} />
        브라우저가 오디오를 지원하지 않습니다.
      </audio>
      <audio ref={alarmRef} controls loop style={{ visibility: 'hidden' }}>
        <source src={alarm} />
        브라우저가 오디오를 지원하지 않습니다.
      </audio>
      <div>현재 시간: {currentTime.toLocaleTimeString()}</div>
    </s.Main>
  );
};

export default Home;
