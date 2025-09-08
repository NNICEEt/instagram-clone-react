'use client'

import * as React from 'react'
import { useTheme as useNextTheme } from 'next-themes'

/**
 * A custom hook to access and manage the theme.
 * @returns \{ theme, setTheme, toggleTheme \}
 */
export function useTheme() {
  const { resolvedTheme, setTheme } = useNextTheme()

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }, [resolvedTheme, setTheme])

  return {
    theme: resolvedTheme,
    setTheme,
    toggleTheme,
  }
}
