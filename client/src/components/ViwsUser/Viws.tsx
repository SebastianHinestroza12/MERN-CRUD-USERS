import Table from "react-bootstrap/Table";
import { AiOutlineForm } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";

type Props = {
  name?: string;
  city?: string;
  phone?: number;
};

const Viws: React.FC<Props> = (props) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          {/* <th>#</th> */}
          <th>Name</th>
          <th>City</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          {/* <td>1</td> */}
          <td>{props.name}</td>
          <td>{props.city}</td>
          <td>{props.phone}</td>
          <td>
            <AiOutlineForm />
            <BsTrashFill />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export { Viws };
