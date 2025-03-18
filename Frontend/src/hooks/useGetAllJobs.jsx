import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { searchedQuery } = useSelector((store) => store.job);
  const { authToken } = useSelector((store) => store.auth); // Get token from Redux

  useEffect(() => {
    const fetchAllJobs = async () => {
      if (!authToken) {
        setError("Unauthorized: Missing authentication token.");
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(
          `${JOB_API_ENDPOINT}/get?keyword=${searchedQuery || ""}`, // Avoid undefined queries
          {
            headers: {
              Authorization: `Bearer ${authToken}`, // Include the auth token
            },
            withCredentials: true, // If your backend uses session cookies
          }
        );
        console.log("API Response:", res.data);

        if (res.data.status) {
          dispatch(setAllJobs(res.data.jobs));
        } else {
          setError("Failed to fetch jobs.");
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        setError(error.response?.data?.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllJobs();
  }, [dispatch, searchedQuery, authToken]); // Include dependencies

  return { loading, error };
};

export default useGetAllJobs;
