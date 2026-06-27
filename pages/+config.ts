import type { Config } from 'vike/types'
import vikeReact from 'vike-react/config'

const config: Config = {
  title: 'react-template-2026',
  extends: [vikeReact],
  prerender: true,
  htmlAttributes: {
    'data-theme': 'theme-light',
  },
}

export default config
