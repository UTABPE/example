// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DisplayCellProps<RecordType extends object = any> = {
  value: number;
  record: RecordType;
  index: number;
};

export const DisplayCell: React.FC<DisplayCellProps> = ({ value }) => {
  return <div className="p-3">{value}</div>;
};
