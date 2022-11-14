import React, { FC, useEffect, useRef, useState } from 'react';
import { Button, Form, Input, Switch, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { UploadChangeParam, UploadFile, UploadProps } from 'antd/lib/upload';
import InputCustomMask from '../InputCustomMask';
import { mockData } from '../../utils';

const { TextArea } = Input;

const TestForm: FC<ITestForm> = () => {
  const ref: any = useRef();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<any>();

  const onFinish = (values: any) => {
    // console.log(values);
  };

  const handleChangeUpload: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    setImageUrl(info.fileList);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  useEffect(() => {
    ref.current.setFieldsValue(mockData.data);
  }, []);
  // console.log(imageUrl);

  return (
    <Form
      ref={ref}
      name={'basic'}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete={'off'}
    >
      <Form.Item
        label={'Pharmacy ID'}
        name={'yarpaIdentifier'}
        rules={[{ required: true, message: 'Please input your Pharmacy ID!' }]}
      >
        <Input />
      </Form.Item>

      <InputCustomMask />

      <Form.Item
        label={'Pharmacy name'}
        name={'company'}
        rules={[{ required: true, message: 'Please input your Pharmacy name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label={'City'} name={'city'} rules={[{ required: true, message: 'Please input your City!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label={'Adress'} name={'address'} rules={[{ required: true, message: 'Please input your Adress!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={'Upload'}>
        <Upload
          beforeUpload={() => false}
          listType={'picture-card'}
          className={'avatar-uploader'}
          accept={'.jpg, .png'}
          onChange={handleChangeUpload}
        >
          {uploadButton}
        </Upload>
      </Form.Item>
      <Form.Item name={'Switch'} label={'Switch'}>
        <Switch defaultChecked={false} />
      </Form.Item>
      <Form.Item label={'Text'} name={'Text'}>
        <TextArea maxLength={100} style={{ height: 120 }} />
      </Form.Item>
      <br />
      <br />
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type={'primary'} htmlType={'submit'}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TestForm;
