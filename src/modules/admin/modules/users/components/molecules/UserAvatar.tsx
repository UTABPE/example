import { Button } from '@components/atoms/Button';
import { Plus } from '@components/atoms/Icon';
import { UserAvatarFrame } from '../atoms/UserAvatarFrame';

export const UserAvatar = () => {
  return (
    <div className="w-full p-6 h-auto relative">
      <UserAvatarFrame />
      <div className="relative w-full flex" style={{ paddingBottom: '100%' }}>
        <span
          style={{ paddingBottom: '100%' }}
          className="absolute w-full bg-blue-5 ring-4 ring-blue-15 rounded-full border-blue-15"
        ></span>
        <Button
          shape="circle"
          icon={<Plus />}
          buttonSize="xs"
          className="absolute -bottom-1 -right-1"
        />
      </div>
    </div>
  );
};
