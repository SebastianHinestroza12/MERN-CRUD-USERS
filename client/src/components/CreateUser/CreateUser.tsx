import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../store/hooks";
import Swal from "sweetalert2";
import { postUsers, getAllUsers } from "../../slice";
import { useHistory } from "react-router-dom";
import "./index.css";

type FormValues = {
  name: string;
  city: string;
  phone: string;
};

export function Create() {
  const history = useHistory();
  const dispatch: any = useAppDispatch();
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(postUsers(data));
    dispatch(getAllUsers());
    Swal.fire({
      text: `${data.name} Agregado`,
      icon: "success",
      timer: 2000,
    });
    history.push("/");
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" />
        <input {...register("city")} placeholder="City" />
        <input type="number" {...register("phone")} placeholder="Phone" />

        <input type="submit" />
      </form>
    </div>
  );
}
