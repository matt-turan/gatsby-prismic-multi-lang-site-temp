import * as React from 'react'
import { Link } from 'gatsby'
import { PrismicProvider } from '@prismicio/react'

import './src/assets/css/style.css'

export const wrapRootElement = ({ element }) => (
  <PrismicProvider
    internalLinkComponent={({ href, ...props }) => (
      <Link to={href} {...props} />
    )}
  >
    {element}
  </PrismicProvider>
)
