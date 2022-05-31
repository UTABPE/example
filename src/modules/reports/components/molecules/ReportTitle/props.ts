export type fullScreenValue = 'fullscreen' | 'minimize';

export type ReportTitleProps = {
  title: string;
  onFullscreenToggle: (value: fullScreenValue) => void;
};
