import * as React from 'react'

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Start with undefined to prevent hydration mismatch
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Check if window is available (client-side only)
    if (typeof window === 'undefined') return;

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Memoize the onChange handler to prevent unnecessary re-renders
    const onChange = React.useCallback(() => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }, [])

    // Set initial value
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Use modern matchMedia API
    if (mql.addEventListener) {
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    } else {
      // Fallback for older browsers
      mql.addListener(onChange)
      return () => mql.removeListener(onChange)
    }
  }, [])

  return !!isMobile
}
