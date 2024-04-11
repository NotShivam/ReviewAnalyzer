import React, { useEffect, useState, useContext } from "react";
import { Bars } from 'react-loader-spinner'
import CustomCard from "./CustomCard";
import news from "../default/variables/newsDemo";
import { Context } from "layouts/admin";

const demoNews = news.articles.filter((item) => item.author === "Tyler Lee")
console.log(demoNews);

const List = (props) => {
  
  const { value, value2 } = useContext(Context);
  const [dataApi, setApiData] = value;
  const [apiLoading, setApiLoading] = value2;
  const [newsData, setNewsData] = useState(news);


useEffect(()=>{
    if(dataApi && Object.keys(dataApi).length !== 0){
    setNewsData(dataApi.news);
  }
}, [dataApi])
  

  const convToLoc = (d) => {
    let localDate = new Date(d);
    return localDate.getDate() + "/" + localDate.getMonth() + "/" + localDate.getFullYear();
  }


  if (apiLoading) {
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


  return (
    <>
      <div className="mt-7">

        <div className="">
          {newsData.articles.map((item, i) => (
            i % 2 === 0 ? <>
              <div className="my-10 flex justify-between rounded-xl bg-white shadow-lg hover:shadow-xl">
                <img src={item.urlToImage} className="rounded-l-xl w-[35%] max-h-[300px]" alt="" />
                <div className="ml-4 p-6 flex flex-col flex-grow">
                  <div className="text-xl font-bold">{item.title}</div>
                  <div className="mt-4 text-md">{item.description}</div>

                  <div className="mt-4 mt-4 text-md bg-yellow-400 p-2 px-4 font-bold text-gray-700 rounded-md w-max">Source: {item.source.name}</div>

                  <div className="mt-5 flex justify-between">
                    <div className="mt-1.5">Author: {item.author}</div>
                    <div className="mt-1.5">Published at: {convToLoc(item.publishedAt)}</div>

                    <a href={item.url} className="inline-flex items-center px-3 py-2 text-md text-center text-white text-[#000000] font-bold rounded-lg bg-ourTheme hover:bg-ourDarkTheme hover:text-lightPrimary focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </> : <>
              <div className="my-10 flex justify-between rounded-xl bg-white shadow-lg hover:shadow-xl">
                <div className="mr-4 p-6 flex flex-col flex-grow">
                  <div className="text-xl font-bold">{item.title}</div>
                  <div className="mt-4 text-md">{item.description}</div>

                  <div className="mt-4 mt-4 text-md bg-yellow-400 p-2 px-4 font-bold text-gray-700 rounded-md w-max">Source: {item.source.name}</div>

                  <div className="mt-5 flex justify-between">
                    <div className="mt-1.5">Author: {item.author}</div>
                    <div className="mt-1.5">Published at: {convToLoc(item.publishedAt)}</div>

                    <a href={item.url} className="inline-flex items-center px-3 py-2 text-md text-center text-white text-[#000000] font-bold rounded-lg bg-ourTheme hover:bg-ourDarkTheme hover:text-lightPrimary focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </a>
                  </div>
                </div>
                <img src={item.urlToImage} className="rounded-r-xl w-[35%]  max-h-[300px]" alt="" />
              </div>
            </>
          ))}
        </div>
      </div>

    </>
  );
};

export default List;
