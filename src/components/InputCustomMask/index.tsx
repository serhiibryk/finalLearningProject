import { Form } from 'antd';
import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { mockData } from '../../utils';

const InputCustomMask = () => {
  const [value, setValue] = useState('');
  const onChange = ({ target: { value } }: any) => setValue(value);

  return (
    <Form.Item
      initialValue={mockData.data.phoneNumber}
      label={'Phone'}
      name={'Phone'}
      rules={[{ required: true, message: 'Please input your Pharmacy ID!' }]}
    >
      <InputMask
        name={'phoneNumber'}
        mask={'+38(999)999-99-99'}
        value={value}
        onChange={onChange}
        // placeholder={'+38(___)___-__-__'}
      ></InputMask>
    </Form.Item>
  );
};

export default InputCustomMask;
