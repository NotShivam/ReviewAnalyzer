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
import {apiData} from '../../../variables/sampleData.js'

const Dashboard = () => {
  let mostTrustedReviews = [];
  apiData.trusted.reviews.map((elem)=>{
    mostTrustedReviews.push({
      name: elem.review,
      quantity: elem.showMore,
      date: elem.rating
    });
  })

  let leastTrustedReviews = [];
  apiData.leastTrusted.reviews.map((elem)=>{
    leastTrustedReviews.push({
      name: elem.review,
      quantity: elem.showMore,
      date: elem.rating
    });
  })

  return (
    <div>
      {/* Card widget */}

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
          title={"Adjusted Rating"}
          subtitle={apiData.adjRat}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Fake Reviews"}
          subtitle={apiData.fakeReviews}
        />
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <DailyTraffic 
        tot = {apiData.totRev}
        title="Rating Distribution" 
        col={Object.keys(apiData.amazon.rating)} 
        values={Object.values(apiData.amazon.rating)}  />
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
          <PieChartCard title="Fake" cat1 = "Fake" cat2 = "Authentic" sus= {100 - parseInt(Number(apiData.adjRev.replace(",", "")) / Number(apiData.totRev.replace(",", "")) * 100)}/>
          {/* <PieChartCard title="Fake" sus= {parseInt(Number(apiData.adjRat) / Number(apiData.totRev) * 100)}/> */}
          <PieChartCard title="Suspicious" cat1 = "Suspicious" cat2 = "Normal" sus= {Number(apiData.sus.perc.substring(1, 3))}/>
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
          {/* <TaskCard /> */}
          <DailyTraffic />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
