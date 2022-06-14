import Axios from "axios";
import { MAIN_URL } from "../common/Config";

// -----------------------------------------< GET >-----------------------------------------------

function GET(url: string): any {
  return new Promise<String>((resolve, reject) => {
    Axios.get(MAIN_URL + url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(new Error(error));
      });
  });
}

// -----------------------------------------< POST >-----------------------------------------------

function POST(url: string, data: any): any {
  return new Promise<String>((resolve, reject) => {
    Axios.post(MAIN_URL + url, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(new Error(error));
      });
  });
}

// -----------------------------------------< PUT >-----------------------------------------------

function PUT(url: string, data: any): any {
  return new Promise<String>((resolve, reject) => {
    Axios.put(MAIN_URL + url, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(new Error(error));
      });
  });
}

// -----------------------------------------< DELETE >-----------------------------------------------

function DELETE(url: string): any {
  return new Promise<String>((resolve, reject) => {
    Axios.delete(MAIN_URL + url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(new Error(error));
      });
  });
}

export { GET, POST, PUT, DELETE };
