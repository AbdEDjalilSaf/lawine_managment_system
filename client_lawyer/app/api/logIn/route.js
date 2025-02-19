import axios from "axios"

const route = async (values) => {
  console.log(" start route log In");
    try {
        const response = await axios.post(
          "https://9238-41-109-160-76.ngrok-free.app/auth/login",
          values,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
console.log("------------- response route login ----------------",response);
        return Response.json(response);
    }catch(err){
console.log("----------- route log in ------------------",err);
return Response.json('');
    }

}

export default route
