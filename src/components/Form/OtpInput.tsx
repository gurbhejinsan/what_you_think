import React, { useRef, useState } from 'react';
import { IOTPInputProps } from '../../interface/comman';


const OTPInput: React.FC<IOTPInputProps> = ({ length, onChange }) => {
  const [otp, setOTP] = useState<string>('');
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    const newOTP = otp.substr(0, index) + value + otp.substr(index + 1);
    setOTP(newOTP);
    onChange(newOTP);
    if (value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && index > 0 && !otp[index]) {
      const newOTP = otp.substr(0, index - 1) + otp.substr(index);
      setOTP(newOTP);
      onChange(newOTP);
      if (inputRefs.current[index - 1]) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div className='center-item'>
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          className='otp__input'
          type="text"
          maxLength={1}
          value={otp[index] || ''}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          ref={(ref) => (inputRefs.current[index] = ref)}
        />
      ))}
    </div>
  );
};

export default OTPInput;
