import React, { useState } from "react";
import SingleObject from "./frequentlyused/SingleObject";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

const FrequentlyUsed = props => {
  const [isDragging, setIsDragging] = useState(false);

  const onLayoutChange = (newLayout, allLayouts) => {
    props.setLayoutData(allLayouts);
  };
  const redirectLink = link => {
    if (isDragging !== true) {
      handleOnDragStop();
    } else {
      window.open(link, "_blank");
    }
  };
  const handleOnDragStart = () => {
    setIsDragging(true);
  };
  const handleOnDragStop = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div className="row no-gutters mt-3">
        <div className="col-12">
          <ResponsiveGridLayout
            className="layout"
            layouts={props.LayoutData}
            onDragStart={handleOnDragStart}
            onDragStop={handleOnDragStop}
            rowHeight={50}
            onLayoutChange={onLayoutChange}
            breakpoints={{ lg: 1080, md: 720, sm: 540, xs: 240, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          >
            {props.LayoutData.lg.map((item, index) => {
              return (
                <div key={item.i}>
                  <SingleObject
                    redirectLink={redirectLink}
                    contentName={props.LayoutDetails[index]?.name}
                    colorTextData={props.colorTextData}
                    contentLink={props.LayoutDetails[index]?.link}
                    contentIcon={props.LayoutDetails[index]?.icon}
                    handleCollect={props.handleCollect}
                    dataid={item.i}
                    dataindex={index}
                  />
                </div>
              );
            })}
          </ResponsiveGridLayout>
        </div>
      </div>
    </>
  );
};

export default FrequentlyUsed;
