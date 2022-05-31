/* eslint-disable */
import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Modeler from 'bpmn-js/dist/bpmn-modeler.production.min.js';
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
  CamundaPlatformPropertiesProviderModule,
} from 'bpmn-js-properties-panel';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import classNames from 'classnames';
import { notification, Space, Tabs } from 'antd';
import { Button } from '@components/atoms/Button';
import { useMutation } from 'react-query';
import { postBpmn } from '../../../api/bpmnApi';
import CamundaExtensionModule from 'camunda-bpmn-moddle/lib';
import camundaModdleDescriptors from 'camunda-bpmn-moddle/resources/camunda';

// "https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/master/colors/resources/pizza-collaboration.bpmn"

type Props = {
  bpmn?: string;
  isLoading?: boolean;
  onSave?: (xmlString: string) => void;
  onPublish?: (xmlString: string) => void;
  onCancel?: (xmlString: string) => void;
};

export const BpmnModeler: FC<
  React.HtmlHTMLAttributes<HTMLDivElement> & Props
> = (props) => {
  const [modeler, setModeler] = useState<Modeler>();

  const containerRef = useRef<HTMLDivElement>(null);

  // const submitBpmn = useMutation(async (xml: string) => {
  //   console.log('modeler', modeler);
  //   // console.log('elementRegistry', modeler?.get('elementRegistry'));
  //   postBpmn('someName', xml);
  // });

  useEffect(() => {
    if (!containerRef.current) return;

    const _modeler = new Modeler({
      container: containerRef.current,
      propertiesPanel: {
        parent: '#bpmn-js-properties-panel',
      },
      additionalModules: [
        BpmnPropertiesPanelModule,
        BpmnPropertiesProviderModule,
        CamundaPlatformPropertiesProviderModule,
        CamundaExtensionModule,
      ],
      moddleExtensions: {
        camunda: camundaModdleDescriptors,
      },
    });

    if (props.bpmn) {
      _modeler.importXML(props.bpmn);
    } else {
      _modeler.createDiagram();
    }

    if (!modeler) {
      setModeler(_modeler);
    }

    return () => {
      modeler?.destroy();
    };
  }, []);

  const handleSave = useCallback(() => {
    const onSave = props.onSave;

    modeler?.saveXML().then((result) => {
      if (onSave) {
        onSave(result.xml);
      } else {
        // notification.info({
        //   message: 'BPMN 2.0 XML',
        //   description: result.xml,
        //   duration: 0,
        //   className: 'w-6/12',
        // });
        // submitBpmn.mutate(result.xml, {
        //   onSuccess() {
        //     notification.success({ message: 'BPMN опубликован' });
        //   },
        //   onError() {
        //     notification.error({
        //       message: 'Произошла ошибка при публикации BPMN',
        //     });
        //   },
        // });
      }
    });
  }, [modeler, props.onSave]);

  const handlePublish = () => {
    modeler?.saveXML().then((result) => {
      if (props.onPublish) {
        props.onPublish(result.xml);
      }
    });
  };

  return (
    <div
      {...props}
      className={classNames('w-full grid grid-cols-12 gap-4', props.className)}
    >
      <div className="col-span-9 h-full flex flex-col">
        <div ref={containerRef} className="w-full border border-gray-4 grow" />

        <div className="border-r border-gray-4">
          <div className="flex justify-center items-center pt-6 pb-12">
            <Space direction="horizontal">
              <Button
                type="default"
                onClick={() =>
                  notification.error({ message: 'Гаааля, отмена!' })
                }
                loading={props.isLoading}
              >
                Отменить
              </Button>

              <Button
                disabled
                type="default"
                onClick={handleSave}
                loading={props.isLoading}
              >
                Сохранить
              </Button>

              <Button
                type="primary"
                loading={props.isLoading}
                onClick={handlePublish}
              >
                Опубликовать
              </Button>
            </Space>
          </div>
        </div>
      </div>

      <div className="col-span-3">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Настройки" key="1">
            <div id="bpmn-js-properties-panel" />
          </Tabs.TabPane>

          <Tabs.TabPane tab="Шаблоны" key="2">
            Templates TBD
          </Tabs.TabPane>

          <Tabs.TabPane tab="Черновики" key="3">
            Whatever TBD
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};
