"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {

  const weddingDate = new Date("2026-08-14T15:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState(
    "Смогу присутствовать"
  );

  useEffect(() => {

    const interval = setInterval(() => {

      const now = new Date();

      const difference = weddingDate - now;

      setTimeLeft({
        days: Math.max(
          0,
          Math.floor(
            difference / (1000 * 60 * 60 * 24)
          )
        ),

        hours: Math.max(
          0,
          Math.floor(
            (difference / (1000 * 60 * 60)) % 24
          )
        ),

        minutes: Math.max(
          0,
          Math.floor(
            (difference / 1000 / 60) % 60
          )
        ),
      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  const sendTelegram = async (e) => {

    e.preventDefault();

    const BOT_TOKEN = "8735338461:AAHfK4-3N9S0tgpUBGudzOPz_Ru9w56sftQ";
    const CHAT_ID = "1959903103";

    const text = `
💌 Новое подтверждение

👤 Имя: ${name}

✅ Ответ:
${attendance}
`;

    try {

      await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
          }),
        }
      );

      alert("Ответ отправлен ✨");

      setName("");

    } catch (error) {

      console.error(error);

      alert("Ошибка отправки 😢");

    }

  };

  return (

    <main className="relative overflow-hidden bg-[#f6f1ea] text-[#5e5148]">

      {/* PAPER */}

      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
        }}
      />

      {/* SIDE LINES */}

      <div className="fixed left-4 top-0 h-full w-[1px] bg-[#ddd1c5]" />
      <div className="fixed left-7 top-0 h-full w-[1px] bg-[#ddd1c5]" />

      <div className="fixed right-4 top-0 h-full w-[1px] bg-[#ddd1c5]" />
      <div className="fixed right-7 top-0 h-full w-[1px] bg-[#ddd1c5]" />

      {/* HERO */}

      <section className="min-h-screen flex items-center justify-center px-6 py-24 relative z-10 overflow-hidden">

        {/* DECOR */}

        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="
            absolute
            top-20
            left-10
            text-[#d8c4b2]
            text-6xl
            opacity-40
          "
        >
          ✦
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-32
            right-10
            text-[#d8c4b2]
            text-5xl
            opacity-30
          "
        >
          ❀
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1.5,
          }}

          className="text-center max-w-5xl"
        >

          <div className="uppercase tracking-[0.45em] text-[#a79c91] text-xs sm:text-sm mb-10">

            Мы женимся

          </div>

          {/* NAMES */}

          <h1
            className="
              text-[72px]
              sm:text-[140px]
              leading-none
              text-[#7b6a5d]
              font-serif
            "
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
          >

            Артем

            <div className="text-[#c9b6a1] text-4xl sm:text-6xl my-2">
              &
            </div>

            Зинира

          </h1>

          <div className="w-32 h-[1px] bg-[#d7c7b7] mx-auto mt-10" />

          {/* TEXT */}

          <p className="mt-12 text-xl sm:text-3xl leading-relaxed max-w-3xl mx-auto text-[#74665d] font-light">

            С огромной радостью приглашаем вас
            разделить вместе с нами
            самый счастливый день нашей жизни

          </p>

          {/* DATE */}

          <div className="mt-20">

            <div className="uppercase tracking-[0.35em] text-[#a79c91] text-xs mb-4">

              Дата свадьбы

            </div>

            <div className="text-5xl sm:text-7xl">

              14 августа 2026

            </div>

          </div>

          {/* TIMER */}

          <div className="grid grid-cols-3 gap-4 mt-16">

            <div className="bg-white/70 backdrop-blur-sm rounded-[30px] p-6 shadow-xl">

              <div className="text-4xl sm:text-5xl">
                {timeLeft.days}
              </div>

              <div className="uppercase tracking-[0.2em] text-xs mt-2 text-[#a79c91]">

                дней

              </div>

            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-[30px] p-6 shadow-xl">

              <div className="text-4xl sm:text-5xl">
                {timeLeft.hours}
              </div>

              <div className="uppercase tracking-[0.2em] text-xs mt-2 text-[#a79c91]">

                часов

              </div>

            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-[30px] p-6 shadow-xl">

              <div className="text-4xl sm:text-5xl">
                {timeLeft.minutes}
              </div>

              <div className="uppercase tracking-[0.2em] text-xs mt-2 text-[#a79c91]">

                минут

              </div>

            </div>

          </div>

        </motion.div>

      </section>

      {/* PLAN */}

      <section className="px-6 pb-24 relative z-10">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
          }}

          className="
            max-w-4xl
            mx-auto
            bg-white/70
            rounded-[40px]
            p-8
            sm:p-14
            shadow-2xl
          "
        >

          <h2 className="text-center text-5xl mb-14">
            План дня
          </h2>

          <div className="space-y-6">

            <a
              href="https://maps.google.com/?q=56.101116,54.219398"
              target="_blank"
              className="
                block
                bg-[#f7f2eb]
                p-8
                rounded-[30px]
                hover:scale-[1.02]
                transition
              "
            >

              <div className="uppercase tracking-[0.3em] text-xs text-[#b29d88]">
                15:00
              </div>

              <div className="text-4xl mt-3">
                🕌 Никах
              </div>

              <div className="mt-4 text-[#74665d]">
                Нефтекамск
              </div>

            </a>

            <a
              href="https://maps.google.com/?q=56.090258,54.251406"
              target="_blank"
              className="
                block
                bg-[#f7f2eb]
                p-8
                rounded-[30px]
                hover:scale-[1.02]
                transition
              "
            >

              <div className="uppercase tracking-[0.3em] text-xs text-[#b29d88]">
                17:00
              </div>

              <div className="text-4xl mt-3">
                🏛 ЗАГС
              </div>

              <div className="mt-4 text-[#74665d]">
                Нефтекамск
              </div>

            </a>

            <a
              href="https://maps.google.com/?q=56.101230,54.296862"
              target="_blank"
              className="
                block
                bg-[#f7f2eb]
                p-8
                rounded-[30px]
                hover:scale-[1.02]
                transition
              "
            >

              <div className="uppercase tracking-[0.3em] text-xs text-[#b29d88]">
                18:00
              </div>

              <div className="text-4xl mt-3">
                🍷 Кафе
              </div>

              <div className="mt-4 text-[#74665d]">
                Нефтекамск
              </div>

            </a>

          </div>

        </motion.div>

      </section>

      {/* RSVP */}

      <section className="px-6 pb-32 relative z-10">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
          }}

          className="
            max-w-3xl
            mx-auto
            bg-white/70
            rounded-[40px]
            p-8
            sm:p-14
            shadow-2xl
          "
        >

          <h2 className="text-center text-5xl mb-10">
            RSVP
          </h2>

          <form
            onSubmit={sendTelegram}
            className="space-y-5"
          >

            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
              className="
                w-full
                p-5
                rounded-2xl
                border
                outline-none
                bg-white
              "
            />

            <select
              value={attendance}
              onChange={(e) =>
                setAttendance(e.target.value)
              }
              className="
                w-full
                p-5
                rounded-2xl
                border
                outline-none
                bg-white
              "
            >

              <option>
                Смогу присутствовать
              </option>

              <option>
                К сожалению не смогу
              </option>

            </select>

            <button
              type="submit"
              className="
                w-full
                bg-[#bfa58c]
                hover:bg-[#ae947c]
                text-white
                py-5
                rounded-2xl
                text-lg
                transition
              "
            >

              Подтвердить присутствие ✨

            </button>

          </form>

        </motion.div>

      </section>

    </main>

  );

}