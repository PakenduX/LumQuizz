import React from 'react'
import {Heading} from "@shoutem/ui";

export default function QuestionComponent({text}) {

    return(
        <Heading style={{textAlign: 'center', padding: 10}}>{text}</Heading>
    )
}