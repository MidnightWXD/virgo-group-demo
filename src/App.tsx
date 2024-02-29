import { useState, useEffect } from 'react';
import './style/App.css';
import { Form, Button, Checkbox, Card, Switch, Radio } from 'antd';
import preSetData from './asset/data';
import { FormDataType, SubmitDataType } from './type/appTypes';
import FloatingLabelInput from './component/FloatingLabelInput';
//Tools library, sequence of tools
const tools = ['Redux', 'Lodash', 'AntDesign', 'Webpack', 'Other']

function App() {

  const [form] = Form.useForm();
  const [ formDisabled, setFormDisabled ] = useState<boolean>(false);

  useEffect(() => {
    form.setFieldsValue({
      ...preSetData,
      toolsUsed: convertToolsUsed(preSetData.toolsUsed)
    });
  }, [form]);

  //Function Overloading
  function convertToolsUsed(data: string[]): string;
  function convertToolsUsed(data: string): string[];
  /**
   * @description convert the toolsUsed to the correct format
   */
  function convertToolsUsed(data: string[] | string): string | string[] {
  
    if (Array.isArray(data)) {
      return data.sort((a, b) => tools.indexOf(a) - tools.indexOf(b)).map(tool => tools.indexOf(tool).toString()).join(',');
    } else {
      return data.split(',').map(toolIndex => tools[parseInt(toolIndex, 10)]).filter(tool => tool !== undefined);
    }
  }

  /**
   * 
   * @description submit the form, get the values and convert the toolsUsed to the correct format
   */
  function submit(values: FormDataType) {
    console.log('Received values of form: ', values);
    let data : SubmitDataType = {
      ...values,
      toolsUsed: convertToolsUsed(values.toolsUsed)
    }
    console.log(data);
  }
  

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-black max-[430px]:bg-white'>
      <Card className='min-[431px]:w-[380px] min-[431px]:h-fit p-[10px] rounded-[20px] w-screen h-screen'>
        <Form.Item>
          <div className='flex flex-row justify-between items-center'>
            <span className='text-[#343434] text-[16px] font-[500]'>Editable</span>
            <Switch 
              defaultChecked
              onChange={(checked) => setFormDisabled(!checked)}
            />
          </div>
        </Form.Item>
        <Form form={form} disabled={formDisabled} layout='vertical' onFinish={(values)=>submit(values)}>
          <Form.Item label="" name={'firstName'}>
            <FloatingLabelInput label='First Name' form={form} disabled={formDisabled}/>
          </Form.Item>
          <Form.Item 
            label={ <span className='text-[18px] font-bold'>Are you proficient in ReadJS development?</span>}
            name={'isProficient'}
          >
            <Radio.Group className='flex flex-col gap-[15px]'>
              <Radio value={false}>No</Radio>
              <Radio value={true}>Yes</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item 
            className='font-bold'
            label={
              <div className='flex flex-col'>
                <span className='text-[18px]'>Which tools do you use?</span>
                <span className='text-[#616161] font-[400] text-[16px]'>Please select all that apply</span>
              </div> 
            }
            name={'toolsUsed'}
          >
            <Checkbox.Group className='flex flex-col gap-[15px] font-normal mt-[8px]'>
              <Checkbox value="Redux" >Redux</Checkbox>
              <Checkbox value="Lodash">Lodash</Checkbox>
              <Checkbox value="AntDesign">Ant design</Checkbox>
              <Checkbox value="Webpack">Webpack</Checkbox>
              <Checkbox value="Other">Other</Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item 
            wrapperCol={{ span: 24 }}
            className='flex justify-center mt-[40px]'
          >
            <Button type='primary' htmlType="submit" className="rounded-full w-[200px] h-[57px]">Process</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default App;
