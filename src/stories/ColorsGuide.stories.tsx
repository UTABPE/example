import { ColorBadge } from '../components/atoms/ColorBadge';
import { Col, Divider, Row, Typography } from 'antd';

export default {
  title: 'Style Guide/Colors',
};
const { Text, Title } = Typography;

const PRIMARY_COLORS = {
  blue: [
    { code: '#0E1B3F', title: '#8' },
    { code: '#132450', title: '#7' },
    { code: '#182E62', title: '#6' },
    { code: '#172C5C', title: '#5' },
    { code: '#224084', title: 'Deep blue', isMain: true },
    { code: '#365796', title: '#4' },
    { code: '#5276B0', title: '#3' },
    { code: '#6E96CB', title: '#2' },
    { code: '#AFD6FF', title: '#1' },
    { code: '#FAFBFE', title: '#0' },
  ],
  gold: [
    { code: '#A06312', title: '#8' },
    { code: '#B26D10', title: '#7' },
    { code: '#C4760F', title: '#6' },
    { code: '#DF8C0B', title: '#5' },
    { code: '#E79B24', title: 'Gold', isMain: true },
    { code: '#EFA93C', title: '#4' },
    { code: '#F7B754', title: '#3' },
    { code: '#F7B754', title: '#2' },
    { code: '#FFDFAE', title: '#1' },
    { code: '#FFF8ED', title: '#0' },
  ],
};

const BASE_COLORS = [
  { code: '#1A1A1A', title: '#12' },
  { code: '#2A292A', title: '#11' },
  { code: '#39383A', title: '#10' },
  { code: '#414042', title: 'Carbon gray', isMain: true },
  { code: '#59595A', title: '#9' },
  { code: '#727173', title: '#8' },
  { code: '#8A8A8B', title: '#7' },
  { code: '#A3A2A3', title: '#6' },
  { code: '#BBBBBB', title: '#5' },
  { code: '#D4D3D4', title: '#4' },
  { code: '#ECECEC', title: '#3' },
  { code: '#F1F1F1', title: '#2' },
  { code: '#F6F6F6', title: '#1' },
  { code: '#FAFAFA', title: '#0' },
  { code: '#FAFAFA', title: 'White', isMain: true },
];

const ADDITIONAL_COLORS = {
  lightMode: [
    { code: '#4978E0', title: 'Azure blue', isMain: true },
    { code: '#527FE2', title: '#95' },
    { code: '#5B85E3', title: '#90' },
    { code: '#648CE5', title: '#85' },
    { code: '#6D93E6', title: '#80' },
    { code: '#769AE8', title: '#75' },
    { code: '#80A1E9', title: '#70' },
    { code: '#89A7EB', title: '#65' },
    { code: '#92AEEC', title: '60' },
    { code: '#9BB5EE', title: '#55' },
    { code: '#9BB5EE', title: '#50' },
    { code: '#ADC2F1', title: '#45' },
    { code: '#B6C9F3', title: '#40' },
    { code: '#BFD0F4', title: '#35' },
    { code: '#C8D7F6', title: '#30' },
    { code: '#D1DDF7', title: '#25' },
    { code: '#DBE4F9', title: '#20' },
    { code: '#E4EBFA', title: '#15' },
    { code: '#EDF2FC', title: '#10' },
    { code: '#F2F6FD', title: '#7' },
    { code: '#F6F8FD', title: '#5' },
  ],
  darkMode: [
    { code: '#4978E0', title: 'Azure blue', isMain: true },
    { code: '#4775DB', title: '#95' },
    { code: '#4572D7', title: '#90' },
    { code: '#4370D2', title: '#85' },
    { code: '#416DCE', title: '#80' },
    { code: '#3F6AC9', title: '#75' },
    { code: '#3D67C4', title: '#70' },
    { code: '#3B64C0', title: '#65' },
    { code: '#3962BB', title: '60' },
    { code: '#375FB7', title: '#55' },
    { code: '#355CB2', title: '#50' },
    { code: '#3459AD', title: '#45' },
    { code: '#3256A9', title: '#40' },
    { code: '#3054A4', title: '#35' },
    { code: '#2E51A0', title: '#30' },
    { code: '#2C4E9B', title: '#25' },
    { code: '#2A4B96', title: '#20' },
    { code: '#284892', title: '#15' },
    { code: '#26468D', title: '#10' },
    { code: '#244389', title: '#5' },
  ],
};

export const Colors = () => {
  return (
    <div>
      <Title>Colors</Title>
      <Row gutter={60}>
        <Col span={12}>
          <Divider className="text-primary">Primary</Divider>
          <Row gutter={36}>
            <Col span={12}>
              <Text>Primary/Deep blue</Text>
              {PRIMARY_COLORS.blue.map((color) => (
                <ColorBadge
                  colorCode={color.code}
                  title={color.title}
                  isMainColor={color.isMain}
                />
              ))}
            </Col>
            <Col span={12}>
              <Text>Primary/Gold</Text>
              {PRIMARY_COLORS.gold.map((color) => (
                <ColorBadge
                  colorCode={color.code}
                  title={color.title}
                  isMainColor={color.isMain}
                />
              ))}
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Divider>Additional Colors</Divider>
          <Row gutter={36}>
            <Col span={12}>
              <Text>Additional colors/White mode</Text>
              {ADDITIONAL_COLORS.lightMode.map((color) => (
                <ColorBadge
                  colorCode={color.code}
                  title={color.title}
                  isMainColor={color.isMain}
                />
              ))}
            </Col>
            <Col span={12}>
              <Text>Additional colors/Deep blue mode</Text>
              {ADDITIONAL_COLORS.darkMode.map((color) => (
                <ColorBadge
                  colorCode={color.code}
                  title={color.title}
                  isMainColor={color.isMain}
                />
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
      <Col span={5}>
        <Divider>Basic</Divider>
        {BASE_COLORS.map((color) => (
          <ColorBadge
            colorCode={color.code}
            title={color.title}
            isMainColor={color.isMain}
          />
        ))}
      </Col>
    </div>
  );
};
