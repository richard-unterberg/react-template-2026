import { withBasePath } from '@/components/Link'
import ThemeBootstrap from '@/components/theme/ThemeBootstrap'

export const Head = () => (
  <>
    <link rel="icon" href={withBasePath('/favicon.ico')} />
    <link rel="apple-touch-icon" href={withBasePath('/apple-touch-icon.png')} />
    <link rel="manifest" href={withBasePath('/site.webmanifest')} />
    <ThemeBootstrap />
  </>
)
