import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import vidioWishes from "../assets/videos/Wishes.mp4";

const SpecialWishes = ({ isIOS }) => {
  const [showHeart, setShowHeart] = useState(false);

  const wishes = `
Selamat ulang tahun, sayang. 🤍

Terima kasih sudah hadir di hidupku dan menjadi salah satu alasan aku tersenyum setiap hari. Semoga di usia yang baru ini semua doa, harapan, dan cita-cita kamu satu per satu bisa terwujud. Semoga kamu selalu diberi kesehatan, kebahagiaan, rezeki yang berkah, dan selalu dalam lindungan Allah.

Aku bangga punya kamu sayangku. Terima kasih karena sudah selalu berusaha, menguatkanku, dan membuat hari-hariku terasa lebih indah. Semoga hubungan kita juga semakin dewasa, semakin saling mengerti, dan semoga Allah mengizinkan kita untuk terus bersama sampai waktu yang tepat.

Ingat ya, apa pun yang terjadi, aku akan selalu mendukungmu dan mendoakan yang terbaik untuk kamu..Semoga hari ini menjadi awal dari tahun yang penuh kebahagiaan dan keberkahan. Aamiin

Happy Birthday, cintaku. Aku sayang kamu, hari ini, besok, dan sampai selamanya. ❤️

`
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Pesan Spesial Untukmu
        </h1>

         <div className="mb-8">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    webkit-playsinline="true"
                    x-webkit-airplay="allow"
                    className="w-full max-w-md mx-auto rounded-lg shadow-xl"
                  >
                    <source src={vidioWishes} type="video/mp4" />
                  </video>
                </div>

        <motion.div
          whileHover={{ scale: isIOS ? 1 : 1.01 }}
          className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8"
        >
          <div className="prose max-w-none">
            {wishes.split("\n").map((paragraph, i) => (
              <p key={i} className="text-pink-800 mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: isIOS ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHeart(!showHeart)}
            className="relative overflow-hidden bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            <span className="button-text">
              {showHeart ? "Sembunyikan Cintaku" : "Lihat Cintaku"}
            </span>
          </motion.button>
        </div>

        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            >
              <motion.div
                className="relative text-pink-500"
                animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-[12rem] select-none text-center">❤️</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg">
                  Dikdik Alimudin Dzulyadaen Ijazi💖
                </div>
                <div className="text-white text-lg text-center mt-4">
                 My Heart Is Only for You, Honey. 🥹
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SpecialWishes;
