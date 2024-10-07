import axios from "axios"
import { redirect } from "react-router-dom"

const url = 'http://localhost:3000/messages'

export async function submitMessage({request}: any) {
  (<HTMLInputElement>document.getElementById("firstName"))!.value = "";
  (<HTMLInputElement>document.getElementById("lastName"))!.value = "";
  (<HTMLInputElement>document.getElementById("company"))!.value = "";
  (<HTMLInputElement>document.getElementById("email"))!.value = "";
  (<HTMLInputElement>document.getElementById("message"))!.value = "";

  console.log("hello");
  const formData = await request.formData()
  const entries = Object.fromEntries(formData)
  console.log(entries)

  if(window.sessionStorage.getItem("message") == "1") {
    window.sessionStorage.setItem("message", "2")
    return redirect("pop-up");
  } else {
    await axios.post(url, entries).then( response => {
      if(response.data.acknowledged) {
        window.sessionStorage.setItem("message", "1")
      } else {
        window.sessionStorage.setItem("message", "3")
      }
    }).catch( error => {
      window.sessionStorage.setItem("message", "3")
      console.log(error);
    });
  }

  return redirect("pop-up")
}

export function messageDataLoader() {
  if(window.sessionStorage.getItem("message") == null) {
    window.sessionStorage.setItem("message", "0")
  }
  return window.sessionStorage.getItem("message")
}