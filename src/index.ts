import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    console.log(res.data);
  })
  .catch((reason) => {
    console.error("get 오류", reason);
  });
