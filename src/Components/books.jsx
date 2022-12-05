import React from 'react';
import Button from './Button';
import Search from './Search';


const Books = (props) => {
  
    return (
        <div>
            <Search />
        <Button name={"Show All Books"} showBooks= {props.allBooks}/>
          <Button name={"Show books ages 5-7 "} showBooks= {props.age7}/>
          <Button name={"Show books ages 8-10"} showBooks= {props.age10}/>
        </div>
    );
};

export default Books;