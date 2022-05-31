import { ArrowBack } from '@components/atoms/Icon';
import { PageMetaContext } from '@context/PageMetaContext';
import styled from '@emotion/styled';
import { Button, Divider, Menu } from 'antd';
import { Dispatch, FC, SetStateAction, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import { ModuleSection } from '@modules/admin/modules/business-modules/types/Module';

interface Props {
  moduleProps:
    | {
        id: string;
        name: string;
        sections: ModuleSection[];
      }
    | undefined;

  setModuleProps: Dispatch<
    SetStateAction<
      { id: string; name: string; sections: ModuleSection[] } | undefined
    >
  >;
}
const Section = styled.section<{
  moduleProps:
    | {
        id: string;
        name: string;
        sections: ModuleSection[];
      }
    | undefined;
}>`
  ${tw`absolute w-full h-full right-0 bg-white overflow-hidden z-50 transition-transform`}
  transform: scale(0, 1);
  ${({ moduleProps }) => moduleProps && 'transform: scale(1, 1)'}
`;

export const SideBarHoverContainer: FC<Props> = ({
  moduleProps,
  setModuleProps,
}) => {
  const { selectedSection, setSelectedSection } = useContext(PageMetaContext);

  return (
    <Section moduleProps={moduleProps}>
      <Divider className="mb-0 mt-2" />
      <Button
        className="w-full h-14 border-0"
        onClick={() => setModuleProps(undefined)}
      >
        <ArrowBack />
        Модуль "{moduleProps?.name}"
      </Button>
      <Divider className="my-0" />
      <Menu>
        {moduleProps?.sections?.map((section: ModuleSection) => (
          <Menu.Item key={section.sectionId}>
            <Link
              to={`user/modules/${section.sectionUrl}`}
              onClick={() =>
                setSelectedSection({
                  sectionId: section.sectionId,
                  moduleId: section.moduleId,
                })
              }
            >
              {section.name}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
      <Divider className="my-2" />
    </Section>
  );
};
