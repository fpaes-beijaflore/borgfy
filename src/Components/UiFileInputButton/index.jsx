import styled from 'styled-components';
import { useRef } from 'react';

const UiButton = styled.button`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 769px;
  height: 103px;
  padding: 26px 10px 26px 30px;
  border-radius: 10px;
  background-color: #f8f8f8;
  border: none;
  font-size: 2.5rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  text-align: left;
  color: rgba(0, 0, 0, 0.5);
`;

const Input = styled.input`
  display: none;
`;

export const UiFileInputButton = ({
  onChange,
  label,
  acceptedFileTypes,
  allowMultipleFiles,
  uploadFileName,
}) => {
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  const onClickHandler = () => {
    fileInputRef.current?.click();
  };

  const onChangeHandler = (event) => {
    if (!event.target.files?.length) {
      return;
    }

    const formData = new FormData();

    Array.from(event.target.files).forEach((file) => {
      formData.append(event.target.name, file);
    });

    onChange(formData);

    formRef.current?.reset();
  };

  return (
    <form ref={formRef}>
      <UiButton type="button" onClick={onClickHandler}>
        {label}
      </UiButton>
      <Input
        accept={acceptedFileTypes}
        multiple={allowMultipleFiles}
        name={uploadFileName}
        onChange={onChangeHandler}
        ref={fileInputRef}
        type="file"
      />
    </form>
  );
};

UiFileInputButton.defaultProps = {
  acceptedFileTypes: '.jpg, .jpeg, .png, .webp',
  allowMultipleFiles: false,
};
