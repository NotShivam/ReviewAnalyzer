import CardMenu from "components/card/CardMenu";
import React from "react";
import Checkbox from "components/checkbox";
import { MdDragIndicator, MdCheckCircle } from "react-icons/md";
import Card from "components/card";
import Progress from "components/progress";

const TaskCard = (props) => {
  const { phaseRep } = props;

  return (
    <Card extra="pb-7 p-[20px]">
      {/* task header */}
      <div className="relative flex flex-row justify-between">
        <div className="flex items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-100 dark:bg-white/5">
            <MdCheckCircle className="h-6 w-6 text-brand-500 dark:text-white" />
          </div>
          <h4 className="ml-4 text-xl font-bold text-navy-700 dark:text-white">
            Phrase Repetition
          </h4>
        </div>
        <CardMenu />
      </div>

      <div className="mt-2 flex flex-row text-sm !justify-between px-2 py-3 ">
        <div className="">Substantial Repetition </div>
        <div className="ml-2">
          <div className="mb-2">
            <span>Ratings: </span> <b className="pb-2">{phaseRep.ratings[0]}</b>
          </div>
          <Progress width="w-[108px]" value={parseFloat(phaseRep.ratings[0].slice(0, -2)) * 20} />
        </div>
      </div>
      <div className="flex flex-row text-sm !justify-between px-2 py-3 ">
        <div className="">Without Substantial Repetition </div>
        <div className="ml-2">
          <div className="mb-2">
            <span>Ratings: </span> <b className="pb-2">{phaseRep.ratings[1]}</b>
          </div>
          <Progress width="w-[108px]" value={parseFloat(phaseRep.ratings[1].slice(0, -2)) * 20} />
        </div>
      </div>

      {/* task content */}


      <div className="h-full w-full">
        <div className="mt-1 pb-0 flex items-center justify-between p-2">
          <div className="flex items-center justify-center gap-2">
            <p className="text-base font-bold text-navy-700 dark:text-white">
              Phrase in title
            </p>
          </div>
          <div>
            <b className="h-6 w-6 text-navy-700 dark:text-white">% of reviews</b>
          </div>
        </div>


        {phaseRep.inTitles.map((elem) => (
          <div className="mt-1 flex items-center justify-between p-2">
            <div className="flex items-center justify-center gap-2">
              <p className="text-base text-navy-700 dark:text-white">
                {elem.text}
              </p>
            </div>
            <div>
              <b className="h-6 w-6 text-navy-700 dark:text-white"> {elem.perc.slice(0, -11)} </b>
            </div>
          </div>
        ))}

      </div>
    </Card>
  );
};

export default TaskCard;
