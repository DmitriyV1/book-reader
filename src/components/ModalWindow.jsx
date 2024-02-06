import { Button, Modal } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AddMovieForm from "./AddMovieForm";

function ModalWindow() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit } = useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function onSubmit(data) {
    console.log(data);
    setIsModalOpen(false);
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
      >
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("bookName")}></input>
            <input {...register("bookAuthor")}></input>
            <div>
              <input {...register("file")} type="file" id="fileupload"></input>
              <label htmlFor="fileupload">Select book...</label>
            </div>
            <button type="submit">Add</button>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default ModalWindow;
