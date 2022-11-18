import { useEffect } from "react";
import { Viws } from "../ViwsUser/Viws";
import { Item } from "../Item/Item";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { allUserDb } from "../../action";
import { allUsers } from "../../slice/index";

const Home = () => {
  const dispatch: any = useAppDispatch();
  const allUser = useAppSelector((state) => state.crudUser.users);
  console.log(allUser);
  useEffect(() => {
    dispatch(allUsers(allUser, allUserDb()));
  }, [dispatch]);
  return (
    <div>
      {/* <Item /> */}
      <Viws />
    </div>
  );
};

export { Home };
