import type { NavItem } from './nav-menu.data'

export const createPathnameToValue = (items: NavItem[]) => {
  const pathToValueMap = Object.fromEntries(
    items.map((item) => [item.path, item.value]),
  )

  return (pathname: string): string => {
    if (pathToValueMap[pathname]) {
      return pathToValueMap[pathname]
    }

    const seg = '/' + pathname.split('/')[1]
    return pathToValueMap[seg] ?? items[0]?.value ?? ''
  }
}
