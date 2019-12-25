import React from "react";

import { Responsive, WidthProvider } from "react-grid-layout";
import SingleObject from "../frequentlyused/SingleObject";

const ResponsiveGridLayout = WidthProvider(Responsive);

const FreqResponsiveGrid = props => {
  console.log(props);
  //Layoutdata bug
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={props.LayoutData}
      onLayoutChange={props.onLayoutChange}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      {props.LayoutData.map((item, index) => {
        return (
          <div key={item.i}>
            <SingleObject
              redirectLink={props.redirectLink}
              contentName={props.LayoutDetails[index]?.name}
              colorTextData={props.colorTextData}
              contentLink={props.LayoutDetails[index]?.link}
              contentIcon={props.LayoutDetails[index]?.icon}
            />
          </div>
        );
      })}
    </ResponsiveGridLayout>
  );
};

export default FreqResponsiveGrid;
