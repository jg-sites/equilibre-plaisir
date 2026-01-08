"use client"

import { useCallback, useEffect, useRef } from "react"

interface UseShakeToShareOptions {
  threshold?: number
  timeout?: number
  title?: string
  text?: string
  url?: string
}

export function useShakeToShare({
  threshold = 15,
  timeout = 1000,
  title = "Équilibre & Plaisir",
  text = "Découvrez Julien, diététicien nutritionniste en centre Bretagne",
  url,
}: UseShakeToShareOptions = {}) {
  const lastShakeTime = useRef(0)
  const lastX = useRef<number | null>(null)
  const lastY = useRef<number | null>(null)
  const lastZ = useRef<number | null>(null)
  const permissionRequested = useRef(false)
  const motionListenerAdded = useRef(false)

  const share = useCallback(async () => {
    const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "")

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url: shareUrl })
      } catch {
        // Silently ignore AbortError (user cancelled) and other errors
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl)
      } catch {
        // Silently fail if clipboard is not available
      }
    }
  }, [title, text, url])

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleMotion = (event: DeviceMotionEvent) => {
      const acceleration = event.accelerationIncludingGravity
      if (!acceleration) return

      const { x, y, z } = acceleration
      if (x === null || y === null || z === null) return

      if (lastX.current !== null && lastY.current !== null && lastZ.current !== null) {
        const deltaX = Math.abs(x - lastX.current)
        const deltaY = Math.abs(y - lastY.current)
        const deltaZ = Math.abs(z - lastZ.current)

        if (deltaX + deltaY + deltaZ > threshold) {
          const now = Date.now()
          if (now - lastShakeTime.current > timeout) {
            lastShakeTime.current = now
            share()
          }
        }
      }

      lastX.current = x
      lastY.current = y
      lastZ.current = z
    }

    const addMotionListener = () => {
      if (!motionListenerAdded.current) {
        window.addEventListener("devicemotion", handleMotion)
        motionListenerAdded.current = true
      }
    }

    const needsPermission = () => {
      return (
        typeof DeviceMotionEvent !== "undefined" &&
        typeof (DeviceMotionEvent as unknown as { requestPermission?: () => Promise<string> }).requestPermission ===
          "function"
      )
    }

    const requestPermission = async () => {
      if (permissionRequested.current) return
      permissionRequested.current = true

      try {
        const permission = await (
          DeviceMotionEvent as unknown as { requestPermission: () => Promise<string> }
        ).requestPermission()
        if (permission === "granted") {
          addMotionListener()
        }
      } catch {
        // Permission denied or not supported
      }
    }

    // iOS 13+ requires user interaction to request permission
    const handleUserInteraction = () => {
      if (needsPermission()) {
        requestPermission()
      }
      document.removeEventListener("touchstart", handleUserInteraction)
      document.removeEventListener("click", handleUserInteraction)
    }

    if (needsPermission()) {
      document.addEventListener("touchstart", handleUserInteraction, { once: true })
      document.addEventListener("click", handleUserInteraction, { once: true })
    } else {
      addMotionListener()
    }

    return () => {
      window.removeEventListener("devicemotion", handleMotion)
      document.removeEventListener("touchstart", handleUserInteraction)
      document.removeEventListener("click", handleUserInteraction)
      motionListenerAdded.current = false
    }
  }, [threshold, timeout, share])
}
