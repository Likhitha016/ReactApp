import React from "react";
import { action } from "@storybook/addon-actions";
import TableCard from "./tableCard"

export default {
    component: TableCard,
    title: "TableCard",
};
let props={
tableNumber:"Table1",
price:"1020/-",
onClick:action("clicked table card") 
}
export const TableCardStory=()=>{ 
    return <TableCard {...props}/>  
}