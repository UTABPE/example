import { PageMetaContext } from '@context/PageMetaContext';
import styled from '@emotion/styled';
import { getBpDefinitionList } from '@modules/admin/modules/business-process/api/bpmnApi';
import { Col, Row, Spin } from 'antd';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import tw from 'twin.macro';
import { BPCard } from './BPCard';

const Section = styled.section`
  ${tw`max-w-[1440px] grid  gap-5`}
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));

  .container {
  }
`;
export const SectionLayout = () => {
  const { selectedSection, setSelectedSection } = useContext(PageMetaContext);

  const bpListQuery = useQuery(
    ['bp-list-section', selectedSection?.sectionId],
    () =>
      getBpDefinitionList({
        moduleSectionId: selectedSection?.sectionId,
      }).then(({ data }) => data)
  );

  return (
    <Section>
      {bpListQuery.isFetching && <Spin />}
      <Row gutter={24} className="mt-4">
        {!bpListQuery.isFetching &&
          bpListQuery.data?.content.map((bp) => {
            return (
              <Col className="mt-3">
                <BPCard bp={bp} key={bp.id} />{' '}
              </Col>
            );
          })}
      </Row>
    </Section>
  );
};
