import { useRef, useState, useEffect, ChangeEvent } from 'react';
// import dnms from 'assets/dnms.mp3';
import alarm from '@/assets/alarm.mp3';
import keep from '@/assets/dnms.mp3';
import speaker from '@/assets/speaker.png';

import * as s from '@/components/Home.ts';

const Home = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const tracks = [keep, alarm];

  const [audioIndex, setAudioIndex] = useState(0);

  const [timeToAlarm, setTimeToAlarm] = useState<Date | false>(false);
  // const [timeLast, setTimeLast] = useState<Date>(new Date());

  const [hour, setHour] = useState<string>('0');
  const [minute, setMinute] = useState<string>('0');

  const [alarmStatus, setAlarmStatus] = useState<boolean>(false);

  // const [controlledBySystem, setControlledBySystem] = useState<boolean>(false);

  useEffect(() => {
    const time = new Date();
    setHour(time.getHours().toString().padStart(2, '0'));
    setMinute(time.getMinutes().toString().padStart(2, '0'));
  }, []);

  useEffect(() => {
    console.log('effect', timeToAlarm);

    if (timeToAlarm) {
      const alarmHour = timeToAlarm ? timeToAlarm.getHours() : null;
      const alarmMinute = timeToAlarm ? timeToAlarm.getMinutes() : null;

      const timer = setInterval(() => {
        const time = new Date();

        if (time.getHours() === alarmHour && time.getMinutes() === alarmMinute) {
          // setControlledBySystem(true);
          setAudioIndex(1);

          setAlarmStatus(true);
          setTimeToAlarm(false);
        }
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [timeToAlarm]);

  // useEffect(() => {
  //   audioRef.current?.addEventListener('pause', () => {
  //     setTimeToAlarm(false);
  //   });

  //   audioRef.current?.addEventListener('play', () => {
  //     if (controlledBySystem) setControlledBySystem(false);
  //     else setTimeToAlarm(timeLast);
  //     console.log('play', controlledBySystem);
  //   });

  //   return () => {
  //     audioRef.current?.removeEventListener('pause', () => {});
  //     audioRef.current?.removeEventListener('play', () => {});
  //   };
  // }, [timeLast, controlledBySystem]);

  useEffect(() => {
    if (audioIndex) {
      audioRef.current?.load();
      audioRef.current?.play();
    }
  }, [audioIndex]);

  const handleTime = () => {
    if (timeToAlarm) {
      setTimeToAlarm(false);
      audioRef.current?.pause();
      if (audioRef.current) audioRef.current.currentTime = 0;
    } else {
      const time = new Date();
      time.setHours(Number(hour));
      time.setMinutes(Number(minute));

      setTimeToAlarm(time);
      // setTimeLast(time);
      // setControlledBySystem(true);
      audioRef.current?.play();
    }
  };

  const handleAlarm = () => {
    audioRef.current?.pause();
    setAudioIndex(0);
    setAlarmStatus(false);
  };

  const handleHourChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value)) {
      const { value } = e.target;

      if (Number(hour) > 9) {
        setHour(value.slice(-1).padStart(2, '0'));
        return;
      }

      if (Number(hour) < 2) {
        setHour(value.slice(1).padStart(2, '0'));
        return;
      }

      if (Number(hour) === 2) {
        if (Number(value.slice(-1)) > 3) {
          setHour(value.slice(-1).padStart(2, '0'));
          return;
        }

        setHour(value.slice(1).padStart(2, '0'));
        return;
      }

      setHour(value.slice(-1).padStart(2, '0'));
    }

    if (e.target.value === '0') setHour('00');
  };

  const handleMinuteChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value)) {
      const { value } = e.target;

      if (Number(minute) > 9) {
        setMinute(value.slice(-1).padStart(2, '0'));
        return;
      }

      if (Number(minute) < 6) {
        setMinute(value.slice(1).padStart(2, '0'));
        return;
      }

      setMinute(value.slice(-1).padStart(2, '0'));
    }

    if (e.target.value === '0') setMinute('00');
  };

  const handleInputClick = (input: HTMLInputElement) => {
    input.setSelectionRange(2, 2);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode > 36 && e.keyCode < 41) e.preventDefault();
  };

  return (
    <s.Main>
      <s.InputWrapper editable={!alarmStatus && !timeToAlarm}>
        <s.HourInput
          value={hour}
          onChange={handleHourChange}
          onClick={(e) => {
            handleInputClick(e.target as HTMLInputElement);
          }}
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
        />
        <p>:</p>
        <s.MinuteInput
          value={minute}
          onChange={handleMinuteChange}
          onClick={(e) => {
            handleInputClick(e.target as HTMLInputElement);
          }}
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
        />
      </s.InputWrapper>

      {alarmStatus ? (
        <button type="button" onClick={handleAlarm}>
          Turn off
        </button>
      ) : (
        <button type="button" onClick={handleTime}>
          {timeToAlarm ? 'Unset alarm' : 'Set alarm'}
        </button>
      )}

      <audio ref={audioRef} controls loop src={tracks[audioIndex]} style={{ display: 'none' }}>
        브라우저가 오디오를 지원하지 않습니다.
      </audio>

      <s.ImgSpeaker src={speaker} alt="speaker" />
    </s.Main>
  );
};

export default Home;
