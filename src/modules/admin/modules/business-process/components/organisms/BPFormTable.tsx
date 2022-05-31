import { Button } from '@components/atoms/Button';
import {
  ArrowDown,
  ArrowUp,
  DragDots,
  Plus,
  RequiredToFill,
  Settings,
  StarOutline,
  Trash,
} from '@components/atoms/Icon';
import { Input } from '@components/atoms/Input';
import { MenuItemButton } from '@components/atoms/MenuItemButton';
import { TableIconButton } from '@components/atoms/TableIconButton';
import { useFormik } from 'formik';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc';
import styled from '@emotion/styled';
import {
  Typography,
  Table as TableAntd,
  Row,
  Space,
  Col,
  Tooltip,
  Form,
} from 'antd';
import { FC, useEffect, useState } from 'react';
import tw from 'twin.macro';
import { BusinessProcessFormDropdown } from '../molecules/BPFormDropdown';
import { BusinessProcessFormSettings } from './BPFormSettings';
import {
  BPFormInputRuType,
  BPFormSectionElement,
  BPSectionFormValues,
} from '../../types/BusinessProcessForm';
const { Text } = Typography;

const Table = styled(TableAntd)`
  ${tw`rounded-none mt-6 mb-0`}
  .ant-table-container {
    ${tw`border-l-0! border-r-0!`}
    table {
      ${tw`border-t! border-blue-25! rounded-none`}
    }
    .ant-table-thead {
      .ant-table-row-expand-icon-cell::before {
        content: 'Настройка';
      }
      .bp-table-options-column {
        ${tw`border-r-0!`}
      }
      tr {
        th {
          ${tw`border-r! border-b! border-blue-25!`}
        }
        th:last-child {
          ${tw`border-r-0!`}
        }
      }
    }
    .ant-table-tbody {
      tr {
        td:last-child {
          ${tw`border-r-0	`}
        }
      }
    }
  }
  .ant-table-title {
    ${tw`border-none! bg-blue-7 rounded-none`}
  }
  .ant-table-footer {
    ${tw`bg-white rounded-none border-none! p-0`}
    .ant-btn {
      ${tw`text-gray-7 text-sm justify-start w-full  hover:bg-blue-15 hover:text-primary`}
      span:first-of-type {
        ${tw`w-6 h-6 font-medium`}
      }
    }
  }
  .bp-table-options-column {
    ${tw`border-r-0!`}
  }
  .ant-table-expanded-row {
    td {
      ${tw`p-0`}
    }
  }
`;

const RequiredIcon = () => (
  <Text className="text-danger text-[4px]">
    <RequiredToFill />
  </Text>
);

const columns = [
  TableAntd.SELECTION_COLUMN,
  TableAntd.EXPAND_COLUMN,
  {
    title: 'Тип элемента',
    dataIndex: 'inputType',
    key: 'inputType',
    render: (inputType: string) => {
      return (
        <Text className="text-gray-8">{BPFormInputRuType[inputType]}</Text>
      );
    },
  },
  {
    title: 'Лейбл',
    dataIndex: 'inputLabel',
    key: 'inputLabel',
    render: (placeholder: string) => (
      <Row align="middle">
        <RequiredIcon />
        <Col span={21}>
          <Input
            placeholder={placeholder}
            size="small"
            className="text-sm ml-1"
          />
        </Col>
      </Row>
    ),
  },
  // {
  //   title: 'Участник БП',
  //   dataIndex: 'bpMember',
  //   key: 'bpMember',
  //   render: () => <BusinessProcessFormDropdown />,
  // },
  {
    title: 'Опции',
    dataIndex: 'options',
    key: 'options',
    className: 'bp-table-options-column',
    render: () => (
      <Tooltip
        placement="bottom"
        title="Копировать"
        color="#182E62"
        overlayStyle={tw`text-sm leading-[20px]`}
      >
        <TableIconButton
          className="hover:bg-transparent text-gray-7"
          icon={<StarOutline />}
        />
      </Tooltip>
    ),
  },
  {
    width: 24,
    render: () => <DragHandle />,
  },
];

const TableHeader: FC<{ onTitleChange: any }> = ({ onTitleChange }) => (
  <div>
    <Row justify="space-between" align="middle" className="mt-1.5">
      <Col span={20}>
        <Form.Item label="Название раздела формы" className="w-full">
          <Input
            onChange={onTitleChange}
            placeholder="Общие сведения"
            name="formSectionTitle"
            className="w-full"
          />
        </Form.Item>
      </Col>
      <Col>
        <Space direction="horizontal">
          <TableIconButton
            className="text-gray-7 hover:bg-blue-10 hover:text-primary"
            icon={<Trash />}
          />
          <TableIconButton
            className="text-gray-7 hover:bg-blue-10 hover:text-primary"
            icon={<ArrowUp />}
          />
          <TableIconButton
            className="text-gray-7 hover:bg-blue-10 hover:text-primary"
            icon={<ArrowDown />}
          />
        </Space>
      </Col>
    </Row>
  </div>
);

