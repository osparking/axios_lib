import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    console.log("get 반응 도착");
  })
  .catch((reason) => {
    console.error("get 오류", reason);
  });
