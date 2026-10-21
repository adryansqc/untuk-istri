"use client";

import { useState, useRef } from "react";
import LockScreen from "@/components/LockScreen";
import Hero from "@/components/Hero";
import Wishes from "@/components/Wishes";
import Gallery from "@/components/Gallery";
import Letter from "@/components/Letter";
import Closing from "@/components/Closing";
import MusicPlayer from "@/components/MusicPlayer";
import FadeIn from "@/components/FadeIn";
import TogetherCounter from "@/components/TogetherCounter";
import Petals from "@/components/Petals";
import FromBaby from "@/components/FromBaby";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [withMusic, setWithMusic] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = (playMusic: boolean) => {
    if (playMusic && audioRef.current) {
      audioRef.current.play().catch(() => {
        setPlaying(false);
        return;
      });
      setPlaying(true);
    }
    setWithMusic(playMusic);
    setOpened(true);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <main>
      {!opened && <LockScreen onOpen={handleOpen} />}

      <div className={opened ? "opacity-100" : "opacity-0"}>
        <FadeIn y={60}><Hero /></FadeIn>
        <FadeIn><TogetherCounter startDate="2025-12-28" /></FadeIn>
        <FadeIn><Wishes /></FadeIn>
        <FadeIn><Gallery /></FadeIn>
        <FadeIn><Letter /></FadeIn>
        <FadeIn><FromBaby /></FadeIn>
        <FadeIn><Closing /></FadeIn>
      </div>

      {opened && <Petals />}

      <audio ref={audioRef} src="/ghea-indrawari-1000x.mp3" loop preload="auto" />

      {opened && withMusic && (
        <MusicPlayer playing={playing} onToggle={toggleMusic} />
      )}
    </main>
  );
}