import styled from '@emotion/styled';
import tw from 'twin.macro';
import {
  Button,
  Divider as DividerAntd,
  Form,
  Input as InputAntd,
  Select,
} from 'antd';
import { Header as HeaderAntd } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import TextArea from 'antd/lib/input/TextArea';
import { File, Lamp, RectangleIdeaForm } from '@components/atoms/Icon';

const Header = styled(HeaderAntd)`
  ${tw`h-[666px] w-[1440px] bg-primary flex justify-center`}
`;
const Container = styled.div`
  padding: 40px 100px 0;
  ${tw`h-full w-full flex flex-col gap-2.5`}
  .left-part {
    ${tw`w-[358px] h-[422px] text-white`}
    h2 {
      ${tw`text-white`}
    }
    .lamp {
      ${tw`w-[135px] h-[135px] relative left-2 bottom-[36px] z-10`}
      font-size: 84px !important;
    }
    .rectangle {
      ${tw`w-[358px] h-[422px] relative right-6 bottom-[124px] z-0`}
      font-size: 17em !important;
    }
  }
  .right-part {
    ${tw`w-[750px] h-[422px]`}

    .ant-select {
      ${tw`w-[261px] h-14 text-blue-50 px-[9px] pt-[6.4px]`}
      border-bottom: 1px solid rgba(200, 215, 246, 1) !important;
      .ant-select-selector {
        ${tw`h-full`}
        background-color: transparent !important;
        border: none !important;
        .ant-select-arrow {
          height: 100% !important;
        }
      }
    }
    .ant-form-item {
      ${tw`m-0`}
    }
    .ant-form-item-explain,
    .ant-form-item-explain-error {
      ${tw`h-0 min-h-0`}
      border-bottom: 1px solid rgba(255,68,102,1) !important;
    }
    .ant-input-status-error,
    .ant-input-status-success {
      background-color: transparent !important;
    }
    .hover {
      :hover {
        ${tw`bg-darkBlue-35`}
      }
    }
  }
`;
const Content = styled.div`
  ${tw`flex flex-row pt-16 gap-8`}
`;
const Text = styled(TextArea)`
  border-bottom: 1px solid rgba(200, 215, 246, 1) !important;
  ${tw`bg-transparent border-0 mt-1.5 h-[76px]`}
`;
const Input = styled(InputAntd)`
  ${tw`w-[456px] h-14 bg-transparent border-0 px-5`}
  border-color: transparent !important;
  border-bottom: 1px solid rgba(200, 215, 246, 1) !important;
`;
const Span = styled.span`
  ${tw`text-sm leading-[16px]`}
`;
const Divider = styled(DividerAntd)`
  ${tw`my-3`}
`;
export const IdeaForm = () => {
  return (
    <Header>
      <Container>
        <Title className="text-blue-15 text-center">
          У Вас есть идея? Поделитесь ею с нами!
        </Title>
        <Content>
          <div className="left-part">
            <div className="h-full z-0">
              <div className="lamp">
                <Lamp />
              </div>
              <div className="rectangle">
                <RectangleIdeaForm />
              </div>
            </div>
            <div className="pt-10 px-5 pb-11 flex flex-col justify-start z-30 relative bottom-[422px]">
              <div className="flex flex-col justify-center items-center gap-4 mb-2.5">
                <Title level={2} className={`z-20`}>
                  Счетчик идей
                </Title>
                <Span className="text-base ">
                  Всего с момента старта системы:
                </Span>
              </div>
              <Divider />
              <div className="flex flex-col gap-2">
                <Span>Рациализаторских предложений</Span>
                <Title level={2}>448</Title>
              </div>
              <Divider />
              <div className="flex flex-col gap-2">
                <Span>Предложений по улучшению</Span>
                <Title level={2}>1216</Title>
              </div>
              <Divider />
              <div className="w-full flex flex-col items-center">
                <div className="w-[290px] h-14 flex flex-col gap-1.5 text-sm text-center mt-5">
                  <Span>Мы всегда открыты для предложений, </Span>
                  <Span>которые помогут сделать лучше и удобее </Span>
                  <Span>ИС «eKAP»!</Span>
                </div>
              </div>
            </div>
          </div>
          <Form className="right-part">
            <div className="flex flex-row items-center mb-[62px] ">
              <Form.Item
                name="topic"
                rules={[
                  {
                    required: true,
                    message: 'Данное поле обязательно для заполнения',
                  },
                ]}
              >
                <Input
                  required
                  placeholder="Тема"
                  className="text-blue-30 !hover"
                />
              </Form.Item>
              <Form.Item
                className="ml-8"
                name="priority"
                rules={[
                  {
                    required: true,
                    message: 'Данное поле обязательно для заполнения',
                  },
                ]}
              >
                <Select
                  className="hover"
                  placeholder="Приоритет"
                  dropdownClassName="bg-[#224084] text-yellow"
                >
                  <Select.Option
                    className="text-blue-15  hover:bg-darkBlue-15"
                    value={`низкий`}
                  >
                    Низкий
                  </Select.Option>
                  <Select.Option
                    className="text-blue-15 hover:bg-darkBlue-15"
                    value={`средний`}
                  >
                    Средний
                  </Select.Option>
                  <Select.Option
                    className="text-blue-15 hover:bg-darkBlue-15"
                    value={`высокий`}
                  >
                    Высокий
                  </Select.Option>
                </Select>
              </Form.Item>
            </div>
            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                  message: 'Данное поле обязательно для заполнения',
                },
              ]}
            >
              <Text
                placeholder="Описание"
                className="text-blue-30 h-[74px] m-0 px-4 hover"
              ></Text>
            </Form.Item>
            <div className="flex flex-col items-center mt-11">
              <Span className="w-full h-5 justify-start text-center text-blue-30 text-base">
                Также вы можете загрузить к вашей идее все необходимые материалы{' '}
              </Span>
              <Form.Item className="w-full" name="file">
                <div className="w-full h-[72px] mt-3 mb-8 text-blue-30 text-center flex flex-row items-center justify-center border-dashed border-2 border-blue-15 hover">
                  <Span className="text-xs">Перетащите файл сюда или</Span>
                  <File tw="ml-4 mr-2 !text-2xlLow" />
                  <input
                    type="file"
                    className="w-[105px]  text-sm file:text-blue-30 text-slate-500 file:py-2 file:px-0 file:border-0 file:text-sm file:font-semibold file:bg-transparent hover:file:bg-violet-100 hover:color-white"
                  />
                </div>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-primaryGold-3 text-darkBlue-15"
                >
                  Подать идею
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Content>
      </Container>
    </Header>
  );
};
