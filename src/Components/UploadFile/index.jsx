import styled from 'styled-components';
import { useRef } from 'react';

const UiButton = styled.button`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 95%;
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

const IndexPage = ({ setResponse, setImage, label }) => {
  const fileInputRef = useRef(null);

  const date = new Date().getTime();

  const uploadPhoto = async (e) => {
    const file = e.target.files[0];
    const name = encodeURIComponent(file.name);
    const filename = `${date}__${name}`;
    const res = await fetch(`https://borgfy.vercel.app/api/uploads?file=${filename}`);
    const { url, fields } = await res.json();
    const formData = new FormData();
    setImage(filename);

    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const upload = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (upload.ok) {
      setResponse({ success: true });
    } else {
      setResponse({ success: false, type: 'image' });
    }
  };

  const UiFileInputButton = {
    acceptedFileTypes: '.jpg, .jpeg, .png, .webp',
    allowMultipleFiles: false,
  };

  const onClickHandler = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <UiButton type="button" onClick={onClickHandler}>
        {label}
      </UiButton>
      <Input
        accept={UiFileInputButton.acceptedFileTypes}
        multiple={UiFileInputButton.allowMultipleFiles}
        onChange={uploadPhoto}
        type="file"
        ref={fileInputRef}
      />
    </>
  );
};

export default IndexPage;
