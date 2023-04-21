import React from 'react'
import Avatar from '@mui/material/Avatar';
// Robo avatars from https://robohash.org/
// Colored avatars functions from MUI tutorials

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      margin: "10px",
      boxShadow: "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
    },
    alt: name,
    src: "https://robohash.org/" + name,
    children: `${name.split(' ')[0][0]}`,
  };
}

export default function RoboAvatar({name}) {
  return (
    <Avatar {...stringAvatar(name)}/>
  )
}
