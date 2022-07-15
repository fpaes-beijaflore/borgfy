import 'react-datepicker/dist/react-datepicker.css';

import DatePicker from 'react-datepicker';
import { forwardRef } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 95%;
  height: 103px;
  padding: 26px 10px 26px 30px;
  border-radius: 10px;
  background-color: #f8f8f8;
  border: none;
  font-size: 2.1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: rgba(0, 0, 0, 0.5);
  margin: 10px 0;

  &:focus {
    outline: none;
  }

  &::placeholder {
    width: 109px;
    height: 51px;
    opacity: 0.5;
    font-size: 2.1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    height: 103px;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    height: 60px;
    padding: 13px 5px 13px 15px;
    border-radius: 10px;
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
      line-height: 2;
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    height: 60px;
    padding: 13px 5px 13px 15px;
    border-radius: 10px;
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
      line-height: 2;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    height: 60px;

    padding: 13px 5px 13px 15px;
    border-radius: 10px;
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
      line-height: 2;
    }
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    height: 60px;

    padding: 13px 5px 13px 15px;
    border-radius: 10px;
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
      line-height: 1;
    }
  }

  @media only screen and (max-width: 576px) {
    height: 60px;

    padding: 13px 5px 13px 15px;
    border-radius: 10px;
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
      line-height: 2;
    }
  }
`;

const StyledSelect = styled.select`
  width: 95%;
  height: 103px;
  padding: 26px 40.1px 26px 30px;
  border-radius: 10px;
  background-color: #f8f8f8;
  border: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: url('/0707FD02-2AF8-467F-9DF3-9F2AD8DED647.svg') #f8f8f8 no-repeat calc(95% - 40px) !important;
  font-size: 2.1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: rgba(0, 0, 0, 0.5);
  margin: 10px 0;

  &::placeholder {
    width: 109px;
    height: 51px;
    opacity: 0.5;
    font-size: 2.1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
  }

  option {
    width: 249px;
    height: 51px;
    margin: 0 422.3px 0 0;
    opacity: 0.5;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    height: 103px;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    height: 70px;
    padding: 13px 5px 13px 15px;
    border-radius: 10px;
    font-size: 1rem;
    background: url('/0707FD02-2AF8-467F-9DF3-9F2AD8DED647.svg') #f8f8f8 no-repeat calc(95% - 20px) !important;

    &::placeholder {
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    height: 60px;
    padding: 13px 5px 13px 15px;
    border-radius: 10px;
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    height: 50px;

    padding: 13px 5px 13px 15px;
    border-radius: 10px;
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    height: 50px;

    padding: 13px 5px 13px 15px;
    border-radius: 10px;
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 576px) {
    height: 40px;

    padding: 13px 5px 13px 15px;
    border-radius: 10px;
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
    }
  }
`;

const StyledTextarea = styled.textarea`
  width: 95%;
  height: 167px;
  padding: 27px 10px 105px 30px;
  border-radius: 10px;
  background-color: #f8f8f8;
  border: none;
  font-size: 2.1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.72;
  letter-spacing: normal;
  text-align: left;
  color: rgba(0, 0, 0, 0.5);
  margin: 10px 0;

  &::placeholder {
    width: 128px;
    height: 35px;
    opacity: 0.5;
    font-size: 2.1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.72;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1919px) {
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 1200px) and (max-width: 1400px) {
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 576px) {
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
    }
  }
`;

const StyledSubmitButton = styled.button`
  width: 323px;
  height: 103px;
  padding: 34px 130px 34px 131px;
  border-radius: 10px;
  background-color: #f8f8f8;
  border: none;
  margin: 10px 0;

  p {
    width: 62px;
    height: 35px;
    opacity: 0.3;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.72;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
  }
`;

const StyledButton = styled.button`
  width: 95%;
  height: 103px;
  padding: 26px 10px 26px 30px;
  border-radius: 10px;
  background-color: #f8f8f8;
  border: none;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: rgba(0, 0, 0, 0.5);

  &::placeholder {
    width: 109px;
    height: 51px;
    opacity: 0.5;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
  }
`;

export function Input({ onChange, value, placeholder }) {
  return <StyledInput onChange={onChange} value={value} placeholder={placeholder} />;
}

export function Select({ onChange, placeholder, data }) {
  return (
    <StyledSelect onChange={onChange} defaultValue={'DEFAULT'} placeholder={placeholder}>
      <option value="DEFAULT" disabled hidden>
        {placeholder}
      </option>
      {data.map((item) => (
        <option key={`item__${item}`} value={item}>
          {item}
        </option>
      ))}
    </StyledSelect>
  );
}

export function Textarea({ onChange, value, placeholder }) {
  return <StyledTextarea onChange={onChange} value={value} placeholder={placeholder} />;
}

export function SubmitButton({ onClick, placeholder }) {
  return (
    <StyledSubmitButton onClick={onClick}>
      <p>{placeholder}</p>
    </StyledSubmitButton>
  );
}

export function DatePickerComp({ startDate, setStartDate }) {
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <StyledButton className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </StyledButton>
  ));

  return (
    <DatePicker
      time
      maxDate={new Date()}
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<CustomInput />}
    />
  );
}
