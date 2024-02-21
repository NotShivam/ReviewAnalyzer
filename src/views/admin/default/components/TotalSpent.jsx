import React from "react";
import {
  MdArrowDropUp,
  MdOutlineCalendarToday,
  MdBarChart,
} from "react-icons/md";
import Card from "components/card";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "variables/charts";
import LineChart from "components/charts/LineChart";

const TotalSpent = (props) => {
  const rngi = (i, j) => {
    return Math.floor(Math.random() * (i - j + 1) ) + j;
  }
  const wordCountCol = ["0 - 5", "6 - 15", "16 - 25", "26 - 40", "41 - 65", "66 - 100", "100+"];
  const getWordCount = () => {
    const wordCount = []
    wordCount.push(rngi(16, 11));
    wordCount.push(rngi(19, 13));
    wordCount.push(rngi(18, 14));
    wordCount.push(rngi(16, 12));
    wordCount.push(rngi(15, 13));
    wordCount.push(rngi(10, 7));
    wordCount.push(100 - wordCount.reduce((a, b) => a + b));
    console.log(wordCount);
    return wordCount;
  }
  const x = {
    legend: {
      show: false,
    },
  
    theme: {
      mode: "light",
    },
    chart: {
      type: "line",
  
      toolbar: {
        show: false,
      },
    },
  
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
  
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000"
      },
      theme: 'dark',
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      type: "text",
      range: undefined,
      categories: wordCountCol,
    },
  
    yaxis: {
      show: false,
    },
  };
  const y = [
    {
      name: "Word Count",
      data: getWordCount(),
      color: "#4318FF",
    },
    {
      name: "Average",
      data: [13.7, 15.8, 16.2, 14.6, 14.1, 9.8, 15.8],
      color: "#6AD2FF",
    },
  ]

  return (
    <Card extra="!p-[20px] text-center">
      <div className="flex justify-between">
        <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
          <MdOutlineCalendarToday />
          <span className="text-sm font-medium text-gray-600">All time</span>
        </button>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="flex flex-col">
          <p className="mt-[20px] text-3xl font-bold text-navy-700 dark:text-white">
          {rngi(40, 26)}
          </p>
          <div className="flex flex-col items-start">
            <p className="mt-2 text-sm text-gray-600">WordCount</p>
            <div className="flex flex-row items-center justify-center">
              <MdArrowDropUp className="font-medium text-green-500" />
              <p className="text-sm font-bold text-green-500"> {props.overrepresented} </p>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <LineChart
            options={x}
            series={y}
          />
        </div>
      </div>
    </Card>
  );
};

export default TotalSpent;
