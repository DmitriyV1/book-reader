import { Button, Modal } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useUploadFile } from "../services/useUploadFile";
import { useAddBook } from "../services/useAddBook";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.8rem;
`;

const StyledInput = styled.input`
  width: 15vw;
  margin-bottom: 1.8rem;
`;

const Wrapper = styled.div`
  display: flex;
  /* flex-direction: row; */
  /* justify-content: space-between; */
  /* margin-right: 2.6rem; */

  &:first-child {
    margin-right: 2.6rem;
    background-color: green;
  }

  border-bottom: 1px solid black;
  padding-bottom: ;
`;

const StyledLabel = styled.label`
  padding-right: 2.6rem;
`;

const StyledButton = styled.button`
  height: 3.4rem;
  width: 7rem;
  background-color: #1677ff;
  border: 1px;
  border-radius: 3px;
  color: white;
  /* margin-bottom: 10px; */
`;

function ModalWindow() {
  const { isUploading, uploadBook, isSuccess } = useUploadFile();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const { isLoading, addCustomBook } = useAddBook();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function onSubmit(book) {
    uploadBook(book);
    if (isSuccess) {
      addCustomBook(book);
    }
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        // title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            placeholder="Book name"
            {...register("bookName", { required: "This field is required" })}
          ></StyledInput>
          <StyledInput
            placeholder="Book author"
            {...register("bookAuthor")}
          ></StyledInput>
          <Wrapper>
            <StyledLabel htmlFor="fileupload">Select book</StyledLabel>
            <StyledInput
              {...register("file")}
              type="file"
              id="fileupload"
            ></StyledInput>
          </Wrapper>
          <StyledButton type="submit">Add</StyledButton>
          <span>
            <Button type="default" onClick={handleCancel}>
              Back
            </Button>
          </span>
        </FormWrapper>
      </Modal>
    </>
  );
}

export default ModalWindow;
