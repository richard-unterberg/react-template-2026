import { usePageContext } from 'vike-react/usePageContext'
import LayoutComponent from '@/components/LayoutComponent'
import Link from '@/components/Link'
import ThemeToggle from '@/components/theme/ThemeToggle'

// test
const Header = () => {
  const { urlParsed } = usePageContext()

  // start-without-beasties
  const withoutBeasties = urlParsed.pathname.startsWith('/start-without-beasties')

  return (
    <header
      className="bg-base-100 w-full relative h-16 border-b border-b-px border-base-muted-light"
      {...(!withoutBeasties && { 'data-beasties-container': true })}
    >
      <LayoutComponent className="flex items-center justify-between h-full">
        <h1 className=" text-xl font-bold z-2 relative">react-template-2026</h1>
        <nav className="absolute h-full w-full top-0 left-0 flex items-center justify-center ">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/start-without-beasties" className="hover:underline">
                Without Beasties
              </Link>
            </li>
          </ul>
        </nav>
        <div className="relative z-2">
          <ThemeToggle />
        </div>
      </LayoutComponent>
    </header>
  )
}

export default Header
