import React from 'react';
import { Grid,GridColumn } from "@progress/kendo-react-grid";
import { getPositions } from "../service/dataService";
import { Position } from "../data/models";

export default function PositionsPanel(){
    const [positions, setPositions] = React.useState<Position[]>();
    React.useEffect(() => {
      getPositions().then((data: Position[]) => {
        setPositions(data);
      });
    }, []);

    return (
        <div className="gridLayout">
            <Grid
            data = {positions}
            style = {{height:700}}
            >
                <GridColumn title="Symbol" field="symbol" locked={true} width={100} />
                <GridColumn title="Name" field="name" locked={true} />
                <GridColumn title="Change" field="day_change" locked={true} />
                <GridColumn title="% Change" field="change_pct" locked={true} />
                <GridColumn title="Volume" field="volume" locked={true} />
                <GridColumn title="Market Cap" field="market_cap" locked={true}/>
            </Grid>
         </div>
    )
}