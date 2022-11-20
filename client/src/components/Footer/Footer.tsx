import { MDBFooter } from "mdb-react-ui-kit";

export function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0,0,0)", color: "white" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a
          className="text-dark"
          style={{
            cursor: "pointer",
            color: "white",
            textDecoration: "none",
          }}
          href="https://sebastianmnena.netlify.app/"
          target="_blank"
        >
          sebastianmnena.netlify.app{" "}
        </a>
      </div>
    </MDBFooter>
  );
}
