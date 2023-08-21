const getUsername = document.querySelector('#user') as HTMLInputElement
const formSubmit = document.querySelector('.form') as HTMLFormElement
const main_container = document.querySelector('.main-container') as HTMLElement

interface UdserData {
    id:number;
    login:string;
    avatar_url:string;
    location:string;
    url:string

}

async function myCustomFetch<T>(url:string,options?:RequestInit):
  Promise<T> {
              const res = await fetch(url,options);
              if(!res.ok){
                 throw new Error(
                    `Network response was not ok -status:${res.status}`
                 )
                 
              }     

              const data = await res.json()
              console.log(data)
              return data
}

const showResultUI = (singleUser) =>{

}


function fetchUserdata(url:string){
     myCustomFetch<UdserData[]>(url, {}).then((userinfo)=>{
        for(const singleUser in userinfo){
       showResultUI(singleUser)}
     })
}

//call all user data
fetchUserdata("https://api.github.com/users")