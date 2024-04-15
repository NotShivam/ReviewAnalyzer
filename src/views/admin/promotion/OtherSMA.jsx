import React from "react";
import Dropdown from "components/dropdown";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { Bars } from 'react-loader-spinner'
import { apiData } from "variables/sampleData";
import { useContext } from "react";
import { Context } from "layouts/admin";
import axios from "axios";
const apiUrl = "http://localhost:5000/searchYouTube"
// const apiUrl = "http://localhost:8080/api"

const OtherSMA = (props) => {
  const { onOpenSidenav, brandText } = props;
  const [darkmode, setDarkmode] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [ngram, setngram] = React.useState(null);

  const { value, value2, value3, value4 } = useContext(Context);
  const [dataApi, setApiData] = value;
  const [apiLoading, setApiLoading] = value2;
  const [flaskApi, setFlaskApi] = value3;
  const [flaskApiLoading, setFlaskApiLoading] = value4;

  const customConfig = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const fetchApi = async (query) => {
    setFlaskApiLoading(true);
    axios.post(apiUrl, query, customConfig)
      .then((res) => {
        console.log(res.data);
        setFlaskApi(res.data)
        setFlaskApiLoading(false)
      })
  };

  const handleSearch = () => {
    if (dataApi) {
      // fetchApi(JSON.stringify({ input_string: dataApi.prodName.split(' ').slice(0,3).join(' ') }));
      fetchApi(JSON.stringify({ input_string: "samsung s21" }));
    }
  }

  if (flaskApiLoading) {
    return (<div className="flex justify-center items-center mt-20 pt-20">
      <Bars
        height="100"
        width="100"
        color="#5f3aff"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>)
  }
  else {
    return (<div className="">
      <div className="mt-5 flex justify-between">
        <p className="text-xl mt-1" >Analyze a product for its youtube discussion.</p>
        <button onClick={handleSearch} className="py-2 px-3 font-bold rounded-md bg-white shadow-md hover:shadow-lg text-lg">Extract Comments</button>
      </div>
      {flaskApi ?
        <div className="grid gird-cols-1 mt-5 gap-6">
          <div className="border border-gray-800 w-fit">
            <img src={`data:image/png;base64,${flaskApi.plot_image_monogram}`} />
          </div>
          <div className="border border-gray-800 w-fit">
            <img src={`data:image/png;base64,${flaskApi.plot_image_bigram}`} />
          </div>
          <div className="border border-gray-800 w-fit">
            <img src={`data:image/png;base64,${flaskApi.plot_image_trigram}`} />
          </div>
        </div>
        :
        <>
          <div className="px-4 my-5">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="col-span-2"><img className="mb-5"
                src="https://cdn.shulex-tech.com/blog-media/uploads/2023/02/Amazon-Review-Analysis.png"
                alt="..." />
              </div>

              <div className="col-span-2 md:col-span-1 ml-5 ml-5 my-5">
                <div className="small mb-1">Analysis on your finger tip</div>
                <h1 className="display-5 text-xl md:text-3xl font-bold mb-3">Your Trusted Guide for Shopping</h1>

                <p className="font-light text-lg md:text-xl">FraudFender works by using artificial intelligence to analyze reviews, product info, seller info, and other aggregate data to identify and report on fake and unreliable eCommerce activity.
                  <br />
                  The results of our analysis are provided to you as FraudFender Review Grades and Adjusted Ratings, Guard Seller Ratings, and Review Highlights.</p>
                <div className="d-flex mt-4">
                  <button className="btn border border-gray-800 shadow-md hover:shadow-lg p-3 rounded-md" type="button">
                    <i className="bi-cart-fill me-1 text-blue-600"></i>
                    Analyze now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </div>
    );
  }
};

export default OtherSMA
