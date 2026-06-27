import ThemeBootstrap from '@/components/theme/ThemeBootstrap'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeBootstrap />
      {children}
    </>
  )
}

export default Wrapper