const TableFooter: FC<{ onAddRowClick: () => void }> = ({ onAddRowClick }) => (
  <Button onClick={onAddRowClick} icon={<Plus />} type="text" buttonSize="xl">
    Добавить элемент формы
  </Button>
);

const DragHandle = SortableHandle(() => (
  <Tooltip
    title="С помощью функции перетаскивания, вы можете изменять порядок полей или перемещать поля в нужные разделы формы."
    placement="bottomRight"
    color="#182E62"
    overlayStyle={tw`text-sm leading-[20px]`}
  >
    <TableIconButton
      icon={<DragDots />}
      className="text-gray-7 hover:bg-transparent hover:text-primary"
    />
  </Tooltip>
));
const SortableItem = SortableElement(({ ...props }) => <tr {...props} />);
const SortableBody = SortableContainer(({ ...props }) => <tbody {...props} />);

const formSectionEmptyElement: BPFormSectionElement = {
  inputType: '',
  inputLabel: '',
  bpMember: undefined,
};

export const BusinessProcessFormTable: FC<{
  // onAddRowClick: () => void;
  sectionData: BPSectionFormValues;
  onSort: ({ ...props }) => void;
  onSubmit: (values: BPSectionFormValues) => void;
}> = ({ sectionData, onSort, onSubmit }) => {
  const formik = useFormik<BPSectionFormValues>({
    initialValues: sectionData,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(
    () => {
      formik.setValues({
        formSectionElements: sectionData.formSectionElements,
      });
    },
    [
      // sectionData
    ]
  );

  const handleAddRow = () => {
    formik.setValues({
      ...formik.values,
      formSectionElements: [
        ...formik.values.formSectionElements,
        { ...formSectionEmptyElement },
      ],
    });
  };

  useEffect(() => {
    console.log('table state change', formik.values);
    onSubmit(formik.values);
  }, [formik.values]);

  const DraggableContainer = ({ ...props }) => (
    <SortableBody
      useDragHandle
      disableAutoscroll
      onSortEnd={onSort}
      {...props}
    />
  );

  const onElementInputTypeChange =
    (elIndex: number) =>
    ({ key }: { key: string }) => {
      formik.setValues({
        ...formik.values,
        formSectionElements: formik.values.formSectionElements.map(
          (val, index) => (elIndex === index ? { ...val, inputType: key } : val)
        ),
      });
    };
  // const DraggableBodyRow = ({ ...restProps }) => {
  //   const selectedRowIndex = formik.values.formSectionElements.findIndex(
  //     (x: { index: number }) => x.index === restProps['data-row-key']
  //   );
  //   return <SortableItem index={selectedRowIndex} {...restProps} />;
  // };

  return (
    <Table
      bordered
      title={() => <TableHeader onTitleChange={formik.handleChange} />}
      expandable={{
        expandIcon: ({ record: item, onExpand }) => (
          <Row align="middle">
            <RequiredIcon />
            <MenuItemButton
              icon={<Settings />}
              className="bg-gray-1 ml-1"
              onClick={(event) => {
                onExpand(item, event);
              }}
            />
          </Row>
        ),
        expandedRowRender: (_, index) => (
          <BusinessProcessFormSettings
            onElementInputTypeChange={onElementInputTypeChange(index)}
            selectedElementInputType={
              formik.values.formSectionElements[index].inputType
            }
          />
        ),
      }}
      // columns={columns}
      pagination={false}
      footer={() => <TableFooter onAddRowClick={handleAddRow} />}
      dataSource={formik.values.formSectionElements}
      rowKey={(_, i) => i as number}
      // components={{
      //   body: {
      //     wrapper: DraggableContainer,
      //     row: DraggableBodyRow,
      //   },
      // }}
    >
      <TableAntd.Column
        title="Тип элемента"
        dataIndex="inputType"
        render={(inputType) => (
          <Text className="text-gray-8">{BPFormInputRuType[inputType]}</Text>
        )}
      />

      <TableAntd.Column
        title="Лейбл"
        dataIndex="inputLabel"
        render={(placeholder: string, __, i) => (
          <Row align="middle">
            <RequiredIcon />
            <Col span={21}>
              <Input
                value={placeholder}
                name={`formSectionElements[${i}].inputLabel`}
                size="small"
                placeholder="nothn"
                className="text-sm ml-1"
                onChange={formik.handleChange}
              />
            </Col>
          </Row>
        )}
      />

      <TableAntd.Column
        title="Тип элемента"
        dataIndex="inputType"
        className="bp-table-options-column"
        render={() => (
          <Tooltip
            placement="bottom"
            title="Копировать"
            color="#182E62"
            overlayStyle={tw`text-sm leading-[20px]`}
          >
            <TableIconButton
              className="hover:bg-transparent text-gray-7"
              icon={<StarOutline />}
            />
          </Tooltip>
        )}
      />
    </Table>
  );
};
