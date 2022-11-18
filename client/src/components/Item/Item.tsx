import Table from "react-bootstrap/Table";

const Item = () => {
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
    </Table>
  );
};

export { Item };
