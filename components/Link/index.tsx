import type { AnchorHTMLAttributes } from 'react'

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string
}

const absoluteUrlPattern = /^[a-z][a-z\d+.-]*:/i

export const withBasePath = (href: string) => {
  if (!href.startsWith('/') || href.startsWith('//') || absoluteUrlPattern.test(href)) {
    return href
  }

  const basePath = import.meta.env.BASE_URL || '/'

  if (basePath === '/') {
    return href
  }

  const normalizedBasePath = basePath.replace(/\/$/, '')

  if (href === normalizedBasePath || href.startsWith(`${normalizedBasePath}/`)) {
    return href
  }

  return `${normalizedBasePath}${href}`
}

const Link = ({ href, ...props }: LinkProps) => <a href={withBasePath(href)} {...props} />

export default Link
