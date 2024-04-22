import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { formatTime } from "./Product-info-component.jsx";

export default function ProductCard(props) {
  const { img, title, price, ends, bidCount, _id } = props.product;
  const [showEndDate, setShowEndDate] = useState(ends);

  useEffect(() => {
    const endDateObject = formatTime(ends);
    setShowEndDate(endDateObject);
  }, []);

  return (
    <>
      <Link to={`/product-info/${_id}`}>
        <li className="flex flex-col gap-1 shadow md:shadow-lg rounded-md">
          <img
            className="size-52 bg-contain aspect-square pointer-events-auto rounded-t-md"
            src={img}
          />
          <div className="flex flex-col gap-3 p-1.5 items-start ">
            <h3
              className="text-xl font-semibold cursor-pointer hover:underline"
              key={title}
            >
              {title}
            </h3>
            <p className="text-sm font-sm mb-auto cursor-pointer">
              <span className="text-base">Avslutas: </span>
              {`${showEndDate.objectDayOfTheWeek} ${showEndDate.objectDate} ${showEndDate.objectMonth} ${showEndDate.objectHour}:${showEndDate.objectMinutes}`}
            </p>
            <span className="block text-base font-normal cursor-pointer">
              <span className="font-semibold"> {price}kr</span> {bidCount} bud
            </span>
          </div>
        </li>
      </Link>
    </>
  );
}
