import MiniCalendar from "components/calendar/MiniCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import { columnsDataCheck, columnsDataComplex, complexReview } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/customData.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import { apiData } from '../../../variables/sampleData.js'
import { useState, useEffect, useContext } from "react";
import { Context } from "layouts/admin";

const Dashboard = () => {
  const { value } = useContext(Context);
  const [dataApi, setApiData] = value;

  useEffect(() => {//for logging only
    console.log(dataApi);
  }, [dataApi]);

  let mostTrustedReviews = [];
  apiData.trusted.reviews.map((elem) => {
    mostTrustedReviews.push({
      name: elem.review,
      quantity: elem.showMore,
      date: elem.rating
    });
  })

  let leastTrustedReviews = [];
  apiData.leastTrusted.reviews.map((elem) => {
    leastTrustedReviews.push({
      name: elem.review,
      quantity: elem.showMore,
      date: elem.rating
    });
  })
  if (Object.keys(dataApi).length === 0) {
    return (
      <div className="">
        <div className="container mt-4 px-5">
          <div className="p-4 text-center">
            <div className="m-4">
              <h1 className="display-5 font-bold text-5xl">Analyze a URL</h1>
              <p className="text-2xl mt-4">Analyze a product for its reviews, get helpful insights, overview and much more
                information. Insert a URL the Amazon link of product in the search bar below to start the
                analysis.
              </p>


            </div>
          </div>
        </div>

        <section className="">
          <div className="px-4 my-5">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2"><img className="mb-5"
                src="https://cdn.shulex-tech.com/blog-media/uploads/2023/02/Amazon-Review-Analysis.png"
                alt="..." />
              </div>
              <div className="col-span-1 ml-5 ml-5 my-5">
                <div className="small mb-1">Analysis on your finger tip</div>
                <h1 className="display-5 text-3xl font-bold mb-3">Your Trusted Guide for Shopping</h1>

                <p className="font-light text-xl">FraudFender works by using artificial intelligence to analyze reviews, product info, seller info, and other aggregate data to identify and report on fake and unreliable eCommerce activity.
                  <br />
                  The results of our analysis are provided to you as FraudFender Review Grades and Adjusted Ratings, Guard Seller Ratings, and Review Highlights.</p>
                <div className="d-flex mt-4">
                  <button className="btn outline p-3 focus:ring-2 rounded-md" type="button">
                    <i className="bi-cart-fill me-1 text-blue-600"></i>
                    Analyze now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  else
    return (
      <div>
        {/* Card widget */}
        {/* {ratingFucntion(apiData.amazon.rating)} */}

        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
          <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={"Total Reviews"}
            subtitle={apiData.totRev}
          />
          <Widget
            icon={<IoDocuments className="h-6 w-6" />}
            title={"Product Rating"}
            subtitle={apiData.orgRat}
          />
          <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={"Pricing"}
            subtitle={apiData.amazon.price}
          />
          <Widget
            icon={<MdDashboard className="h-6 w-6" />}
            title={"Adjusted Reviews"}
            subtitle={apiData.adjRev}
          />
          <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={"Adjusted Rating to"}
            subtitle={apiData.adjRat}
          />
          <Widget
            icon={<IoMdHome className="h-6 w-6" />}
            title={"Unnatural Reviews"}
            subtitle={apiData.fakeReviews}
          />
          <Widget
            icon={<MdDashboard className="h-6 w-6" />}
            title={"Rating Trend"}
            subtitle={apiData.trend.perc}
          />
          <Widget
            icon={<IoMdHome className="h-6 w-6" />}
            title={"Overlapping Review History"}
            subtitle={apiData.overl.perc}
          />
          <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={"Deleted Reviews"}
            subtitle={apiData.deleted.num}
          />
        </div>

        {/* Charts */}

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          <TotalSpent
            overrepresented={apiData.wordCount.perc}
          />
          <DailyTraffic
            tot={apiData.totRev}
            title="Rating Distribution"
            col={Object.keys(apiData.amazon.rating)}
            values={Object.values(apiData.amazon.rating)}
            avg={apiData.orgRat} />
          {/* <WeeklyRevenue /> */}
        </div>

        {/* Tables & Charts */}

        <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
          {/* Check Table */}
          <div>
            <CheckTable
              columnsData={columnsDataCheck}
              tableData={mostTrustedReviews}
              title={apiData.trusted.title}
            />
          </div>

          {/* Traffic chart & Pie Chart */}

          <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
            {/* <PieChartCard title="Fake" cat1 = "Fake" cat2 = "Authentic" sus= {100 - parseInt(Number(apiData.adjRev.replace(",", "")) / Number(apiData.totRev.replace(",", "")) * 100)}/> */}
            {/* <PieChartCard title="Fake" sus= {parseInt(Number(apiData.adjRat) / Number(apiData.totRev) * 100)}/> */}
            <PieChartCard
              title={apiData.unveriPurchase.title}
              ratings={apiData.unveriPurchase.ratings}
              cat1={Number(apiData.unveriPurchase.perc.replace(/[`~%<>]/gi, '')) + "%"}
              cat2={100 - (Number(apiData.unveriPurchase.perc.replace(/[`~%<>]/gi, ''))) + "%"}
              cat1_title="Unverified"
              cat2_title="Verified"
              sus={Number(apiData.unveriPurchase.perc.replace(/[`~%<>]/gi, ''))}
              rat1="From Unverified Purchasers:"
              rat2="From Verified Purchasers:"
            />
            <PieChartCard
              title={apiData.sus.title}
              ratings={apiData.sus.ratings}
              cat1={Number(apiData.sus.perc.replace(/[`~%<>]/gi, '')) + "%"}
              cat2={100 - (Number(apiData.sus.perc.replace(/[`~%<>]/gi, ''))) + "%"}
              cat1_title="Suspicious"
              cat2_title="Verified"
              sus={Number(apiData.sus.perc.replace(/[`~%<>]/gi, ''))}
              rat1="From One-Hit Wonders:"
              rat2="More Than One Review:"
            />
            {/* <PieChartCard title="Suspicious" cat1 = "Suspicious" cat2 = "Normal" sus= {Number(apiData.sus.perc.substring(1, 3))}/> */}
          </div>

          {/* Complex Table , Task & Calendar */}

          {/* <ComplexTable
          columnsData={complexReview}
          tableData={tableDataComplex}
        /> */}
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={leastTrustedReviews}
            title={apiData.leastTrusted.title}
          />

          {/* Task chart & Calendar */}

          <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
            <TaskCard phaseRep={apiData.phaseRep} />
            {/* <DailyTraffic /> */}
            <div className="grid grid-cols-1 rounded-[20px]">
              <MiniCalendar />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;
