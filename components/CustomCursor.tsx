'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const curRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cur = curRef.current
    const ring = ringRef.current
    if (!cur || !ring) return

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      cur.style.left = mx + 'px'
      cur.style.top = my + 'px'
    }

    function animRing() {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ring) {
        ring.style.left = rx + 'px'
        ring.style.top = ry + 'px'
      }
      requestAnimationFrame(animRing)
    }
    animRing()

    document.addEventListener('mousemove', onMouseMove)

    const interactables = document.querySelectorAll('a, button, .cc, .bg-main, .bg-sm, .bc')
    const onEnter = () => {
      if (cur) cur.style.transform = 'translate(-50%,-50%) scale(1.5)'
      if (ring) { ring.style.width = '48px'; ring.style.height = '48px' }
    }
    const onLeave = () => {
      if (cur) cur.style.transform = 'translate(-50%,-50%) scale(1)'
      if (ring) { ring.style.width = '36px'; ring.style.height = '36px' }
    }

    interactables.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={curRef}
        className="fixed w-[10px] h-[10px] bg-cyan rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          transition: 'transform 0.15s cubic-bezier(0.22,1,0.36,1), width 0.3s, height 0.3s',
          transform: 'translate(-50%,-50%)',
        }}
      />
      <div
        ref={ringRef}
        className="fixed w-9 h-9 border border-[rgba(108,54,122,0.55)] rounded-full pointer-events-none z-[9998]"
        style={{
          transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
          transform: 'translate(-50%,-50%)',
        }}
      />
    </>
  )
}
