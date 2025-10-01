import React from "react";
import { ScrollText,CookingPot,Heater } from "lucide-react";

const States = ({orderTotal,cookingTotal}) => {
  return (
    <div className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
      {/* total order       */}

      <div className="border-4 border-dotted rounded-2xl border-primary p-5 border-amber-400">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <ScrollText className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Orders
            <h2 className="text-6xl font-bold">{orderTotal}</h2>
          </div>
        </div>
      </div>


       <div className="border-4 border-dotted rounded-2xl border-primary p-5 border-amber-400">
        <div className="flex flex-col lg:flex-row items-center justify-between">
            <Heater className="animate-pulse" color="#fcb700" size={100}/>
        
          <div className="text-xl text-center">
            Current Cooking
            <h2 className="text-6xl font-bold">{cookingTotal}</h2>
          </div>
        </div>
      </div>


       <div className="border-4 border-dotted rounded-2xl border-primary p-5 border-amber-400">
        <div className="flex flex-col lg:flex-row items-center justify-between">

            <CookingPot className="animate-pulse" color="#fcb700" size={100}/>
         
          <div className="text-xl text-center">
            Order Ready
            <h2 className="text-6xl font-bold">{0}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
