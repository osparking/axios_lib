import axios from "axios";

axios
  .get<boolean>("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    const {data} = res;
    console.log(res.data);
  })
  .catch((reason) => {
    console.error("get 오류", reason);
  });
