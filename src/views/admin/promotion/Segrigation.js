import React, { useEffect, useState, useContext } from "react";
import { Bars } from 'react-loader-spinner'
import { Context } from "layouts/admin";
import axios from "axios";

import { FaMinus, FaMobileAlt } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
import { IoIosBatteryFull } from "react-icons/io";
import { FaAndroid } from "react-icons/fa";
import { IoIosHappy } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";


const apiUrl = "http://localhost:5000/extract-specs"

const Segrigation = (props) => {

    const {value, gemData, gemLoad } = useContext(Context);
    
    const [dataApi, setApiData] = value;
    const [flaskApiGem, setFlaskApiGem] = gemData
    const [flaskApiLoadingGem, setFlaskApiLoadingGem] = gemLoad
    
    const customConfig = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
    
      const fetchApi = async (query) => {
        setFlaskApiLoadingGem(true);
        axios.post(apiUrl, query, customConfig)
          .then((res) => {
            console.log(res.data);
            setFlaskApiGem(res.data)
            setFlaskApiLoadingGem(false)
          })
      };
    
      const handleSearch = () => {
        if (dataApi) {
          fetchApi(JSON.stringify({ input_string: dataApi.prodName.split(' ').slice(0,4).join(' ') }));
        //   fetchApi(JSON.stringify({ input_string: "samsung s21" }));
        }
      }

      
    const flaskApiGem_temp = { 'pros': ['Compact and easy to handle', 'Nice display with vivid colors', 'Good performance with the Exynos 2100 chipset', 'Versatile camera system', 'Impressive video recording capabilities'], 'cons': ['Missing headphone jack', 'Battery life could be better', 'No microSD card support', 'Glasstic back may not be as premium as glass', 'Camera zoom capabilities could be better'], 'build_quality': 'Nice in-hand feel, sturdy construction, IP68 water resistance', 'os_experience': 'One UI 3.1 on top of Android 11, smooth and feature-rich', 'user_type': 'Moderate user, casual gamer', 'battery_life': 'Moderate battery life, lasts a full day with average use, fast charging support', 'display': { 'size': '6.2 inches', 'type': 'Dynamic AMOLED 2X', 'resolution': '2400 x 1080', 'refresh_rate': '120Hz' }, 'camera': { 'main': '12MP wide-angle lens with f/1.8 aperture and OIS', 'ultrawide': '12MP ultrawide-angle lens with f/2.2 aperture', 'telephoto': '64MP telephoto lens with f/2.0 aperture and 3x optical zoom', 'selfie': '10MP front-facing camera with f/2.2 aperture' }, 'other_phones_to_consider': ['Google Pixel 5', 'OnePlus 9', 'iPhone 12'], 'value_for_money': 'Good value for the price, offers a balance of features and performance', 'overall_experience': 'Solid overall smartphone experience, with good performance, a nice display, and a versatile camera system', 'final_rating': '8.5' }


    if (flaskApiLoadingGem) {
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
                <p className="text-xl mt-1" >Aspect Based Sentiment Analysis of reviews.</p>
                <button onClick={handleSearch} className="py-2 px-3 font-bold rounded-md bg-white shadow-md hover:shadow-lg text-lg">Process reviews</button>
            </div>
            {flaskApiGem ?
                <div className="mt-7">

                <div className="grid grid-cols-3 gap-x-8 gap-y-8">
                    <div class="w-full p-6 pb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <FaMobileAlt className="w-9 h-9 text-[#5f3aff] mb-2" />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Display</h5>
                        </a>

                        {Object.entries(flaskApiGem.display).map(([k, v]) => (<>
                            <div className="mb-1 tracking-wide">
                                <p class="inline capitalize font-normal text-gray-800 dark:text-gray-400">{k}: </p>
                                <p class="inline font-normal text-gray-700 dark:text-gray-400">{v}</p>
                            </div>
                        </>
                        ))}
                    </div>

                    <div class="w-full p-6 pb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <FaCamera className="w-9 h-9 text-[#5f3aff] mb-2" />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Camera</h5>
                        </a>

                        {Object.entries(flaskApiGem.camera).map(([k, v]) => (<>
                            <div className="mb-1 tracking-wide">
                                <p class="inline capitalize font-normal text-gray-800 dark:text-gray-400">{k}: </p>
                                <p class="inline font-normal text-gray-700 dark:text-gray-400">{v}</p>
                            </div>
                        </>
                        ))}
                    </div>

                    <div class="w-full p-6 pb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <FaMobileAlt className="w-9 h-9 text-[#5f3aff] mb-2" />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Other Phones to consider</h5>
                        </a>
                        {flaskApiGem.other_phones_to_consider.map((item, i) => (<>
                            <div className="mb-1 tracking-wide">
                                <p class="inline capitalize font-normal text-gray-700 dark:text-gray-400">
                                    {i + 1}. {item}</p>
                                    
                            </div>
                        </>
                        ))}
                    </div>

                    <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <FaCertificate className="w-9 h-9 text-[#5f3aff] mb-2" />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Build Quality</h5>
                        </a>

                        <p class="inline font-normal tracking-wide text-gray-700 dark:text-gray-400">
                            {flaskApiGem.build_quality}
                        </p>
                    </div>

                    <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <IoIosBatteryFull className="w-9 h-9 text-[#5f3aff] mb-2" />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Battery</h5>
                        </a>

                        <p class="inline font-normal tracking-wide text-gray-700 dark:text-gray-400">
                            {flaskApiGem.battery_life}
                        </p>
                    </div>

                    <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <FaAndroid className="w-9 h-9 text-[#5f3aff] mb-2" />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">OS Experience</h5>
                        </a>

                        <p class="inline font-normal tracking-wide text-gray-700 dark:text-gray-400">
                            {flaskApiGem.os_experience}
                        </p>
                    </div>

                    <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <FaUserAlt className="w-9 h-9 text-[#5f3aff] mb-2" />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">User Type</h5>
                        </a>

                        <p class="inline font-normal tracking-wide text-gray-700 dark:text-gray-400">
                            {flaskApiGem.user_type}
                        </p>
                    </div>

                    <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <GiMoneyStack className="w-9 h-9 text-[#5f3aff] mb-2" />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Value for Money</h5>
                        </a>

                        <p class="inline font-normal tracking-wide text-gray-700 dark:text-gray-400">
                            {flaskApiGem.value_for_money}
                        </p>
                    </div>

                    <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <IoIosHappy className="w-9 h-9 text-[#5f3aff] mb-2" />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Overall Experience</h5>
                        </a>

                        <p class="inline font-normal tracking-wide text-gray-700 dark:text-gray-400">
                            {flaskApiGem.overall_experience}
                        </p>
                    </div>

                </div>

                <div className="mt-10 mb-4 w-full p-6 pb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <label for="default-range" class="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Predicted Rating: {flaskApiGem.final_rating}/10</label>

                    <div className="flex justify-between w-full">
                        <p className="inline text-gray-800 font-bold test-lg">0</p>
                        <div className="w-[94%] h-[28px] flex flex-col justify-center">
                            <input id="default-range" type="range" value={parseFloat(flaskApiGem.final_rating) * 10} class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                        </div>
                        <p className="inline text-gray-800 font-bold text-lg">10</p>
                    </div>

                </div>

                <div className="mt-10 grid grid-cols-2 gap-8">
                    <div class="w-full p-6 pb-4 bg-white border-2 border-green-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        {/* <FaPlus className="w-9 h-9 text-[#5f3aff] mb-2" /> */}
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Pros</h5>
                        </a>

                        {flaskApiGem.pros.map((item, i) => (<>
                            <div className="mb-1 tracking-wide">
                                <p class="inline capitalize font-normal text-gray-800 dark:text-gray-400">
                                    {i + 1}. {item}</p>
                            </div>
                        </>
                        ))}
                    </div>

                    <div class="w-full p-6 pb-4 bg-white border-2 border-red-600 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        {/* <FaMinus className="w-9 h-9 text-[#5f3aff] mb-2" /> */}
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Cons</h5>
                        </a>

                        {flaskApiGem.cons.map((item, i) => (<>
                            <div className="mb-1 tracking-wide">
                                <p class="inline capitalize font-normal text-gray-800 dark:text-gray-400">
                                    {i + 1}. {item}</p>
                            </div>
                        </>
                        ))}
                    </div>

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

export default Segrigation;
