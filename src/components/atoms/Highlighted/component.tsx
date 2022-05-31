import _ from 'lodash';
import tw from 'twin.macro';

export const Highlighted = ({ text = '', highlight = '' }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${_.escapeRegExp(highlight)})`, 'gi');
  const parts = text.split(regex);
  return (
    <span>
      {parts
        .filter((part) => part)
        .map((part, i) =>
          regex.test(part) ? (
            <mark css={tw`px-0 bg-primaryGold-2`} key={i}>
              {part}
            </mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
    </span>
  );
};
