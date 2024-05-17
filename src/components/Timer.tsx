import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  const interval = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    const countdownDate = new Date("May 19, 2024 00:00:00").getTime();
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        if (interval.current) clearInterval(interval.current);
      } else {
        setTimerDays(String(days).padStart(2, "0"));
        setTimerHours(String(hours).padStart(2, "0"));
        setTimerMinutes(String(minutes).padStart(2, "0"));
        setTimerSeconds(String(seconds).padStart(2, "0"));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Jeep Avenger - Formulaire" />
        <link rel="icon" href="/logo-jeep-black.png" />
        <title>Jeep Timer</title>
        <meta property="og:image" content="/logo-jeep-black.png" />
      </Head>
      <main className="flex items-center justify-center h-screen">
        <section className="flex flex-col justify-center items-center border w-96 h-40">
          <div className="pb-5">
            <h1 className="text-xl">Countdown Timer</h1>
          </div>
          <div className="flex gap-x-3">
            <div>
              <p>{timerDays}</p>
              <p>Days</p>
            </div>
            <span>:</span>
            <div>
              <p>{timerHours}</p>
              <p>Hours</p>
            </div>
            <span>:</span>
            <div>
              <p>{timerMinutes}</p>
              <p>Minutes</p>
            </div>
            <span>:</span>
            <div>
              <p>{timerSeconds}</p>
              <p>Seconds</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
