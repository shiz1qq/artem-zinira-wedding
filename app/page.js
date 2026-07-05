"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {

  /* DATE */

  const weddingDate = new Date("2026-08-14T15:00:00");

  /* TIMER */

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  /* RSVP */

  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("Смогу присутствовать");
  const [telegram, setTelegram] = useState("");
  const [wishes, setWishes] = useState("");

  /* TIMER */

  useEffect(() => {

    const interval = setInterval(() => {

      const now = new Date();
      const difference = weddingDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  /* TELEGRAM */

  const sendTelegram = async (e) => {

    e.preventDefault();

    const BOT_TOKEN = "8735338461:AAHfK4-3N9S0tgpUBGudzOPz_Ru9w56sftQ";
    const CHAT_ID = "1959903103";

    const text = `
💌 Новое подтверждение на свадьбу

👤 Имя:
${name}

✅ Ответ:
${attendance}

📱 Telegram:
${telegram || "не указан"}

✨ Пожелания:
${wishes || "нет"}
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

      alert("✨ Ответ отправлен!");

      setName("");
      setTelegram("");
      setWishes("");

    } catch (error) {

      console.error(error);

      alert("Ошибка отправки 😢");

    }

  };

  return (

    <main className="relative overflow-hidden bg-[#f8f4ee] text-[#2f2a26]">

      {/* PAPER TEXTURE */}

      <div
        className="
          fixed
          inset-0
          opacity-[0.12]
          pointer-events-none
          z-0
        "
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
        }}
      />

      {/* SIDE LINES */}

      <div className="fixed left-4 top-0 h-full w-[1px] bg-[#d8cfc3] z-0" />
      <div className="fixed left-7 top-0 h-full w-[1px] bg-[#d8cfc3] z-0" />

      <div className="fixed right-4 top-0 h-full w-[1px] bg-[#d8cfc3] z-0" />
      <div className="fixed right-7 top-0 h-full w-[1px] bg-[#d8cfc3] z-0" />

      {/* HERO */}

      <section className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
          className="
            max-w-4xl
            mx-auto
            text-center
          "
        >

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="
              uppercase
              tracking-[0.5em]
              text-[#9b938b]
              text-sm
              mb-8
            "
          >
            Wedding invitation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="
              text-6xl
              sm:text-8xl
              font-light
              leading-tight
            "
            style={{
              fontFamily: "serif",
            }}
          >

            Артем

            <span className="block text-[#c4a484] my-2">
              &
            </span>

            Зинира

          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="
              mt-12
              text-lg
              sm:text-2xl
              leading-relaxed
              max-w-2xl
              mx-auto
              text-[#5e5853]
            "
          >
            С огромной радостью приглашаем вас
            разделить вместе с нами
            самый счастливый день нашей жизни
          </motion.div>

          {/* DATE */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-20"
          >

            <div className="uppercase tracking-[0.4em] text-[#9b938b] text-sm mb-5">
              дата свадьбы
            </div>

            <div className="text-4xl sm:text-6xl font-light">
              14 августа 2026
            </div>

          </motion.div>

          {/* TIMER */}

          <div className="grid grid-cols-3 gap-4 mt-16">

            {[
              {
                value: timeLeft.days,
                label: "дней",
              },

              {
                value: timeLeft.hours,
                label: "часов",
              },

              {
                value: timeLeft.minutes,
                label: "минут",
              },

            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  bg-white/70
                  backdrop-blur-sm
                  rounded-[30px]
                  p-6
                  shadow-xl
                  border
                  border-[#ebe1d5]
                "
              >

                <div className="text-4xl sm:text-5xl font-light">
                  {item.value}
                </div>

                <div className="mt-2 text-[#9b938b] uppercase tracking-[0.2em] text-xs">
                  {item.label}
                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </section>

      {/* PLAN */}

      <section className="relative z-10 px-6 pb-24">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="
            max-w-5xl
            mx-auto
            bg-white/70
            backdrop-blur-sm
            rounded-[40px]
            border
            border-[#ebe1d5]
            p-8
            sm:p-16
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          "
        >

          <h2
            className="
              text-center
              text-5xl
              font-light
              mb-16
            "
          >
            План дня
          </h2>

          <div className="space-y-8">

            {/* NIKAH */}

            <motion.a
              href="https://maps.google.com/?q=56.101116,54.219398"
              target="_blank"
              whileHover={{
                scale: 1.02,
              }}
              className="
                block
                bg-[#f8f4ee]
                rounded-[30px]
                p-8
                transition
              "
            >

              <div className="text-[#b79a7f] uppercase tracking-[0.3em] text-sm">
                15:00
              </div>

              <div className="text-3xl mt-3">
                🕌 Никах
              </div>

              <div className="mt-4 text-[#5e5853] leading-relaxed">
                Нефтекамск
                <br />
                Мечеть
              </div>

            </motion.a>

            {/* ZAGS */}

            <motion.a
              href="https://maps.google.com/?q=56.090258,54.251406"
              target="_blank"
              whileHover={{
                scale: 1.02,
              }}
              className="
                block
                bg-[#f8f4ee]
                rounded-[30px]
                p-8
                transition
              "
            >

              <div className="text-[#b79a7f] uppercase tracking-[0.3em] text-sm">
                17:00
              </div>

              <div className="text-3xl mt-3">
                🏛 ЗАГС
              </div>

              <div className="mt-4 text-[#5e5853] leading-relaxed">
                Нефтекамск
                <br />
                Дворец бракосочетания
              </div>

            </motion.a>

            {/* CAFE */}

            <motion.a
              href="https://maps.google.com/?q=56.101230,54.296862"
              target="_blank"
              whileHover={{
                scale: 1.02,
              }}
              className="
                block
                bg-[#f8f4ee]
                rounded-[30px]
                p-8
                transition
              "
            >

              <div className="text-[#b79a7f] uppercase tracking-[0.3em] text-sm">
                18:00
              </div>

              <div className="text-3xl mt-3">
                🍷 Кафе
              </div>

              <div className="mt-4 text-[#5e5853] leading-relaxed">
                Нефтекамск
                <br />
                Банкетный зал
              </div>

            </motion.a>

          </div>

        </motion.div>

      </section>

      {/* RSVP */}

      <section className="relative z-10 px-6 pb-32">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="
            max-w-3xl
            mx-auto
            bg-white/70
            backdrop-blur-sm
            rounded-[40px]
            border
            border-[#ebe1d5]
            p-8
            sm:p-16
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          "
        >

          <h2
            className="
              text-center
              text-5xl
              font-light
              mb-12
            "
          >
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
              onChange={(e) => setName(e.target.value)}
              required
              className="
                w-full
                p-5
                rounded-2xl
                border
                border-[#ddd2c3]
                bg-white
                outline-none
              "
            />

            <input
              type="text"
              placeholder="@telegram"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
              className="
                w-full
                p-5
                rounded-2xl
                border
                border-[#ddd2c3]
                bg-white
                outline-none
              "
            />

            <select
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              className="
                w-full
                p-5
                rounded-2xl
                border
                border-[#ddd2c3]
                bg-white
                outline-none
              "
            >

              <option>
                Смогу присутствовать
              </option>

              <option>
                К сожалению не смогу
              </option>

            </select>

            <textarea
              rows="5"
              placeholder="Ваши пожелания ✨"
              value={wishes}
              onChange={(e) => setWishes(e.target.value)}
              className="
                w-full
                p-5
                rounded-2xl
                border
                border-[#ddd2c3]
                bg-white
                outline-none
                resize-none
              "
            />

            <button
              type="submit"
              className="
                w-full
                py-5
                rounded-2xl
                bg-[#c4a484]
                text-white
                text-lg
                hover:scale-[1.02]
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