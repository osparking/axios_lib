import axios from "axios";
import _ from "lodash";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

axios
  .get<User[]>("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    res.data.forEach(printUser);
  })
  .catch((reason) => {
    console.error("get 오류", reason);
  });

function printUser(user: User) {
  // console.log("이름: ", user.name);
  // console.log("이메일: ", user.email);
  // console.log("전화: ", user.phone);
}

const arrayDiff = _.difference([1, 2, 3], [2, 4]);
console.log(arrayDiff);