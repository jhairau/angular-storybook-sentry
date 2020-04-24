import * as Sentry from '@sentry/browser';
import { ErrorHandler, Injectable } from '@angular/core';
import {environment} from '../environments/environment';

Sentry.init(environment.sentry);

@Injectable()
export class ErrorHandling implements ErrorHandler {
  handleError(error: any) {
    if (!environment.production) {
      throw new Error(error);
    }

    if (enironment.sentry.enableErrorReportDialog) {
        const eventId = Sentry.captureException(error.originalError || error);
        Sentry.showReportDialog({eventId});
    }
  }
}
