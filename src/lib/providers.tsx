'use client'

import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import * as messages from './react-intl/locales/en.json'
import { setupStore } from '@lib/redux'

export const Providers = (props: React.PropsWithChildren) => (
  <IntlProvider locale='en' messages={messages} defaultLocale='en'>
    <Provider store={setupStore}>{props.children}</Provider>
  </IntlProvider>
)
