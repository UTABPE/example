import React, { FC, HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import tw from 'twin.macro';
import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Contact } from '@modules/crm/types/Contact';

export const ContactCard: FC<
  HTMLAttributes<HTMLDivElement> & { contact: Contact }
> = ({ contact, children, ...rest }) => (
  <div
    css={css`
      ${tw`mt-14`}
      max-width: 21.5rem;
    `}
    {...rest}
  >
    <Card css={tw`text-center rounded-b-none`}>
      <div
        css={css`
          ${tw`mx-auto mt--14 mb-4 border-4 border-blue-15 rounded-full`}
          width: 70px;
        `}
      >
        <img
          src={contact.avatar}
          alt={`${contact.firstName} ${contact.lastName}`}
          css={css`
            ${tw`rounded-full`};
            width: 62px;
            height: 62px;
          `}
        />
      </div>

      <Typography.Text>{`${contact.firstName} ${contact.lastName}`}</Typography.Text>
      <br />
      <Typography.Text>{contact.workPosition}</Typography.Text>
    </Card>
    <Card css={tw`bg-gray-0 rounded-t-none border-t-0`}>
      <Typography.Text>Раб. тел.:</Typography.Text>&nbsp;
      <Typography.Text>{contact.workPhone}</Typography.Text>
      <br />
      <Typography.Text>Моб. тел.:</Typography.Text>&nbsp;
      <Typography.Text>{contact.mobilePhone}</Typography.Text>
      <br />
      <Typography.Text>Эл. адрес:</Typography.Text>&nbsp;
      <Link to={`mailto:${contact.email}`}>{contact.email}</Link>
    </Card>
  </div>
);
