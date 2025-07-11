import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckAuth({ children, protectedRoute }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  console.log("Thi sis starting");
  

  useEffect(() => {

    console.log("Use Effecft");
    
    const token = localStorage.getItem("token");
    console.log(token,"Token");
    

    if (protectedRoute) {
      if (!token) {
        console.log("reaching here");
        
        navigate("/login");
      } else {
        console.log("Reachinf else");
        
        setLoading(false);
      }
    } else {
        console.log("Idhar");
        
      if (token) {
        navigate("/");
      } else {
        setLoading(false);
      }
    }
  }, [navigate, protectedRoute]);

  if (loading) {
    return <div>loading...</div>;
  }
  return children;
}

export default CheckAuth;