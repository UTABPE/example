import { List, Plus } from '@components/atoms/Icon';
import styled from '@emotion/styled';
import { startBpById } from '@modules/admin/modules/business-process/api/bpmnApi';
import { BPDefinition } from '@modules/admin/modules/business-process/types/business-process/businessProcess';
import { GraySpan } from '@modules/landing/components/atoms/Span';
import { Button, Divider } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

const Card = styled.div`
  ${tw`w-[360px]`}
  .card {
    ${tw`w-[360px] flex flex-col px-5 border-[1px] border-gray-4`}
    min-height: 208px;
    .top {
      ${tw`w-full h-[128px] flex flex-col justify-center gap-3 `}
      span {
        ${tw`text-lg leading-[24px] text-gray-6`}
      }
      h1 {
        ${tw`text-[40px] text-darkBlue-15`}
      }
      h5 {
        ${tw`text-gray-8`}
      }
    }
    .bot {
      ${tw`w-full h-[82px] flex flex-row items-center border-t border-gray-4`}
    }
    .on-hover {
      ${tw`w-full flex flex-col items-center border-t border-gray-4  relative top-[1px] overflow-hidden transition-all`}
      height: 0px;
      /* height: 136px; */
      .on-hover-line {
        ${tw`w-full h-full py-5 flex flex-col gap-3`}
        button {
          ${tw`w-full h-10 flex flex-row justify-center items-center gap-2`}
        }
        .btnCreate {
          ${tw`bg-darkBlue-75 text-white`}
        }
      }
    }
    :hover {
      ${tw`border-darkBlue-15`}
      .on-hover {
        height: 136px;
      }
    }
  }
`;

const VerticalDivider = styled.div`
  ${tw`w-[1px] h-10 bg-gray-4 mx-5`}
`;

type BPCardProps = {
  bp: BPDefinition;
};

export const BPCard: React.FC<BPCardProps> = ({ bp }) => {
  const navigate = useNavigate();

  const startProcessMutation = useMutation({
    mutationFn: startBpById,
    onSuccess: (data) => {
      navigate(`/tasks/${data.data}`);
    },
  });

  const handleStartProcess = () => {
    startProcessMutation.mutate(bp.id);
  };

  return (
    <Card>
      <div className="card">
        <div className="top">
          <GraySpan>{bp.name}</GraySpan>
          <Title>1923</Title>
        </div>
        <div className="bot">
          <div>
            <GraySpan>Открытых</GraySpan>
            <Title level={5}>1824</Title>
          </div>
          <VerticalDivider />
          <div>
            <GraySpan>Закрытых</GraySpan>
            <Title level={5}>9</Title>
          </div>
          <VerticalDivider />
          <div>
            <GraySpan>Назначенные мне</GraySpan>
            <Title level={5}>2</Title>
          </div>
        </div>
        <div className="on-hover">
          <div className="on-hover-line">
            <Button className="btnCreate" onClick={handleStartProcess}>
              <Plus /> Создать задачу
            </Button>
            <Button
              className="btnList"
              onClick={() => navigate(`/tasks/created`)}
            >
              <List />
              Список задач
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
