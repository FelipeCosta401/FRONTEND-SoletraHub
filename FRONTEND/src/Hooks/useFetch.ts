import { useState, useEffect } from "react";
import axiosInstance from "../Services/AxiosConfig";
import { LettersInterface } from "../Interfaces/Game/Letters";

const useFetch = () => {
  const [words, setWords] = useState<LettersInterface>();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchWords = async () => {
      await axiosInstance.get("/home").then((res) => {
        const resData = res.data[0];
        // console.log(res.data)
        setWords({
          mw: resData.letter_1,
          w2: resData.letter_2,
          w3: resData.letter_3,
          w4: resData.letter_4,
          w5: resData.letter_5,
          w6: resData.letter_6,
          w7: resData.letter_7,
        });
        setResults(res.data[1]);
      });
    };

    fetchWords();
  }, []);

  return { words, results };
};

export default useFetch;
