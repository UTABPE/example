import React from 'react';
import { PageMeta } from '@context/PageMetaContext';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router';
import { getActiveTask, submitTask } from '../api/tasksApi';
import { getForm } from '@modules/admin/modules/business-process/api/formApi';
import { Typography, Form, notification } from 'antd';
import { useFormik } from 'formik';
import { Input } from '@components/atoms/Input';
import { Button } from '@components/atoms/Button';
import { AxiosError } from 'axios';

export const TaskDetailsPage = () => {
  const params = useParams();
  const bKey = params.id ?? '';

  const formik = useFormik<{ [key: string]: any }>({
    initialValues: {},
    onSubmit(values) {
      submitFormMutation.mutate(values);
    },
  });

  const taskQuery = useQuery(['taskQuery', bKey], async () => {
    const { data: processInstance } = await getActiveTask(bKey);

    const { data: formData } = await getForm(processInstance.formId);

    return {
      processInstance,
      formData,
    };
  });

  const form = taskQuery.data?.formData;

  const submitFormMutation = useMutation(
    async (values: Record<string, any>) => {
      if (form) {
        return submitTask({
          bKey,
          sectionId: form.sections[0].id,
          data: values,
        });
      }
    },
    {
      onSuccess() {
        notification.success({
          message: 'Задача выполнена',
        });
      },
      onError(err: AxiosError) {
        notification.error({
          message: 'Произошла ошибка',
          description: JSON.stringify(err.response, null, 2),
        });
      },
    }
  );

  return (
    <>
      <PageMeta
        title="Задача"
        openMenuKeys={['tasks']}
        selectedMenuKeys={['assigned']}
        breadcrumbs={[
          {
            title: taskQuery.data?.processInstance.name ?? '',
            link: '/tasks/created',
          },
          {
            title: taskQuery.data?.processInstance.name ?? '',
          },
        ]}
      />

      {taskQuery.data && (
        <div>
          <Typography.Title>{form?.name}</Typography.Title>

          <Form
            onSubmitCapture={(e) => {
              e.preventDefault();
              formik.submitForm();
            }}
          >
            {form?.sections.map((section) => (
              <div>
                <Typography.Title>{section.title}</Typography.Title>

                <div>
                  {section.inputs.map((inp) => {
                    return (
                      <Form.Item label={inp.title}>
                        <Input
                          name={inp.id}
                          value={formik.values[inp.id]}
                          onChange={formik.handleChange}
                        />
                      </Form.Item>
                    );
                  })}
                </div>
              </div>
            ))}

            <Button htmlType="submit" loading={submitFormMutation.isLoading}>
              Отправить
            </Button>
          </Form>
        </div>
      )}
    </>
  );
};
