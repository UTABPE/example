export type UnitTitleProps = {
  text?: string;
};

export const UnitTitle: React.FC<UnitTitleProps> = ({ text }) => {
  return (
    <div className="h-full w-full py-1 text-center bg-white text-xs text-gray-8">
      {text || <>&nbsp;</>}
    </div>
  );
};
