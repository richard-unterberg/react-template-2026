import LayoutComponent from '@/components/LayoutComponent'
import ThemeToggle from '@/components/theme/ThemeToggle'

const Header = () => {
  return (
    <header
      className="bg-base-100 w-full relative h-16 border-b border-b-px border-base-muted-light"
      data-beasties-container
    >
      <LayoutComponent className="flex items-center justify-between h-full">
        <h1 className=" text-xl font-bold z-2 relative">react-template-2026</h1>
        <nav className="absolute h-full w-full top-0 left-0 flex items-center justify-center ">
          <ul className="flex space-x-8">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
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
