'use client'

import { PropsWithChildren } from 'react'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import * as messages from '@lib/react-intl/locales/en.json'
import { setupStore } from '@lib/redux'

export const Providers = (props: PropsWithChildren) => (
  <IntlProvider locale='en' messages={messages} defaultLocale='en'>
    <Provider store={setupStore}>{props.children}</Provider>
  </IntlProvider>
)
