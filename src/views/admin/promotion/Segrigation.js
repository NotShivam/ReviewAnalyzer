import React, { useEffect, useState, useContext } from "react";
import { Bars } from 'react-loader-spinner'
import CustomCard from "./CustomCard";
import news from "../default/variables/newsDemo";
import { Context } from "layouts/admin";

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


const demoNews = news.articles.filter((item) => item.author === "Tyler Lee")
console.log(demoNews);

const Segrigation = (props) => {

    const { value, value2 } = useContext(Context);
    const [dataApi, setApiData] = value;
    const [apiLoading, setApiLoading] = value2;
    const [newsData, setNewsData] = useState(news);


    useEffect(() => {
        if (dataApi && Object.keys(dataApi).length !== 0) {
            setNewsData(dataApi.news);
        }
    }, [dataApi])



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

    const openAiData = {
        "pros": [
            "Powerful Snapdragon 8 gen 3 chipset",
            "Large 6,500 mAh battery with 80W fast charging",
            "Upgraded shoulder triggers for gaming",
            "Ice coolant system for temperature control",
            "Minimal bloatware and clean Android OS experience"
        ],
        "cons": [
            "Not water resistant",
            "Front-facing camera quality is softer compared to rivals",
            "Positioning of headphone jack is not ideal for gaming"
        ],
        "build_quality": "Sturdy with brushed metal frame and flat glass back, available in black or white colors",
        "os_experience": "Red Magic OS on top of Android 14 with minimal bloatware, offers customization options and game-specific features",
        "battery_life": "Over 5.5 hours of gaming on highest settings, 18% battery drain per hour",
        "display": {
            "size": "6.8 inches",
            "type": "AMOLED",
            "resolution": "2480 x 1116",
            "refresh_rate": "120Hz",
            "brightness": "1,600 nits"
        },
        "camera": {
            "main": "50MP Samsung GN5 sensor with OIS",
            "ultra_wide": "50MP Samsung GN1 sensor with ultra-wide lens",
            "macro": "2MP macro shooter",
            "selfie": "16MP under-display camera"
        },
        "other_phones_to_consider": [
            "Asus ROG Phone 5",
            "Xiaomi Black Shark 4",
            "Lenovo Legion Phone Duel 2"
        ],
        "user_type": "Heavy gamer",
        "value_for_money": "Excellent value for gamers with top-notch specs and features",

        "overall_experience": "Impressive gaming performance, solid battery life, and good overall user experience",
        "final_rating": "9.2"
    }

    return (
        <>
            <div className="mt-7">

                <div className="grid grid-cols-3 gap-x-8 gap-y-8">
                    <div class="w-full p-6 pb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <FaMobileAlt className="w-9 h-9 text-[#5f3aff] mb-2" />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Display</h5>
                        </a>

                        {Object.entries(openAiData.display).map(([k, v]) => (<>
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

                        {Object.entries(openAiData.camera).map(([k, v]) => (<>
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
                        {openAiData.other_phones_to_consider.map((item, i) => (<>
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
                            {openAiData.build_quality}
                        </p>
                    </div>

                    <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <IoIosBatteryFull className="w-9 h-9 text-[#5f3aff] mb-2" />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Battery</h5>
                        </a>

                        <p class="inline font-normal tracking-wide text-gray-700 dark:text-gray-400">
                            {openAiData.battery_life}
                        </p>
                    </div>

                    <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <FaAndroid className="w-9 h-9 text-[#5f3aff] mb-2" />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">OS Experience</h5>
                        </a>

                        <p class="inline font-normal tracking-wide text-gray-700 dark:text-gray-400">
                            {openAiData.os_experience}
                        </p>
                    </div>

                    <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <FaUserAlt className="w-9 h-9 text-[#5f3aff] mb-2" />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">User Type</h5>
                        </a>

                        <p class="inline font-normal tracking-wide text-gray-700 dark:text-gray-400">
                            {openAiData.user_type}
                        </p>
                    </div>

                    <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <GiMoneyStack className="w-9 h-9 text-[#5f3aff] mb-2" />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Value for Money</h5>
                        </a>

                        <p class="inline font-normal tracking-wide text-gray-700 dark:text-gray-400">
                            {openAiData.value_for_money}
                        </p>
                    </div>

                    <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <IoIosHappy className="w-9 h-9 text-[#5f3aff] mb-2" />
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Overall Experience</h5>
                        </a>

                        <p class="inline font-normal tracking-wide text-gray-700 dark:text-gray-400">
                            {openAiData.overall_experience}
                        </p>
                    </div>

                </div>

                <div className="mt-10 mb-4 w-full p-6 pb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <label for="default-range" class="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Predicted Rating: {openAiData.final_rating}/10</label>

                    <div className="flex justify-between w-full">
                        <p className="inline text-gray-800 font-bold test-lg">0</p>
                        <div className="w-[94%] h-[28px] flex flex-col justify-center">
                            <input id="default-range" type="range" value={parseFloat(openAiData.final_rating) * 10} class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
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

                        {openAiData.pros.map((item, i) => (<>
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

                        {openAiData.cons.map((item, i) => (<>
                            <div className="mb-1 tracking-wide">
                                <p class="inline capitalize font-normal text-gray-800 dark:text-gray-400">
                                    {i + 1}. {item}</p>
                            </div>
                        </>
                        ))}
                    </div>

                </div>
            </div>

        </>
    );
};

export default Segrigation;
