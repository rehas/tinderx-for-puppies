import * as React from 'react';
import { Link } from 'react-router-dom';

export default function(props){
 // console.log(props.matches)
return(
  <div>{props.renderMatches()}</div>
)
}