import { useEffect, useRef, useState } from 'react'
import { Music, VolumeX } from 'lucide-react'
import audioSrc from '../../assets/Audio/Jiyaa-Song.mp3'
import './AudioPlayer.scss'

function AudioPlayer() {
  const audioRef = useRef(null)
  // Driven entirely by the real audio play/pause events — never out of sync
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    audio.volume = 0.45

    // Keep UI state perfectly in sync with what the audio element actually does
    const onPlay  = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    audio.addEventListener('play',  onPlay)
    audio.addEventListener('pause', onPause)

    const attemptPlay = () => audio.play().catch(() => {})

    // Try autoplay immediately (works when browser policy allows it)
    attemptPlay()

    // Fallback: as soon as the user interacts with anything on the page,
    // start audio if it's still paused — this covers the autoplay-blocked case
    const onFirstInteract = () => {
      if (audio.paused) attemptPlay()
    }
    document.addEventListener('click',      onFirstInteract, { once: true })
    document.addEventListener('touchstart', onFirstInteract, { once: true, passive: true })
    document.addEventListener('scroll',     onFirstInteract, { once: true, passive: true })

    return () => {
      audio.removeEventListener('play',  onPlay)
      audio.removeEventListener('pause', onPause)
      document.removeEventListener('click',      onFirstInteract)
      document.removeEventListener('touchstart', onFirstInteract)
      document.removeEventListener('scroll',     onFirstInteract)
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    // Just call the native method — the play/pause event listeners update state
    if (audio.paused) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }

  return (
    <>
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />

      <button
        className={`audio-btn${isPlaying ? ' audio-btn--playing' : ''}`}
        onClick={toggle}
        aria-label={isPlaying ? 'Music playing — click to pause' : 'Music paused — click to play'}
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        <span className="audio-btn__icon">
          {isPlaying ? <Music size={16} strokeWidth={2} /> : <VolumeX size={16} strokeWidth={2} />}
        </span>
        <span className="audio-btn__ripple" />
      </button>
    </>
  )
}

export default AudioPlayer
