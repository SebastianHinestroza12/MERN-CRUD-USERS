import { ListUser } from "../ListUser/ListUser";
import { Item } from "../Item/Item";
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
      <Item />
      <ListUser />
    </div>
  );
};

export { Home };
