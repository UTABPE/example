import { FC } from 'react';
import { BusinessProcessFormSettingsContainer } from './BPFormSettingsContainer';
import { BusinessProcessFormSettingsMenu } from './BPFormSettingsMenu';

export const BusinessProcessFormSettings: FC<{
  onElementInputTypeChange: ({ key }: { key: string }) => void;
  selectedElementInputType: string;
}> = ({ onElementInputTypeChange, selectedElementInputType }) => {
  return (
    <div className="flex h-max">
      <BusinessProcessFormSettingsMenu
        onMenuItemClick={onElementInputTypeChange}
      />
      <BusinessProcessFormSettingsContainer
        selectedMenuItem={selectedElementInputType}
      />
    </div>
  );
};
