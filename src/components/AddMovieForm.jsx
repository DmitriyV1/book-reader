import { useForm } from "react-hook-form";

function AddMovieForm() {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("bookName")}></input>
        <input {...register("bookAuthor")}></input>
        <div>
          <input {...register("file")} type="file" id="fileupload"></input>
          <label htmlFor="fileupload">Select book...</label>
        </div>
      </form>
    </>
  );
}

export default AddMovieForm;
