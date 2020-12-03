import * as React from 'react';

import { IntercomContextValues } from './contextTypes';
import * as logger from './logger';

const NO_INTERCOM_PROVIDER_MESSAGE =
  'Please wrap your component with `IntercomProvider`.';

const IntercomContext = React.createContext<IntercomContextValues>({
  boot: () => logger.log('error', NO_INTERCOM_PROVIDER_MESSAGE),
  shutdown: () => logger.log('error', NO_INTERCOM_PROVIDER_MESSAGE),
  hardShutdown: () => logger.log('error', NO_INTERCOM_PROVIDER_MESSAGE),
  update: () => logger.log('error', NO_INTERCOM_PROVIDER_MESSAGE),
  hide: () => logger.log('error', NO_INTERCOM_PROVIDER_MESSAGE),
  show: () => logger.log('error', NO_INTERCOM_PROVIDER_MESSAGE),
  showMessages: () => logger.log('error', NO_INTERCOM_PROVIDER_MESSAGE),
  showNewMessages: () => logger.log('error', NO_INTERCOM_PROVIDER_MESSAGE),
  getVisitorId: () => {
    logger.log('error', NO_INTERCOM_PROVIDER_MESSAGE);
    return '';
  },
  startTour: () => logger.log('error', NO_INTERCOM_PROVIDER_MESSAGE),
  trackEvent: () => logger.log('error', NO_INTERCOM_PROVIDER_MESSAGE),
  useBooted: () => {
    logger.log('error', NO_INTERCOM_PROVIDER_MESSAGE);
    return false;
  },
});

export default IntercomContext;
