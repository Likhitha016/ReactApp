import React from "react";
import { action } from "@storybook/addon-actions";
import Card from "./card"

export default {
    component: Card,
    title: "Card",
};
let props={
imagePath:"/static/images/restaurent1.jpeg",
imageName:"Restaurant",
onClick:action("clicked card")
}
export const CardStory=()=>{
    return <Card {...props}/>  
}
