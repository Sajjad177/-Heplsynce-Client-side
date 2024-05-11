import axios from "axios";
import { useEffect, useState } from "react";

const useShowAllData = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);

  const refetch = () => {
    setToggle(!toggle);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/volunteers`
      );
      // console.log(data)
      setItems(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const search = async (searchQuery) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/volunteers`,
        {
          params: { title: searchQuery },
        }
      );
      setItems(data);
      setLoading(false)
    } catch (error) {
      console.log("Error searching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [toggle]);

  return {
    loading,
    items,
    refetch,
    search,
  };
};

export default useShowAllData;
