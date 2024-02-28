import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
//import form from antd
import { Form, Input, Button, Checkbox, Card, Switch } from 'antd';

function App() {

  const [form] = Form.useForm();

  const [ formDisabled, setFormDisabled ] = useState<boolean>(false);

  return (
    <Card className='w-screen h-screen'>
      <Form.Item>
        <div className='flex flex-row justify-between'>
          <span>Editable</span>
          <Switch 
            defaultChecked
            onChange={(checked) => setFormDisabled(!checked)}
          />
        </div>
      </Form.Item>
      <Form form={form} disabled={formDisabled} layout='vertical'>
        <Form.Item label="">
          <Input placeholder='First Name'/>
        </Form.Item>
        <Form.Item className='font-bold' label="Are you proficient in ReadJS development?">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item 
          wrapperCol={{ span: 24 }}
          className='flex justify-center'
        >
          <Button type='primary' className="rounded-2xl">Process</Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default App;
