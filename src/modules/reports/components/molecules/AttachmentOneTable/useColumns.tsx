import { ColumnGroupType, ColumnsType, ColumnType } from 'antd/lib/table';
import { ChevronLeft } from '@components/atoms/Icon';
import { AttachmentOneModel } from '@modules/reports/models/AttachmentOneModel';
import { EditableCell } from '../EditableCell';
import { DisplayCell } from '../DisplayCell';
import { RenderedCell } from 'rc-table/lib/interface';
import { RowEditCell } from '../RowEditCell/component';
import { UnitTitle } from '../../atoms/UnitTitle';
import { DetailTitle } from '../../atoms/DetailTitle';

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

  const columns: ColumnsType<AttachmentOneModel> = [
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
      title: FirstLevelTitle('ГРМ'),
      width: 155,
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
                  title: <UnitTitle text="тыс.т" />,
                  dataIndex: 'grm',
                  key: 'grm',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: FirstLevelTitle('Проектный коэффициент извлечения'),
      width: 155,
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
                  title: <UnitTitle text="%" />,
                  dataIndex: 'projectExtractionCoefficient',
                  key: 'projectExtractionCoefficient',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: FirstLevelTitle('Запасы вскрытые'),
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
                  title: <UnitTitle text="т" />,
                  dataIndex: 'discoveredReserves',
                  key: 'discoveredReserves',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: FirstLevelTitle('Время работы'),
      children: [
        {
          title: FirstLevelTitle('Закисление'),
          children: [
            {
              title: <DetailTitle text="за отчетный месяц" />,
              width: 164,
              children: [
                {
                  title: <UnitTitle text="дни" />,
                  dataIndex: ['workTime', 'acidification', 'perReportingMonth'],
                  render: editableRender,
                },
              ],
            },
            {
              title: <DetailTitle text="с нарастанием" />,
              width: 140,
              children: [
                {
                  title: <UnitTitle text="месяц" />,
                  dataIndex: ['workTime', 'acidification', 'accumulated'],
                },
              ],
            },
          ],
        },
        {
          title: FirstLevelTitle('Выщелачивание'),
          children: [
            {
              title: <DetailTitle text="за отчетный месяц" />,
              width: 164,
              children: [
                {
                  title: <UnitTitle text="дни" />,
                  dataIndex: ['workTime', 'acidification', 'perReportingMonth'],
                  render: editableRender,
                },
              ],
            },
            {
              title: <DetailTitle text="с нарастанием" />,
              width: 140,
              children: [
                {
                  title: <UnitTitle text="месяц" />,
                  dataIndex: ['workTime', 'acidification', 'accumulated'],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: FirstLevelTitle('Количество скважин'),
      children: [
        {
          title: FirstLevelTitle('Откачных'),
          children: [
            {
              title: <DetailTitle text="всего" />,
              width: 177,
              children: [
                {
                  title: <UnitTitle text="шт" />,
                  dataIndex: ['numberOfWells', 'pumpOut', 'total'],
                  render: editableRender,
                },
              ],
            },
            {
              title: <DetailTitle text="в работе" />,
              width: 177,
              children: [
                {
                  title: <UnitTitle text="шт" />,
                  dataIndex: ['numberOfWells', 'pumpOut', 'active'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
        {
          title: FirstLevelTitle('закачных'),
          children: [
            {
              title: <DetailTitle text="всего" />,
              width: 177,
              children: [
                {
                  title: <UnitTitle text="шт" />,
                  dataIndex: ['numberOfWells', 'pumpIn', 'total'],
                  render: editableRender,
                },
              ],
            },
            {
              title: <DetailTitle text="в работе" />,
              width: 177,
              children: [
                {
                  title: <UnitTitle text="шт" />,
                  dataIndex: ['numberOfWells', 'pumpIn', 'active'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: FirstLevelTitle('Производительность скважин'),
      children: [
        {
          title: FirstLevelTitle('Откачных'),
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="м³/ч" />,
                  rowSpan: 1,
                  dataIndex: ['wellProductivity', 'pumpOut'],
                },
              ],
            },
          ],
        },
        {
          title: FirstLevelTitle('Закачных'),
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="м³/ч" />,
                  rowSpan: 1,
                  dataIndex: ['wellProductivity', 'pumpIn'],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: FirstLevelTitle('Добыто ПР'),
      children: [
        {
          title: FirstLevelTitle('за отчетный месяц'),
          width: 177,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="тыс.м³" />,
                  dataIndex: ['prMined', 'perReportingMonth'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
        {
          title: FirstLevelTitle('с нарастанием'),
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="тыс.м³" />,
                  dataIndex: ['prMined', 'accumulated'],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: FirstLevelTitle('Средняя концентрация МЕ в ПР'),
      children: [
        {
          title: FirstLevelTitle('за отчетный месяц'),
          rowSpan: 2,
          width: 140,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="мг/дм³" />,
                  dataIndex: [
                    'averageMeConcentrationInPr',
                    'perReportingMonth',
                  ],
                },
              ],
            },
          ],
        },
        {
          title: FirstLevelTitle('с нарастанием'),
          rowSpan: 2,
          width: 140,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="мг/дм³" />,
                  dataIndex: ['averageMeConcentrationInPr', 'accumulated'],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: FirstLevelTitle('Количество Ме в ПР'),
      children: [
        {
          title: FirstLevelTitle('за отчетный месяц'),
          width: 177,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="кг" />,
                  dataIndex: ['meAmountInPr', 'perReportingMonth'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
        {
          title: FirstLevelTitle('с нарастанием'),
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="т" />,
                  dataIndex: ['meAmountInPr', 'accumulated'],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: FirstLevelTitle('Подано Ме в ВР (МС)'),
      children: [
        {
          title: FirstLevelTitle('за отчетный месяц'),
          width: 204,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="кг" />,
                  dataIndex: ['mePassedToBp', 'perReportingMonth'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: FirstLevelTitle('Извлечено Ме из недр'),
      children: [
        {
          title: FirstLevelTitle('за отчетный месяц'),
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="кг" />,
                  dataIndex: ['extractedMeFromBowels', 'perReportingMonth'],
                },
              ],
            },
          ],
        },
        {
          title: FirstLevelTitle('с нарастанием'),
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="т" />,
                  dataIndex: ['extractedMeFromBowels', 'accumulated'],
                },
              ],
            },
          ],
        },
        {
          title: FirstLevelTitle('Коэффициент извлечения'),
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="%" />,
                  dataIndex: ['extractedMeFromBowels', 'extractionCoefficient'],
                },
              ],
            },
          ],
        },
        {
          title: FirstLevelTitle('Переизвлечение'),
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="т" />,
                  dataIndex: ['extractedMeFromBowels', 'reextraction'],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: FirstLevelTitle('Выпуск Ме в ГП'),
      children: [
        {
          title: FirstLevelTitle('за отчетный месяц'),
          width: 177,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="кг" />,
                  dataIndex: ['releaseMeInGp', 'perReportingMonth'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
        {
          title: FirstLevelTitle('с нарастанием'),
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="т" />,
                  dataIndex: ['releaseMeInGp', 'accumulated'],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: FirstLevelTitle('Подано растворов на закисление'),
      children: [
        {
          title: FirstLevelTitle('за отчетный месяц'),
          children: [
            {
              title: <DetailTitle text="МС" />,
              width: 177,
              children: [
                {
                  title: <UnitTitle text="тыс.м³" />,
                  render: editableRender,
                  dataIndex: [
                    'submittedSolutionsForAcidification',
                    'perReportingMonth',
                    'ms',
                  ],
                },
              ],
            },
            {
              title: <DetailTitle text="ПВ" />,
              width: 177,
              children: [
                {
                  title: <UnitTitle text="тыс.м³" />,
                  render: editableRender,
                  dataIndex: [
                    'submittedSolutionsForAcidification',
                    'perReportingMonth',
                    'pv',
                  ],
                },
              ],
            },
          ],
        },
        {
          title: FirstLevelTitle('с нарастанием'),
          rowSpan: 2,
          width: 140,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="тыс.м³" />,
                  dataIndex: [
                    'submittedSolutionsForAcidification',
                    'accumulated',
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: FirstLevelTitle('Подано ВР'),
      children: [
        {
          title: FirstLevelTitle('за отчетный месяц'),
          width: 177,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="тыс.м³" />,
                  dataIndex: ['submittedBp', 'perReportingMonth'],
                  render: editableRender,
                },
              ],
            },
          ],
        },
        {
          title: FirstLevelTitle('с нарастанием'),
          width: 140,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="тыс.м³" />,
                  dataIndex: ['submittedBp', 'accumulated'],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: FirstLevelTitle('Ж / Т'),
      children: [
        {
          title: FirstLevelTitle('закисление'),
          width: 151,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,

              children: [
                {
                  title: <UnitTitle text="" />,
                  dataIndex: ['jt', 'acidification'],
                },
              ],
            },
          ],
        },
        {
          title: FirstLevelTitle('Выщелачивание'),
          width: 151,
          rowSpan: 2,
          children: [
            {
              rowSpan: 0,
              children: [
                {
                  title: <UnitTitle text="" />,
                  dataIndex: ['jt', 'leaching'],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: FirstLevelTitle('Расход серной кислоты'),
      children: [
        {
          title: FirstLevelTitle('за отчетный месяц'),
          children: [
            {
              title: <DetailTitle text="сумма" />,
              width: 132,
              children: [
                {
                  title: <UnitTitle text="т" />,
                  dataIndex: [
                    'sulfuricAcidConsumption',
                    'perReportingMonth',
                    'total',
                  ],
                },
              ],
            },
            {
              title: <DetailTitle text="закисление" />,
              width: 177,
              children: [
                {
                  title: <UnitTitle text="т" />,
                  dataIndex: [
                    'sulfuricAcidConsumption',
                    'perReportingMonth',
                    'acidification',
                  ],
                  render: editableRender,
                },
              ],
            },
            {
              title: <DetailTitle text="Выщелачивание" />,
              width: 177,
              children: [
                {
                  title: <UnitTitle text="т" />,
                  dataIndex: [
                    'sulfuricAcidConsumption',
                    'perReportingMonth',
                    'leaching',
                  ],
                  render: editableRender,
                },
              ],
            },
          ],
        },
        {
          title: FirstLevelTitle('с нарастанием'),
          children: [
            {
              title: <DetailTitle text="сумма" />,
              width: 132,
              children: [
                {
                  title: <UnitTitle text="т" />,
                  dataIndex: [
                    'sulfuricAcidConsumption',
                    'accumulated',
                    'total',
                  ],
                },
              ],
            },
            {
              title: <DetailTitle text="закисление" />,
              width: 132,
              children: [
                {
                  title: <UnitTitle text="т" />,
                  dataIndex: [
                    'sulfuricAcidConsumption',
                    'accumulated',
                    'acidification',
                  ],
                },
              ],
            },
            {
              title: <DetailTitle text="Выщелачивание" />,
              width: 132,
              children: [
                {
                  title: <UnitTitle text="т" />,
                  dataIndex: [
                    'sulfuricAcidConsumption',
                    'accumulated',
                    'leaching',
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      title: FirstLevelTitle('Удельный расход серной кислоты'),
      children: [
        {
          title: FirstLevelTitle('на 1 т ГРМ'),
          children: [
            {
              title: <DetailTitle text="закисление" />,
              width: 132,
              children: [
                {
                  title: <UnitTitle text="кг/т" />,
                  dataIndex: [
                    'specificSulfuricAcidConsumption',
                    'grmPerTons',
                    'acidification',
                  ],
                },
              ],
            },
            {
              title: <DetailTitle text="Выщелачивание" />,
              width: 132,
              children: [
                {
                  title: <UnitTitle text="кг/т" />,
                  dataIndex: [
                    'specificSulfuricAcidConsumption',
                    'grmPerTons',
                    'leaching',
                  ],
                },
              ],
            },
          ],
        },
        {
          title: FirstLevelTitle('на 1 кг Me'),
          children: [
            {
              title: <DetailTitle text="закисление" />,
              width: 132,
              children: [
                {
                  title: <UnitTitle text="кг/кг" />,
                  dataIndex: [
                    'specificSulfuricAcidConsumption',
                    'mePerKg',
                    'acidification',
                  ],
                },
              ],
            },
            {
              title: <DetailTitle text="Выщелачивание" />,
              width: 132,
              children: [
                {
                  title: <UnitTitle text="кг/кг" />,
                  dataIndex: [
                    'specificSulfuricAcidConsumption',
                    'mePerKg',
                    'leaching',
                  ],
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
