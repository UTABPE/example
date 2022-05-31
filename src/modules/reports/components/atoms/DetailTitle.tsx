export type DetailTitleProps = {
  text?: string;
};

export const DetailTitle: React.FC<DetailTitleProps> = ({ text }) => (
  <div className="h-full w-full p-1.5 text-left">
    <span className="text-xs">{text}</span>
  </div>
);
