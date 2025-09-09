'use client'

import * as React from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

import {
  ChakraProvider,
  ClientOnly,
  IconButton,
  type IconButtonProps,
  Skeleton,
  defaultSystem,
} from '@chakra-ui/react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes'

import { useTheme } from './hooks'

/**
 * Provides the theme for the entire application.
 * It sets up both next-themes and Chakra UI.
 */
export function ThemeProvider({
  children,
  ...props
}: React.PropsWithChildren<ThemeProviderProps>) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      {...props}
    >
      <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
    </NextThemeProvider>
  )
}

type ThemeToggleButtonProps = Omit<IconButtonProps, 'aria-label'>

/**
 * A button component to toggle between light and dark themes.
 */
export const ThemeToggleButton = React.forwardRef<
  HTMLButtonElement,
  ThemeToggleButtonProps
>((props, ref) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <ClientOnly fallback={<Skeleton boxSize="9" />}>
      <IconButton
        ref={ref}
        onClick={toggleTheme}
        variant="ghost"
        aria-label="Toggle color mode"
        size="sm"
        {...props}
      >
        {theme === 'dark' ? <LuMoon size={20} /> : <LuSun size={20} />}
      </IconButton>
    </ClientOnly>
  )
})
