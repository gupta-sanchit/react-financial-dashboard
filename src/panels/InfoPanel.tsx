import React from "react";
import {PanelBar, PanelBarItem} from "@progress/kendo-react-layout";
// @ts-ignore
import {FundInfo} from '../data/models';

export default function InfoPanel(){

    return (
        <PanelBar>
            <PanelBarItem expanded={true} title = "Fund Managers">
                <div>

                </div>
            </PanelBarItem>
        </PanelBar>
    )
}