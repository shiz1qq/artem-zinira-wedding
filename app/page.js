"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const TOKEN = "8735338461:AAHfK4-3N9S0tgpUBGudzOPz_Ru9w56sftQ";
const CHAT_ID = "1959903103";

function Countdown() {
  const weddingDate = new Date("2026-08-14T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 justify-center mt-6 text-center">
      <div className="bg-white/70 px-5 py-3 rounded-3xl shadow">
        <div className="text-3xl font-bold text-pink-500">
          {timeLeft.days}
        </div>
        <div className="text-sm">дней</div>
      </div>

      <div className="bg-white/70 px-5 py-3 rounded-3xl shadow">
        <div className="text-3xl font-bold text-pink-500">
          {timeLeft.hours}
        </div>
        <div className="text-sm">часов</div>
      </div>

      <div className="bg-white/70 px-5 py-3 rounded-3xl shadow">
        <div className="text-3xl font-bold text-pink-500">
          {timeLeft.minutes}
        </div>
        <div className="text-sm">минут</div>
      </div>
    </div>
  );
}

function PlaceCard({ emoji, title, time, link, color }) {
  return (
    <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
      <motion.a
        href={link}
        target="_blank"
        whileHover={{ scale: 1.03 }}
        className={`block rounded-[35px] p-6 text-white shadow-2xl ${color}`}
      >
        <div className="text-5xl mb-3">{emoji}</div>

        <h3 className="text-3xl font-black mb-2">{title}</h3>

        <p className="text-xl opacity-90 mb-4">{time}</p>

        <div className="bg-white text-black inline-block px-4 py-2 rounded-full text-sm font-bold">
          Открыть маршрут
        </div>
      </motion.a>
    </Tilt>
  );
}

