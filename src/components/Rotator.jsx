import { useEffect, useRef, useState } from 'react'

const SPECIALTIES = [
  'Front-End Development',
  'Back-End Development',
  'API Development',
  'UI/UX & Product Design',
]

/** Subtle specialty line: one item visible at a time, screen readers get the full list once. */
export default function Rotator() {
  const [current, setCurrent] = useState(0)
  const [leaving, setLeaving] = useState(null)
  const cur = useRef(0)

  useEffect(() => {
    let clear
    const id = setInterval(() => {
      if (document.hidden) return
      const prev = cur.current
      cur.current = (prev + 1) % SPECIALTIES.length
      setLeaving(prev)
      setCurrent(cur.current)
      clearTimeout(clear)
      clear = setTimeout(() => setLeaving(null), 650)
    }, 3200)
    return () => {
      clearInterval(id)
      clearTimeout(clear)
    }
  }, [])

  return (
    <div className="rotator">
      <span className="sr-only">
        Specialties: Front-End Development, Back-End Development, API Development, and UI/UX &amp; Product Design.
      </span>
      <div className="rotator-track" aria-hidden="true">
        {SPECIALTIES.map((s, i) => (
          <span
            key={s}
            className={`rotator-item${i === current ? ' is-active' : ''}${i === leaving ? ' is-leaving' : ''}`}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
