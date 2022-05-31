import { FrameCorner } from '@components/atoms/Icon';

export const UserAvatarFrame = () => {
  return (
    <>
      <span className="absolute top-0 left-0">
        <FrameCorner />
      </span>
      <span className="absolute top-0 right-0 rotate-90">
        <FrameCorner />
      </span>
      <span className="absolute bottom-0 left-0 rotate-[270deg]">
        <FrameCorner />
      </span>
      <span className="absolute bottom-0 right-0 rotate-180">
        <FrameCorner />
      </span>
    </>
  );
};
