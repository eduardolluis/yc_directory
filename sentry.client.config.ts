import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://1cf2de72554e09ae62cc85cc0fa964f1@o4509368837275648.ingest.us.sentry.io/4509634845540352",
  tracesSampleRate: 1.0,
});
