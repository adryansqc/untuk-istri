"use client";

import { useState } from "react";
import confetti from "canvas-confetti";

export default function Letter() {
  const [opened, setOpened] = useState(false);

  const handleOpenLetter = () => {
    setOpened(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#E8B4B8", "#C9A96E", "#FFDAB9", "#B5838D"],
    });
  };

  return (
    <section className="bloom-section flex flex-col items-center">
      <h2 className="font-script text-4xl md:text-5xl text-[#B5838D] mb-12">
        Surat
      </h2>

      {!opened ? (
        <button
          onClick={handleOpenLetter}
          className="group flex flex-col items-center transition-transform duration-300 hover:scale-105"
        >
          <div className="w-40 h-28 rounded-md bg-[#E8B4B8] shadow-lg flex items-center justify-center text-3xl relative">
            <div className="absolute inset-x-0 top-0 h-0 border-l-[80px] border-r-[80px] border-t-[56px] border-l-transparent border-r-transparent border-t-[#DCA0A4] rounded-t-md" />
            <span className="relative z-10">✉️</span>
          </div>
          <p className="mt-4 text-sm text-[#8A7B72] tracking-wide">
            klik untuk buka surat
          </p>
        </button>
      ) : (
        <div className="max-w-lg w-full bg-[#FFFBF6] border border-[#E8B4B8]/40 rounded-lg shadow-md p-8 md:p-12 animate-[fadeIn_0.8s_ease]">
          <p className="font-script text-3xl text-[#B5838D] mb-6">
            Untuk istriku tersayang,
          </p>

          <p className="text-[#5C4F48] leading-relaxed mb-4">
            Assalamualaikum, istri Mas yang cantik, yang baik, yang imut. Alhamdulillah,
            jaza killahukhairo. Terima kasih sudah hadir dan menjadi rumah untuk Mas.
            Terima kasih untuk setiap tawa, setiap pelukan, dan setiap hari yang adek
            lewati bersama Mas.
          </p>

          <p className="text-[#5C4F48] leading-relaxed mb-4">
            Terima kasih sudah sabar menghadapi Mas, sudah menemani Mas di saat senang
            maupun susah, dan sudah menjadi tempat pulang yang paling nyaman. Mas tau,
            jadi istri Mas bukan hal yang mudah. Tapi adek selalu berusaha, selalu ada,
            dan selalu memilih untuk tetap tinggal. Itu yang membuat Mas semakin yakin,
            bahwa adek adalah hadiah terindah yang Allah titipkan untuk Mas.
          </p>

          <p className="text-[#5C4F48] leading-relaxed mb-4">
            Mas juga mau berterima kasih untuk hal-hal kecil yang mungkin sering
            terlewat. Terima kasih sudah mengingatkan Mas waktu lupa, 
            dan selalu peduli tanpa harus diminta. Terima kasih sudah
            menjadi istri yang begitu tulus, yang tidak pernah lelah berbuat baik. 
            Mas sadar, semua yang adek lakukan itu bukan kewajiban, tapi bentuk cinta. 
            Dan Mas sangat bersyukur, Allah memilihkan adek untuk Mas.
            
          </p>

          <p className="text-[#5C4F48] leading-relaxed mb-4">
            Mas juga ingin bilang, adek itu luar biasa. adek cantik bukan hanya dari
            wajah, tapi juga dari hati yang baik, sabar yang panjang, dan cara adek 
            menyayangi orang-orang di sekitar adek. adek kuat, adek hebat, dan adek jauh
            lebih baik dari yang kadang adek kira. Mas bangga punya istri seperti adek.
            Mas bangga bisa memanggil adek istriku.
          </p>

          <p className="text-[#5C4F48] leading-relaxed mb-4">
            Di hari spesial adek ini, Mas ingin mengucapkan selamat ulang tahun. Semoga
            Allah selalu menjaga adek, memberikan kesehatan, memudahkan setiap urusan adek,
            melimpahkan rezeki, dan mengabulkan semua doa-doa baik yang adek simpan
            dalam hati. Semoga adek selalu bahagia, selalu tersenyum, dan selalu
            dikelilingi oleh orang-orang yang menyayangi adek.
          </p>

          <p className="text-[#5C4F48] leading-relaxed mb-4">
            Mas mau minta maaf. Minta maaf untuk semua kesalahan yang pernah Mas buat,
            baik yang adek sadari maupun yang mungkin tidak. Minta maaf untuk kata-kata
            Mas yang kadang keras, untuk sikap Mas yang kadang egois, untuk waktu-waktu
            di mana Mas lebih sibuk dengan diri sendiri daripada dengerin adek. Minta
            maaf kalau Mas belum bisa menjadi suami yang adek harapkan, belum bisa
            memberikan yang terbaik, dan belum bisa membuat adek selalu tersenyum. Mas tahu,
            tidak semua luka bisa sembuh hanya dengan kata "maaf". Tapi itulah yang hanya mas 
            bisa lakukan 
          </p>

          <p className="text-[#5C4F48] leading-relaxed mb-4">
            Minta maaf kalau selama ini Mas kurang peka terhadap perasaan adek. Minta maaf
            kalau Mas sering lupa hal-hal kecil yang sebenarnya penting untuk adek. Minta
            maaf kalau Mas belum bisa menjadi tempat bercerita yang nyaman, belum bisa
            menjadi pendengar yang baik, dan belum bisa menjadi suami yang selalu ada
            saat adek butuh. Mas sadar, menjadi istri Mas tidak selalu mudah. Dan Mas
            benar-benar minta maaf untuk itu.
          </p>

          <p className="text-[#5C4F48] leading-relaxed mb-4">
            Tapi satu hal yang pasti, Mas akan selalu berusaha menjadi yang terbaik
            untuk adek, untuk kita, dan untuk keluarga kecil kita. Mas akan terus belajar,
            terus memperbaiki diri, dan terus berusaha menjadi suami yang lebih baik.
            Bukan hanya untuk adek, tapi untuk kita, dan untuk masa depan yang ingin kita
            bangun bersama.
          </p>

          <p className="text-[#5C4F48] leading-relaxed mb-4">
            Dan untuk Dedek Lila, anak kita yang sedang tumbuh di dalam perut ibu, Mas
            juga ingin berpesan. Dedek, ini Ayah. Ayah sayang sama Dedek, bahkan sebelum
            Dedek lahir ke dunia. Ayah selalu berdoa, semoga Dedek tumbuh sehat, kuat,
            dan selamat sampai hari kelahiran nanti. Ayah dan Ibu sudah tidak sabar
            menunggu Dedek, ingin mendengar tangis pertama Dedek, ingin memeluk Dedek,
            dan ingin menemani setiap langkah Dedek tumbuh besar. Dedek adalah
            hadiah terindah kedua yang Allah titipkan untuk Ayah, setelah Ibu. Ayah akan
            selalu menjaga Ibu, menjaga Dedek, dan menjaga keluarga kecil kita. Tumbuhlah
            dengan sehat, sempurna. Ayah dan Ibu tunggu dedek lila dengan penuh cinta.
          </p>

          <p className="text-[#5C4F48] leading-relaxed mb-8">
            Mas Sayang sama adek, dedek lila, hari ini, esok, dan selamanya.
          </p>

          <p className="font-script text-2xl text-[#C9A96E] text-right">
            — dari suami adek
          </p>
        </div>
      )}
    </section>
  );
}
