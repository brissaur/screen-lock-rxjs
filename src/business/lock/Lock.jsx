import React from 'react';

const CHARS = '0123456789';
export default function Lock() {
  return (
    <div className="">
      {CHARS.split('').map((char) => (<button type="button" key={char} className="" onClick={() => console.log(`You pressed => ${char}`)}>{char}</button>))}
    </div>
  );
}
