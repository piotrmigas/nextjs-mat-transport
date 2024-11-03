import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import '../styles/globals.css';

const customLightbox = {
  buttons: {
    showDownloadButton: false,
    showFullscreenButton: false,
    showThumbnailsButton: false,
    showAutoplayButton: false,
    showNextButton: false,
    showPrevButton: false,
  },
  thumbnails: {
    showThumbnails: false,
  },
  progressBar: {
    showProgressBar: false,
  },
  settings: {
    disablePanzoom: true,
    disableWheelControls: true,
  },
  caption: {
    showCaption: false,
  },
};

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} customLightbox={customLightbox} />;

export default appWithTranslation(MyApp);
