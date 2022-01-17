import React from "react";
import { act } from "react-dom/test-utils";
import { Dimmer, Loader } from "semantic-ui-react";

interface Props{
    inverted?:boolean;
    content?:string;
}

export default function LoadingComponent({inverted=true,content='Loading...'}:Props){
    return(
        <Dimmer active={true} inverted={inverted}>
            <Loader active={true} content={content}></Loader>
        </Dimmer>
    )
}