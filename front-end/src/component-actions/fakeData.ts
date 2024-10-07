import { redirect } from "react-router-dom";
import axios from "axios";

const url = 'http://localhost:3000/fakeData';

export async function fakeDataAction({request}: any) {
  (<HTMLInputElement>document.getElementById("fakeName"))!.value = "";
  (<HTMLInputElement>document.getElementById("fakeEmail"))!.value = "";
  (<HTMLInputElement>document.getElementById("fakeComments"))!.value = "";

  const objectId = await documentQuery();
  if(objectId == undefined || objectId == -1) {
    window.sessionStorage.setItem("hasSubmitted", "0");
    console.log(window.sessionStorage.getItem("hasSubmitted"));
  }

  if(window.sessionStorage.getItem("hasSubmitted") == "1") {
    window.sessionStorage.setItem("hasSubmitted", "2");
  } else {
    const formData = await request.formData();
    const entries = Object.fromEntries(formData);
    console.log(entries);

    await axios.post(url, entries).then( response => {
      const data = response.data;
      if(data.acknowledged) {
        console.log(data.insertedId);
        window.sessionStorage.setItem("documentId", data.insertedId);
        window.sessionStorage.setItem("hasSubmitted", "1");
      } else {
        window.sessionStorage.setItem("hasSubmitted", "3");
      }
    }).catch( error => {
      window.sessionStorage.setItem("hasSubmitted", "3");
      console.log(error);
    });
  }

  return redirect("pop-up");
}

export async function fakeDataLoader() {
  if(window.sessionStorage.getItem("hasSubmitted") == null) {
    window.sessionStorage.setItem("hasSubmitted", "0")
  }
  return window.sessionStorage.getItem("hasSubmitted");
}

export async function fakeDocumentLoader() {
  const docs = await documentQuery();
  return docs;
}

async function documentQuery() {
  let doc: number | object = -1;

  if(window.sessionStorage.getItem("documentId") != null) {
    await axios.get(`${url}?search=${window.sessionStorage.getItem("documentId")}`).then((response) => {
      if(response.data[0] != undefined) {
        doc = response.data[0];
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  
  return doc;
}