// Example component making API requests
import { useEffect, useState } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const Home = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/users`);
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {data.map((item) => (
        <p key={item._id}>
          {item.name}
          <br />
          <button>{item.email}</button>
        </p>
      ))}
    </div>
  );
};

export default Home;
