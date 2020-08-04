import React from "react";
import { action } from "@storybook/addon-actions";
import InputField from "./input"

export default {
    component: InputField,
    title: "SearchBar",
};
let props={
    placeholder:"Search items",
    onChange:action("entered search value")
}

export const SearchBarStory=()=>{
    return <InputField {...props}/>  
}
