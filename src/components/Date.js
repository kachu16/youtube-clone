import React from 'react'

const Date = ({dateTime}) => {

    const dateOnly = new Date(dateTime);
    const year = dateOnly.getFullYear();
    const month = dateOnly.getMonth() + 1;
    const day = dateOnly.getDate();

    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  return (
    <span>{formattedDate}</span>
  )
}

export default Date
