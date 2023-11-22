import React from "react";
import { BsFillTrophyFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
 

const Sidebar = () => {
    return (
        <div className="lanking_wapper">
            <div className="lanking_title"><BsFillTrophyFill /> TOP 10</div>
            <div className="lanking_1"><BiSolidUser /> 1등 </div>
            <div className="lanking_2"><BiSolidUser /> 2등 </div>
            <div className="lanking_3"><BiSolidUser /> 3등 </div>
            <div className="lanking_4"><BiSolidUser /> 4등 </div>
            <div className="lanking_5"><BiSolidUser /> 5등 </div>
            <div className="lanking_6"><BiSolidUser /> 6등 </div>
            <div className="lanking_7"><BiSolidUser /> 7등 </div>
            <div className="lanking_8"><BiSolidUser /> 8등 </div>
            <div className="lanking_9"><BiSolidUser /> 9등 </div>
            <div className="lanking_10"><BiSolidUser /> 10등 </div>
        </div>
    );
}

export default Sidebar;