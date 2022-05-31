import tw from 'twin.macro';
import styled from '@emotion/styled';
import { Button as ButtonAntd, Divider } from 'antd';
import { useState } from 'react';
import {
  ArrowButton,
  ArrowButtonHoverDark,
  ArrowButtonHoverWhite,
} from '@components/atoms/Icon';

export const Arrow_Button = ({
  hoverProps = false,
  onClick,
  children,
}: any) => {
  const [hover, setHover] = useState(false);
  const handleHoverEnter = () => {
    setHover(true);
    console.log('enter');
  };
  const handleHoverLeave = () => {
    setHover(false);
  };

  const Button = styled(ButtonAntd)`
    ${tw`h-20 text-lg py-0 text-darkBlue-15 border-0 px-0 flex flex-row items-center bg-transparent transition-all`}
    .divider {
      ${tw`transition-all w-0 p-0 m-0 ml-3 min-w-0 z-10 border-t-[1.5px]`}
      ${hoverProps ? tw`border-white` : tw`border-darkBlue-15 border-t-2`}
    }
    :hover {
      background-color: transparent;
      .divider {
        ${tw`w-[47px]`}
      }
    }
    svg {
      ${tw`!text-white`}
      ${hover && tw`!text-darkBlue-15`}
    }
  `;

  return (
    <Button
      onClick={onClick}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      {children}
      <Divider className="divider" />
      {hoverProps ? (
        hover ? (
          <ArrowButtonHoverWhite />
        ) : (
          <ArrowButton />
        )
      ) : hover ? (
        <ArrowButtonHoverDark />
      ) : (
        <ArrowButton />
      )}
    </Button>
  );
};
