import React from  'react';
import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
  } from "@progress/kendo-react-charts";
import { getPerformance } from "../service/dataService";

export default function PerformancePanel(){
    const [data, setData] = React.useState<string[]>();
    React.useEffect(() => {
    getPerformance().then((results: string[]) => {
      setData(results);
    })
  }, []);
    return (
        <Chart>
            <ChartTitle text = {"Fund Performance"}></ChartTitle>
            <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={["2014", "2015", "2016", "2017", "2018", "2019", "2020"]} />
            </ChartCategoryAxis>
            <ChartSeries>
                <ChartSeriesItem type = "line" data ={data}/>
            </ChartSeries>
            {/* <ChartTooltip render = {renderToolTip}/> */}
        </Chart>
    )
}