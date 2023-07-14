import React, { useState } from 'react';
import { axiosGet } from '../../service';
import { useQuery } from '@tanstack/react-query';
import SlotDetails from '../../components/search-result/slot-details';
import {
  FullSlot,
  HalfSlot,
  SlotWrp,
} from '../../components/search-result/index.sc';
import { SlotBorder } from './index.sc';

const AllWidgets = () => {
  const [widgets, setWidgets] = useState({});
  const [noDataFromResponse, setNoDataFromResponse] = useState(false);

  const getWidgets = () => {
    return axiosGet('/all-widgets', {}, {});
  };

  useQuery({
    queryKey: ['widgets'],
    queryFn: () => getWidgets(),
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      if (data?.data?.data.length === 0) {
        setNoDataFromResponse(true);
      } else {
        // const brandDashboardArray = data?.data?.data?.brandDashboard;
        // const industryDashboardArray = data?.data?.data?.industryDashboard;
        const {
          overViewDetails: overview,
          brandDashboard: brand,
          industryDashboard: industry,
          peopleDashboard: people,
        } = data?.data?.data;

        setWidgets({ overview, brand, industry, people });
      }
    },
  });

  if (noDataFromResponse) {
    return <div>No data</div>;
  }
  return (
    <div>
      <SlotWrp>
        {Object.keys(widgets).length &&
          Object.keys(widgets).map((ele) => {
            return widgets[ele].map((widget, i) =>
              widget.slotType === 'full' ? (
                <FullSlot className="graph-widget" key={`widget-${i}`}>
                  <SlotBorder>
                    <SlotDetails widget={widget} dashboardType={ele} />
                  </SlotBorder>
                </FullSlot>
              ) : (
                <HalfSlot className="graph-widget" key={`widget-${i}`}>
                  <SlotBorder>
                    <SlotDetails widget={widget} dashboardType={ele} />
                  </SlotBorder>
                </HalfSlot>
              )
            );
          })}
        {/* {widgets &&
          Object.keys(widgets).map((widget, i) =>
            widget.slotType === 'full' ? (
              <FullSlot className="graph-widget" key={`widget-${i}`}>
                <SlotBorder>
                  <SlotDetails widget={widget} />
                </SlotBorder>
              </FullSlot>
            ) : (
              <HalfSlot className="graph-widget" key={`widget-${i}`}>
                <SlotBorder>
                  <SlotDetails widget={widget} />
                </SlotBorder>
              </HalfSlot>
            )
          )} */}
      </SlotWrp>
    </div>
  );
};

export default AllWidgets;
