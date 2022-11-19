import { ListUser } from "../ListUser/ListUser";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAllUsers } from "../../slice";
import { useEffect } from "react";

const Home = () => {
  const dispatch: any = useAppDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      <ListUser />
    </div>
  );
};

export { Home };
