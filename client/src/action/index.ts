import axios from "axios";

export function allUserDb() {
  return async function (dispatch: any) {
    let json = await axios.get("/");
    dispatch({
      payload: json.data,
    });
  };
}
