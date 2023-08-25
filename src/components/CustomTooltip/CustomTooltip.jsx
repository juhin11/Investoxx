 import React from 'react';
import Icon from '../Icon/Icon';
 
 const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
    return (
    <div className="rounded-xl overflow-hidden tooltip-head">
      <div className="flex items-center justify-between p-2">
        <div className="">Revenue</div>
        <Icon path="res-react-dash-options" className="w-2 h-2" />
      </div>
      <div className="tooltip-body text-center p-3">
        <div className="text-white font-bold">{`${payload[0]?.value}`}</div>
        <div className="">Volume : {`${payload[0]?.payload.sales}`}</div>
      </div>
    </div>
    );
    }
    return null;
}

export default CustomTooltip;