import cm from '@classmatejs/react'
import Button from '@/components/Button'
import LayoutComponent from '@/components/LayoutComponent'

const GradientTop = cm.div`
  absolute 
  min-w-300 
  left-1/2 w-full h-full
  bg-radial-[at_50%_30%] 
  to-primary-muted-light/70
  to-85%
  dark:from-primary-muted-light/40
  dark:to-transparent
  dark:bg-radial-[at_50%_10%]
  dark:to-35%
  lg:dark:to-55%
  top-0
  translate-x-[-50%] 
  pointer-events-none
`

const StartPage = () => {
  return (
    <div>
      <div className="relative min-h-[calc(100svh-16*var(--spacing))] min-w-svw overflow-x-clip">
        <GradientTop />
        <LayoutComponent $padded={false} $size="xs" className="flex h-full flex-col items-center justify-center">
          <div className="prose-container text-center mt-30">
            <h1>Welcome to the Start Page</h1>
            <p className="text-lg">
              This is the main entry point of the application. Usually you would have a hero section here with a call to
              action. Typically you can apply the <code>data-beasties-container</code> attribute to the root element of
              the page to ensure that the Beasties output plugin can properly analyze the page and generate the
              necessary CSS for it.
            </p>
            <Button $variant="primary" $size="lg" className="mt-6">
              Get Started
            </Button>
          </div>
        </LayoutComponent>
      </div>
    </div>
  )
}

export default StartPage
