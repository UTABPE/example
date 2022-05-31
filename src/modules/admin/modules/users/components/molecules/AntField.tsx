import { FieldHookConfig, useField } from 'formik';
import { Form as AntForm } from 'antd';
import { cloneElement, ReactElement } from 'react';
import { Input } from '@components/atoms/Input';
import Text from 'antd/lib/typography/Text';

interface OtherProps {
  children?: ReactElement<HTMLInputElement | HTMLSelectElement>;
  label: string;
  requiredLabel?: boolean;
}

const AntField = (props: OtherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <AntForm.Item
      className="user-label"
      label={props.label}
      required={props.requiredLabel && true}
    >
      {cloneElement(
        props.children ? props.children : <Input className="text-gray-8" />,
        { ...field }
      )}
      {meta.touched && meta.error ? (
        <Text className="text-xs" type="danger">
          {meta.error}
        </Text>
      ) : null}
    </AntForm.Item>
  );
};

export default AntField;
