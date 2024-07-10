// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  try {
    let link1:string = "https://jsonplaceholder.typicode.com/todos/" + todoId;
    const todores = await axios.get(link1)
    const todo = todores.data;
    const userId:number = todores.data.userId;

    let link2:string = "https://jsonplaceholder.typicode.com/users/" + userId;
    const userres = await axios.get(link2)
    const user = userres.data;
    return {
          owner: user.name,
          title: todo.title,
          completed: todo.completed
        };
    } catch(err) {
          return "INVALID TODO ID";
      }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;

/*
รหัส นศ.: 660610779

ชื่อ-สกุล : พิมลนาฏ แก้วบุตร
*/