export default function Home() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendRSVP() {
    if (!name) return;

    setLoading(true);

    const text = `
💌 Новое подтверждение!

👤 Имя: ${name}
✅ Будет на свадьбе Артема и Зиниры
`;

    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
      }),
    });

    setLoading(false);
    alert("Спасибо! Мы вас ждем 💖");
    setName("");
  }

  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll bg-[#f5f1eb] text-[#2d2d2d]">

    {/* HERO */}

<section className="snap-start min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 text-center bg-[#f5f1eb]">

  {/* DECOR */}

  <div className="absolute top-10 left-10 text-pink-400 text-6xl rotate-12">
    ✦
  </div>

  <div className="absolute bottom-20 right-10 text-blue-400 text-5xl -rotate-12">
    ✦
  </div>

  <div className="absolute top-40 right-20 text-yellow-400 text-4xl">
    ♥
  </div>

  {/* GROOM */}

  <motion.div
    initial={{ opacity: 0, x: -100, rotate: -15 }}
    animate={{ opacity: 1, x: 0, rotate: -8 }}
    transition={{ duration: 1 }}
    className="absolute left-2 md:left-10 bottom-10 z-20"
  >

    <div className="absolute -top-8 left-2 text-blue-500 text-3xl font-black rotate-[-8deg]">
      жених
    </div>

    <div className="bg-white p-3 rounded-[35px] shadow-2xl rotate-[-8deg]">

      <img
        src="/groom.jpg"
        alt="Артем"
        className="w-40 md:w-56 rounded-[25px]"
      />

    </div>

  </motion.div>

  {/* BRIDE */}

  <motion.div
    initial={{ opacity: 0, x: 100, rotate: 15 }}
    animate={{ opacity: 1, x: 0, rotate: 8 }}
    transition={{ duration: 1 }}
    className="absolute right-2 md:right-10 top-20 z-20"
  >

    <div className="absolute -top-8 right-2 text-pink-500 text-3xl font-black rotate-[8deg]">
      невеста
    </div>

    <img
      src="/bride.png"
      alt="Зинира"
      className="w-44 md:w-64 drop-shadow-2xl"
    />

  </motion.div>

  {/* TEXT */}

  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-5xl md:text-8xl font-black leading-tight z-10"
  >
    <span className="text-blue-500">Мы</span>{" "}
    <span className="text-pink-500">женимся!</span>
  </motion.h1>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    className="mt-8 text-xl md:text-2xl max-w-2xl leading-relaxed z-10"
  >
    Дорогие и близкие!
    <br />
    Приглашаем разделить этот особенный день вместе с нами
  </motion.p>

  <div className="mt-10 text-5xl font-black text-pink-500 z-10">
    14 августа 2026
  </div>

  <Countdown />

</section>
{/* NAMES */}

<section className="snap-start min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

  <div className="absolute top-20 left-10 text-pink-400 text-6xl rotate-12">
    ♥
  </div>

  <div className="absolute bottom-20 right-10 text-blue-400 text-5xl -rotate-12">
    ✦
  </div>

  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="text-center"
  >

    <div className="text-2xl md:text-3xl text-gray-500 mb-6 tracking-[0.3em] uppercase">
      wedding day
    </div>

    <h2 className="text-6xl md:text-9xl font-black leading-none">

      <span className="text-blue-500 block rotate-[-2deg]">
        Артем
      </span>

      <span className="text-pink-400 text-5xl md:text-7xl block my-4">
        &
      </span>

      <span className="text-pink-500 block rotate-[2deg]">
        Зинира
      </span>

    </h2>

    <p className="mt-10 text-xl md:text-2xl text-gray-600 max-w-xl leading-relaxed">
      Один день.
      <br />
      Одна история.
      <br />
      И целая жизнь впереди ✨
    </p>

  </motion.div>

</section>

      {/* PLAN */}

      <section className="snap-start min-h-screen px-6 py-24">

        <h2 className="text-5xl font-black text-center mb-16">
          План дня
        </h2>

        <div className="max-w-3xl mx-auto flex flex-col gap-8">

          <PlaceCard
            emoji="🕌"
            title="Никах"
            time="15:00"
            color="bg-pink-400"
            link="https://yandex.ru/maps/?pt=54.219398,56.101116&z=17&l=map"
          />

          <PlaceCard
            emoji="🏛"
            title="ЗАГС"
            time="17:00"
            color="bg-blue-400"
            link="https://yandex.ru/maps/?pt=54.251406,56.090258&z=17&l=map"
          />

          <PlaceCard
            emoji="🍽"
            title="Кафе"
            time="18:00"
            color="bg-green-400"
            link="https://yandex.ru/maps/?pt=54.296862,56.101230&z=17&l=map"
          />

        </div>
      </section>

      {/* DRESS CODE */}

      <section className="snap-start min-h-screen flex items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white/70 rounded-[40px] p-10 max-w-2xl shadow-2xl"
        >
          <h2 className="text-5xl font-black text-blue-500 mb-8">
            какой дресс-код?
          </h2>

          <p className="text-2xl leading-relaxed">
            Никаких рамок, только красивые образы.
            <br />
            <span className="text-pink-500 font-bold">
              Белый цвет уже занят
            </span>
            , а яркие цвета и шорты — в заслуженном отпуске ✨
          </p>
        </motion.div>
      </section>

      {/* GIFTS */}

      <section className="snap-start min-h-screen flex items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/70 rounded-[40px] p-10 max-w-2xl shadow-2xl text-center"
        >
          <h2 className="text-5xl font-black text-blue-500 mb-8">
            что дарить?
          </h2>

          <p className="text-2xl leading-relaxed">
            Самым ценным подарком для нас станет вклад
            в бюджет нашей молодой семьи 💖
          </p>
        </motion.div>
      </section>

      {/* RSVP */}

      <section className="snap-start min-h-screen flex items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[40px] p-10 shadow-2xl max-w-xl w-full"
        >
          <h2 className="text-5xl font-black text-center mb-8">
            RSVP
          </h2>

          <p className="text-center mb-6 text-lg">
            Подтвердите своё присутствие до 01.08.2026
          </p>

          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-5 rounded-2xl border text-xl mb-6"
          />

          <button
            onClick={sendRSVP}
            disabled={loading}
            className="w-full bg-pink-500 hover:bg-pink-600 transition text-white py-5 rounded-2xl text-xl font-bold"
          >
            {loading ? "Отправляем..." : "Подтвердить присутствие"}
          </button>
        </motion.div>
      </section>

      {/* CONTACT */}

      <section className="snap-start min-h-screen flex items-center justify-center px-6">

        <div className="text-center">

          <h2 className="text-5xl font-black mb-10">
            связь с нами
          </h2>

          <div className="flex flex-col gap-6 text-2xl">

            <a
              href="tel:89196036811"
              className="bg-white px-8 py-5 rounded-full shadow-xl hover:scale-105 transition"
            >
              📞 8 (919) 603-68-11
            </a>

            <a
              href="https://t.me/shizqw"
              target="_blank"
              className="bg-blue-500 text-white px-8 py-5 rounded-full shadow-xl hover:scale-105 transition"
            >
              Telegram: @shizqw
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}