import { useAppDispatch, useAppSelector } from "../../store/hooks";
import MaterialTable, { Column } from "@material-table/core";

const ListUser = () => {
  // const stateList = useAppSelector((state) => state.users.list);
  // const dataUser = stateList.map((el) => {
  //   return {
  //     id: el._id,
  //     name: el.name,
  //     cyty: el.city,
  //     phone: el.phone,
  //   };
  // });

  interface IPerson {
    firstName: string;
    lastName: string;
    birthYear: number;
    availability: boolean;
  }

  const lookup = { true: "Available", false: "Unavailable" };

  const columns: Array<Column<IPerson>> = [
    { title: "First Name", field: "firstName" },
    { title: "Last Name", field: "lastName" },
    { title: "Birth Year", field: "birthYear", type: "numeric" },
    { title: "Availablity", field: "availability", lookup },
  ];

  const data: Array<IPerson> = [
    {
      firstName: "Tod",
      lastName: "Miles",
      birthYear: 1987,
      availability: true,
    },
    {
      firstName: "Jess",
      lastName: "Smith",
      birthYear: 2000,
      availability: false,
    },
  ];
  return (
    <div className="App">
      <MaterialTable title="Editable Preview" columns={columns} data={data} />
    </div>
  );
};

export { ListUser };
