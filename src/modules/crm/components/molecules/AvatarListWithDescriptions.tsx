import tw from 'twin.macro';
import { Avatar, Button, Typography } from 'antd';
import tip from '@modules/crm/assets/tip.svg';
import { css } from '@emotion/react';
import React, { FC, useCallback, useMemo, useState } from 'react';
import type { Contractor } from '@modules/crm/types/Contractor';
import { Contact } from '@modules/crm/types/Contact';
import { Plus } from '@components/atoms/Icon';
import { useNavigate } from 'react-router-dom';

type AvatarListWithDescriptionsProps = {
  contractor: Contractor;
};

export const AvatarListWithDescriptions: FC<
  AvatarListWithDescriptionsProps
> = ({ contractor }) => {
  const navigate = useNavigate();
  const [currentContact, setCurrentContact] = useState<Contact | null>(
    contractor.contacts.length > 0 ? contractor.contacts[0] : null
  );
  const [currentContactIndex, setCurrentContactIndex] = useState(0);
  const handleItemClick = useCallback(
    (ind: number) => () => {
      setCurrentContact(contractor.contacts[ind]);
      setCurrentContactIndex(ind);
    },
    []
  );
  const tipMargin = useMemo(
    () =>
      (currentContactIndex === 0 || currentContactIndex === 1 ? 35 : 59) +
      (currentContactIndex === 1 ? 56 : 32) * currentContactIndex,
    [currentContactIndex]
  );
  const handleAddContact = useCallback(() => {
    navigate(`/crm/contractors/${contractor.id}`);
  }, []);
  return (
    <>
      {contractor.contacts.length > 0 && (
        <>
          <div css={tw`mx--2`}>
            {currentContactIndex > 0 && (
              <Avatar.Group css={tw`mx-2`}>
                {contractor.contacts
                  .slice(0, currentContactIndex)
                  .map((contact: any, ind) => (
                    <span
                      // css={[tw`inline-flex`, ind > 0 ? tw`ml--2` : '']}
                      className="ant-avatar"
                      onClick={handleItemClick(ind)}
                    >
                      <Avatar src={contact.avatar} css={tw`cursor-pointer`} />
                    </span>
                  ))}
              </Avatar.Group>
            )}

            {/*<Avatar.Group css={tw`mx-2`} maxCount={3}>*/}
            {/*  {contractor.contacts.map((contact: any) => (*/}
            {/*    <Avatar src={contact.avatar} />*/}
            {/*  ))}*/}
            {/*</Avatar.Group>*/}
            {
              <Avatar.Group css={tw`mx-2`} maxCount={1}>
                <span className="ant-avatar">
                  <Avatar src={currentContact?.avatar} />
                </span>
              </Avatar.Group>
            }
            {currentContactIndex < contractor.contacts.length - 1 && (
              <Avatar.Group css={tw`mx-2`}>
                {contractor.contacts
                  .slice(currentContactIndex + 1)
                  .map((contact: any, ind) => (
                    <span
                      // css={[tw`inline-flex`, ind > 0 ? tw`ml--2` : '']}
                      className="ant-avatar"
                      onClick={handleItemClick(currentContactIndex + ind + 1)}
                    >
                      <Avatar src={contact.avatar} css={tw`cursor-pointer`} />
                    </span>
                  ))}
              </Avatar.Group>
            )}
            {/*<Avatar.Group css={tw`mx-2`} maxCount={3}>*/}
            {/*  {contractor.contacts.map((contact: any) => (*/}
            {/*    <Avatar src={contact.avatar} />*/}
            {/*  ))}*/}
            {/*</Avatar.Group>*/}
          </div>

          <div css={tw`mx--6`}>
            <img
              src={tip}
              css={css`
                //margin-left: 34px; // 1st item
                //margin-left: 91px; // 2nd item
                //margin-left: 91px; // 2nd item
                margin-left: ${tipMargin}px; // 3rd item
              `}
            />
            <div
              css={css`
                ${tw`w-full mt--px pt-4 pb-5 px-5`}
                border-top: 1px solid #D4D3D4;
                background-color: #fafafa;
              `}
            >
              <div>
                <Typography.Text type="secondary">Ф. И. О.: </Typography.Text>
                <Typography.Text>
                  {currentContact?.firstName} ${currentContact?.lastName}
                </Typography.Text>
              </div>
              <div>
                <Typography.Text type="secondary">Должность: </Typography.Text>
                <Typography.Text>
                  {currentContact?.workPosition}
                </Typography.Text>
              </div>
              <div>
                <Typography.Text type="secondary">Моб. тел: </Typography.Text>
                <Typography.Text>{currentContact?.mobilePhone}</Typography.Text>
              </div>
              <div>
                <Typography.Text type="secondary">Раб. тел: </Typography.Text>
                <Typography.Text>{currentContact?.workPhone}</Typography.Text>
              </div>
              <div>
                <Typography.Text type="secondary">Эл. адрес: </Typography.Text>
                <Typography.Text>{currentContact?.email}</Typography.Text>
              </div>
            </div>
          </div>
        </>
      )}
      {contractor.contacts.length === 0 && (
        <Button
          icon={<Plus />}
          type="text"
          css={css`
            ${tw`w-full mb-5`}
            color: #284892;
            &:hover {
              background: #e4ebfa;
            }
            &:active {
              background: #bfd0f4;
            }
          `}
          onClick={handleAddContact}
        >
          Добавить контактное лицо
        </Button>
      )}
    </>
  );
};
