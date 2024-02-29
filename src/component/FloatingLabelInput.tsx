import React, { useEffect, useState } from 'react';
import '../style/FloatingLabelInput.css';
import { FormInstance } from 'antd';

interface FloatingLabelInputProps {
    label: string;
    form: FormInstance;
    disabled: boolean;
  }

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({ label, form, disabled }) => {

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    setValue(form.getFieldValue('firstName'));
  }, [form]);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    form.setFieldsValue({ firstName: e.target.value });
  }

  return (
    <div className={`floating-label-input ${isFocused || value ? 'focused' : ''}`}>
      <label>{label}</label>
      <input
        type="text"
        onFocus={()=>setIsFocused(true)}
        onBlur={()=>setIsFocused(false)}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};

export default FloatingLabelInput;
