import Hhead from '../components/Head';
// import Body from "../components/Body";
import { useAuth } from "@/contexts/auth"
import Login from './login';
import { useState,useEffect } from "react"
import CookieStandAdmin from '@/components/CookieStandAdmin';
const baseUrl = process.env.NEXT_PUBLIC_URL

export default function CookieStandAdmin1() {
  const [json, serJson] = useState([])
  const { user, token } = useAuth()
  
  async function PostData(cookies) {
    if (token){
    const url = baseUrl+"/api/v1/cookie_stands/"
    const option = {
      method: "POST",
      body:JSON.stringify(cookies),
      headers: {
        "Authorization": `Bearer ${token.access}`,
        "Content-Type": "application/json"
        
      }
      
    }
    const res = await fetch(url, option)
    if (res.status === 201) {
      serJson([...json, cookies])
      
  } else {
      console.log("Failed to access protected route.");
  }
  }
  }

  async function getData() {
    if (token) {
      const url = baseUrl + "/api/v1/cookie_stands/"
      const option = {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token.access}`
        }

      }
      const res = await fetch(url, option)
      if (res.status === 200) {
        const data = await res.json();
        serJson([])
        data.forEach((value) => {
          serJson((json2)=>[...json2, value])
        });

      } else {
        console.log("Failed to access protected route.");
      }
    }
    
  }

  async function deletData( idPost) {
    if (token) {
      
      const protectedUrl =  `${baseUrl}/api/v1/cookie_stands/${idPost}`;
      const protectedOptions = {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token.access}`,
        },
      };
      try {
        const protectedResponse = await fetch(protectedUrl, protectedOptions);
        if (protectedResponse.status === 204) {
          serJson([])
          getData()
        } else {
          console.log("Failed to post data.");
        }
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    } else {
      console.log("Token is missing.");
    }
  }
  useEffect(() => {
    getData();
  }, [token]);


  async function submitHandler(event) {
    event.preventDefault();
    const dataToSave = {
      location: event.target.location.value,
      minimum_customers_per_hour: event.target.Minimum.value,
      maximum_customers_per_hour: event.target.Maximum.value,
      average_cookies_per_sale: event.target.Average.value
    };

    PostData(dataToSave)
    event.target.reset();
  }

  return (

    <>
      {user ? (
      <>
      <Hhead data={"Home"} />
      <CookieStandAdmin  handler={submitHandler} data={json} del={deletData} />
      </>
      ):(
        <Login/>
      )
    }

    </>

  )
}