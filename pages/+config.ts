import type { Config } from 'vike/types'
import vikeReact from 'vike-react/config'

const config: Config = {
  title: 'react-template-2026',
  // prerender: true,
  extends: [vikeReact],
  prerender: true,
  htmlAttributes: {
    'data-theme': 'maplibre-vike-light',
  },
}

export default config
