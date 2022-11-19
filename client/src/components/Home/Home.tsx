import { Viws } from "../ViwsUser/Viws";
import { Item } from "../Item/Item";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAllUsers } from "../../slice";
import { useEffect } from "react";

const Home = () => {
  // const state = useAppSelector((state) => state.users.list);
  const dispatch: any = useAppDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div>
      {/* <Item /> */}
      <Viws />
    </div>
  );
};

export { Home };
