import { ColumnGroupType, ColumnsType, ColumnType } from 'antd/lib/table';
import { ChevronLeft } from '@components/atoms/Icon';
import { AttachmentTwoModel } from '@modules/reports/models/AttachmentTwoModel';
import { EditableCell } from '../EditableCell';
import { DisplayCell } from '../DisplayCell';
import { RenderedCell } from 'rc-table/lib/interface';
import { RowEditCell } from '../RowEditCell/component';
import { UnitTitle } from '../../atoms/UnitTitle';
import { DetailTitle } from '../../atoms/DetailTitle';
import { Select } from 'antd';
import { ACIDIFICATION_MOD_OPTIONS } from '@modules/reports/constants/attachmentTwo';

export const useColumns = ({
  onRowEdit,
}: {
  onRowEdit: (index: number) => void;
}) => {
  // TODO: Refactor the part with expand button and add logic
  const FirstLevelTitle = (text: string, expandable = true) => {
    return (
      <div className="h-full w-full p-3 text-left">
        {expandable && (
          <div
            className="absolute top-3 right-0 text-blue h-6 w-3 flex items-center justify-center text-sm rounded-l-full cursor-pointer"
            style={{
              background: 'rgba(73, 120, 224, 0.1)',
            }}
          >
            <ChevronLeft />
          </div>
        )}
        <span className="text-sm">{text}</span>
      </div>
    );
  };

  const editableRender: <RecordType>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any,
    record: RecordType,
    index: number
  ) => React.ReactNode | RenderedCell<RecordType> = (value, record, index) => (
    <EditableCell value={value} record={record} index={index} />
  );

  const rowEditRender: <RecordType>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any,
    record: RecordType,
    index: number
  ) => React.ReactNode | RenderedCell<RecordType> = (value, record, index) => (
    <RowEditCell
      value={value}
      record={record}
      index={index}
      onEdit={onRowEdit}
    />
  );

  const columns: ColumnsType<AttachmentTwoModel> = [
    {
      title: FirstLevelTitle('№ технологического блока', false),
      width: 200,
      filterSearch: true,
      render: rowEditRender,
      rowSpan: 3,
      children: [
        {
          rowSpan: 0,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  rowSpan: 1,
                  fixed: 'left',
                  title: <UnitTitle />,
                  dataIndex: 'techBlockNumber',
                  key: 'techBlockNumber',
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: FirstLevelTitle('ПР'),
      children: [
        {
          title: <DetailTitle text="U" />,
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="мг/дм³" />,
                  dataIndex: ['pr', 'u'],
                },
              ],
            },
          ],
        },
        {
          title: <DetailTitle text="Кислотность" />,
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="г/дм³" />,
                  dataIndex: ['pr', 'acidity'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
        {
          title: <DetailTitle text="pH" />,
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="" />,
                  dataIndex: ['pr', 'pH'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
        {
          title: <DetailTitle text="ОВП" />,
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="мВ" />,
                  dataIndex: ['pr', 'OVP'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
        {
          title: <DetailTitle text="SO42-" />,
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="г/дм³" />,
                  dataIndex: ['pr', 'SO42_'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
        {
          title: <DetailTitle text="MO33-" />,
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="г/дм³" />,
                  dataIndex: ['pr', 'NO33_'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
        {
          title: <DetailTitle text="Fe3+" />,
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="г/дм³" />,
                  dataIndex: ['pr', 'Fe3'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
        {
          title: <DetailTitle text="Fe2+" />,
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="г/дм³" />,
                  dataIndex: ['pr', 'Fe2'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
        {
          title: <DetailTitle text="Al3+" />,
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="г/дм³" />,
                  dataIndex: ['pr', 'Al3'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
        {
          title: <DetailTitle text="Si4+" />,
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="г/дм³" />,
                  dataIndex: ['pr', 'Si4'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
        {
          title: <DetailTitle text="Cl-" />,
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="г/дм³" />,
                  dataIndex: ['pr', 'Cl_'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
        {
          title: <DetailTitle text="Ca2+" />,
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="г/дм³" />,
                  dataIndex: ['pr', 'Ca2'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
        {
          title: <DetailTitle text="Mg2+" />,
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="г/дм³" />,
                  dataIndex: ['pr', 'Mg2'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
        {
          title: <DetailTitle text="Сухой" />,
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="г/дм³" />,
                  dataIndex: ['pr', 'dry'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
        {
          title: <DetailTitle text="Коэфф. окисления Fe" />,
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="" />,
                  dataIndex: ['pr', 'FeOxiCoef'],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: FirstLevelTitle('МС'),
      children: [
        {
          title: <DetailTitle text="U" />,
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="мг/дм³" />,
                  dataIndex: ['mc', 'u'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
        {
          title: <DetailTitle text="Кислотность" />,
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="г/дм³" />,
                  dataIndex: ['mc', 'acidity'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: FirstLevelTitle('BP'),
      children: [
        {
          title: <DetailTitle text="Кислотность" />,
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="г/дм³" />,
                  dataIndex: ['bp', 'acidity'],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: FirstLevelTitle('Раствор на закисление'),
      children: [
        {
          title: <DetailTitle text="Кислотность" />,
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="г/дм³" />,
                  dataIndex: ['acidificationSol', 'acidity'],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: FirstLevelTitle('Режим закисления'),
      width: 131,
      rowSpan: 3,
      children: [
        {
          rowSpan: 0,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  rowSpan: 1,
                  title: <UnitTitle text="Выпадющий список" />,
                  dataIndex: ['acidificationMod'],
                  key: 'discoveredReserves',
                  render: () => {
                    return (
                      <Select placeholder="Закисление" style={{ width: 130 }}>
                        {ACIDIFICATION_MOD_OPTIONS.map((opt) => (
                          <Select.Option key={opt.value} value={opt.value}>
                            {opt.label}
                          </Select.Option>
                        ))}
                      </Select>
                    );
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  function addCellRenderer<RecordType>(
    column: ColumnType<RecordType> | ColumnGroupType<RecordType>
  ): ColumnType<RecordType> | ColumnGroupType<RecordType> {
    const children =
      'children' in column ? column.children.map(addCellRenderer) : undefined;

    const render =
      column.render ??
      ((value, record, index) => (
        <DisplayCell value={value} record={record} index={index} />
      ));

    return {
      ...column,
      render,
      children,
      className: 'p-0',
    };
  }

  return columns.map(addCellRenderer);
};
