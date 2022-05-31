import { Divider, Table, Typography as TypographyAntd } from 'antd';

export default {
  title: 'Style Guide/Typography',
};

const { Title, Text } = TypographyAntd;

const desktopTextStyles = [
  {
    key: '1',
    textStyle: 'H1',
    typeface: 'Lato',
    weight: 'Bold',
    case: 'Sentence',
    size: '48',
    useFor: 'Title',
    fontSize: '2xl',
  },
  {
    key: '2',
    textStyle: 'H2',
    typeface: 'Lato',
    weight: 'Semibold',
    case: 'Sentence',
    size: '26',
    useFor: 'Subtitle 1',
    fontSize: '"2xlLow"',
  },
  {
    key: '3',
    textStyle: 'H3',
    typeface: 'Roboto',
    weight: 'Medium',
    case: 'Sentence',
    size: '24',
    useFor: 'Subtitle 2',
    fontSize: 'xl',
  },
  {
    key: '4',
    textStyle: 'H4',
    typeface: 'Roboto',
    weight: 'Bold',
    case: 'Sentence',
    size: '20',
    useFor: 'Subtitle 3',
    fontSize: 'xlLow',
  },
  {
    key: '5',
    textStyle: 'H5',
    typeface: 'Roboto',
    weight: 'Bold',
    case: 'Sentence',
    size: '18',
    useFor: 'Subtitle 4',
    fontSize: 'lg',
  },
  {
    key: '6',
    textStyle: 'H6',
    typeface: 'Roboto',
    weight: 'Bold',
    case: 'Sentence',
    size: '16',
    useFor: 'Subtitle 5, Page name',
    fontSize: 'base',
  },
];

const columns = [
  {
    title: 'Text style',
    key: 'textStyle',
    render: (item: any) => {
      return (
        <Title className={`text-primary text-${item.fontSize}`}>
          {item.textStyle}
        </Title>
      );
    },
  },
  {
    title: 'Typeface',
    dataIndex: 'typeface',
    key: 'typeface',
    render: (typeface: string) => (
      <Text className="text-primary text-sm">{typeface}</Text>
    ),
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
    key: 'weight',
    render: (weight: string) => (
      <Text className="text-primary text-sm">{weight}</Text>
    ),
  },
  {
    title: 'Case',
    dataIndex: 'case',
    key: 'case',
    render: (weight: string) => (
      <Text className="text-primary text-sm">{weight}</Text>
    ),
  },
  {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
    render: (size: string) => (
      <Text className="text-primary text-sm">{size}</Text>
    ),
  },
  {
    title: 'Use for',
    dataIndex: 'useFor',
    key: 'useFor',
    render: (useFor: string) => (
      <Text className="text-primary text-sm">{useFor}</Text>
    ),
  },
];

export const Typography = () => {
  return (
    <div>
      <Divider className="text-primary text-lg">Desktop text style</Divider>
      <Table
        columns={columns}
        dataSource={desktopTextStyles}
        pagination={false}
      />
    </div>
  );
};
