import React, { FC, MouseEventHandler, useCallback } from 'react';
import { Contractor } from '@modules/crm/types/Contractor';
import {
  Card,
  Col,
  Form,
  Image,
  Input as InputAntd,
  Row,
  Space,
  Typography,
} from 'antd';
import { ClassNames, css } from '@emotion/react';
import tw from 'twin.macro';
import { ContactInfoLink } from '@modules/crm/components/atoms/ContactInfoLink';
import { Button } from '@components/atoms/Button';
import { Plus } from '@components/atoms/Icon';
import { Link } from 'react-router-dom';
import { ContactsCarousel } from '@modules/crm/pages/ViewContractorPage/libs/components/ContactsCarousel';
import noContactPerson from '@modules/crm/assets/noContactPerson.svg';
import { NoContactsAddedBlock } from '@modules/crm/pages/ViewContractorPage/libs/components/NoContactsAddedBlock';
import { ContactCard } from '@modules/crm/pages/ViewContractorPage/libs/components/ContactCard';

export const ContractorDetails: FC<{
  contractor?: Contractor;
  onAddContactClick: MouseEventHandler;
}> = ({ contractor, onAddContactClick }) => {
  const handleAddContactClick = useCallback(onAddContactClick, []);
  return (
    <>
      <div className="px-4 py-8">
        <Typography.Title level={5} css={tw`(text-gray-9 font-normal)!`}>
          Данные компании
        </Typography.Title>
      </div>

      <Row gutter={24}>
        <Col span={8}>
          <div className="pt-4 px-4">
            <ClassNames>
              {({ css, cx }) => (
                <Image
                  wrapperClassName={css`
                    ${tw`block`}
                  `}
                  css={tw`w-auto mx-auto`}
                  height={116}
                  src={contractor?.companyLogoUrl ?? 'error'}
                  alt={contractor?.companyName}
                  preview={false}
                  fallback="data:image/png;base64,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"
                />
              )}
            </ClassNames>
          </div>
        </Col>

        <Col span={16}>
          <Row gutter={24}>
            <Col span={24}>
              <Typography.Text type="secondary">
                Наименование компании:{' '}
              </Typography.Text>
              <Typography.Text>{contractor?.companyName}</Typography.Text>
            </Col>
            <Col span={24}>
              <Typography.Text type="secondary">Язык: </Typography.Text>
              <Typography.Text>{contractor?.language}</Typography.Text>
            </Col>
            <Col span={24}>
              <Typography.Text type="secondary">
                Сайт компании:{' '}
              </Typography.Text>
              <ContactInfoLink href={contractor?.websiteUrl}>
                {contractor?.websiteUrl}
              </ContactInfoLink>
            </Col>

            <Col span={24}>
              <Typography.Text type="secondary">Эл. адрес: </Typography.Text>
              <ContactInfoLink href={`mailto:${contractor?.email}`}>
                {contractor?.email}
              </ContactInfoLink>
            </Col>

            <Col span={24}>
              <Typography.Text type="secondary">Телефон: </Typography.Text>
              <Typography.Text>{contractor?.phoneNumber}</Typography.Text>
            </Col>

            <Col span={24}>
              <Typography.Text type="secondary">Факс: </Typography.Text>
              <Typography.Text>{contractor?.faxNumber}</Typography.Text>
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="px-4 pt-6 pb-4">
        <Typography.Text type="secondary">
          Юридический адрес компании:&nbsp;
        </Typography.Text>
        <Typography.Text>{`${contractor?.streetName} ${contractor?.building} ${
          contractor?.office && `, офис ${contractor?.office}`
        }`}</Typography.Text>
      </div>

      <div className="px-4 pt-2 pb-4">
        <Typography.Link>
          Просмотреть архивные сделки по контрагенту
        </Typography.Link>
      </div>
      <div className="px-4 py-4">
        <hr css={tw`border-gray-4`} />
      </div>

      <div className="px-4 py-4">
        <Typography.Title level={5} css={tw`(text-gray-9 font-normal)!`}>
          Контактные лица
        </Typography.Title>
      </div>

      <Row className="px-4">
        <Col span={24}>
          {(contractor?.contacts.length === 0 && (
            <NoContactsAddedBlock onAddContactClick={handleAddContactClick} />
          )) || (
            <Row gutter={24} css={tw`mt-6`}>
              <Col span={24} css={tw`mb-6 px-12!`}>
                <ContactsCarousel
                  slidesToShow={contractor?.contacts.length ?? 1}
                >
                  {contractor?.contacts.map((item) => (
                    <ContactCard contact={item} />
                  ))}
                </ContactsCarousel>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
      <div className="px-4 pt-8 pb-4">
        <hr css={tw`border-gray-4`} />
      </div>

      <div className="px-4 py-4">
        <Typography.Title level={5} css={tw`(text-gray-9 font-normal)!`}>
          Комментарий
        </Typography.Title>
      </div>

      <Row className="px-4">
        <Col span={24}>
          <Form.Item>
            <InputAntd.TextArea placeholder="Оставить комментарий..." />
          </Form.Item>
        </Col>
      </Row>

      <div className="flex justify-center">
        <Space>
          <Button disabled>Сохранить</Button>
          <Button type="default">Отменить</Button>
        </Space>
      </div>
    </>
  );
};
