import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Link, useParams } from "react-router-dom";
import MaterialTable, { Column } from "@material-table/core";
import { deleteUserList } from "../../slice";

const ListUser = () => {
  const dispatch: any = useAppDispatch();
  const stateList = useAppSelector((state) => state.users.list);
  const { id } = useParams();

  interface IPerson {
    id: number;
    name: string;
    city: string;
    phone: number;
  }

  const columns: Array<Column<IPerson>> = [
    { title: "Id", field: "id", type: "numeric" },
    { title: "Name", field: "name" },
    { title: "City", field: "city" },
    { title: "Phone", field: "phone", type: "numeric" },
  ];

  const dataUser = stateList.map((el) => {
    return {
      id: el._id,
      name: el.name,
      city: el.city,
      phone: el.phone,
    };
  });

  return (
    <div className="App">
      <MaterialTable
        title="Lista De Usuarios"
        columns={columns}
        data={dataUser}
        actions={[
          {
            icon: "editable",
            tooltip: "Editar",
            onClick: () => {
              alert("si");
            },
          },

          (rowData) => ({
            icon: "delete",
            tooltip: "Delete User",
            onClick: () => {
              dispatch(deleteUserList(rowData.id));
            },
          }),
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </div>
  );
};

export { ListUser };
