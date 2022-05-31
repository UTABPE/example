import { ClassNames, css } from '@emotion/react';
import { FC } from 'react';
import { Button, Carousel } from 'antd';
import { ChevronLeft, ChevronRight } from '@components/atoms/Icon';
import tw from 'twin.macro';

const buttonStyles = css`
  ${tw`w-8 h-8 p-0 z-10 border-none rounded-full text-gray-5 shadow-none hover:(bg-blue-35 text-darkBlue-15)`}
  span {
    ${tw`mr-0.5 mb-px`}
  }
  &:active {
  }
`;

const PrevArrow = () => (
  <Button
    css={css`
      ${buttonStyles}
      ${tw`ml--3`}
    `}
  >
    <ChevronLeft />
  </Button>
);

const NextArrow = () => (
  <Button
    css={css`
      ${buttonStyles}
      ${tw`mr--3 pl-1`}
    `}
  >
    <ChevronRight />
  </Button>
);

export const ContactsCarousel: FC<{ slidesToShow: number }> = ({
  slidesToShow,
  children,
}) => {
  return (
    <ClassNames>
      {({ css, cx }) => (
        <Carousel
          slidesToShow={slidesToShow > 1 ? 2 : 1}
          autoplay
          arrows
          className={css`
            ${tw`mb-6`}
            .slick-list {
              margin: 0 -12px;
            }
            .slick-slide > div {
              padding: 0 12px;
            }
          `}
          prevArrow={
            <span>
              <PrevArrow />
            </span>
          }
          nextArrow={
            <span>
              <NextArrow />
            </span>
          }
        >
          {children}
        </Carousel>
      )}
    </ClassNames>
  );
};
