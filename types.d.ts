declare module 'react-responsive-carousel/lib/js/components/Carousel/index';

type LightboxOptions = {
  buttons: {
    showDownloadButton: boolean;
    showFullscreenButton: boolean;
    showThumbnailsButton: boolean;
    showAutoplayButton: boolean;
    showNextButton: boolean;
    showPrevButton: boolean;
  };
  thumbnails: {
    showThumbnails: boolean;
  };
  progressBar: {
    showProgressBar: boolean;
  };
  settings: {
    disablePanzoom: boolean;
    disableWheelControls: boolean;
  };
  caption: {
    showCaption: boolean;
  };
};
