import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import MaterialTable, { Column } from "@material-table/core";
import { deleteUsers, getAllUsers } from "../../slice";
import Swal from "sweetalert2";
import "./ListUser.css";

const ListUser = () => {
  const dispatch: any = useAppDispatch();
  const stateList = useAppSelector((state) => state.users.list);

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
    <div className="container-list">
      <div className="container-item">
        <MaterialTable
          title="Lista De Usuarios"
          columns={columns}
          data={dataUser}
          actions={[
            {
              icon: "edit",
              tooltip: "Editar",
              onClick: () => {
                alert("si");
              },
            },

            (rowData) => ({
              icon: "delete",
              tooltip: "Delete User",
              onClick: () => {
                Swal.fire({
                  text: "Esta seguro que desea eliminar este registro?",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Si, eliminar!",
                  cancelButtonText: "Cancelar",
                }).then((result) => {
                  if (result.isConfirmed) {
                    dispatch(deleteUsers(rowData.id));
                    dispatch(getAllUsers());
                    Swal.fire({
                      title: "Registro eliminado!",
                      icon: "success",
                      showConfirmButton: false,
                      timer: 1000,
                    });
                  }
                });
              },
            }),
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
        />
      </div>
    </div>
  );
};

export { ListUser };
