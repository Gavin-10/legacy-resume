import axios from "axios";
import fakeData from "./fakeData.json"

const url = 'http://localhost:3000/messages';

export async function loadEmails() {
  let data = null;

  await axios.get(url).then((response) => {
    data = response.data;
  }).catch((error) => {
    console.log(error);
    data = "Error";
  });

  return fakeData;
}