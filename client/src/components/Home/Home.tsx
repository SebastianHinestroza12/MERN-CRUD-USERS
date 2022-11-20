import { ListUser } from "../ListUser/ListUser";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAllUsers } from "../../slice";
import { Footer } from "../Footer/Footer";
import { useEffect } from "react";

const Home = () => {
  const dispatch: any = useAppDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      <ListUser />
      <Footer />
    </div>
  );
};

export { Home };
