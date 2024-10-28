import Link from "next/link";
import React from "react";
import { GoChevronRight } from "react-icons/go";

export default function HeaderSection(props) {
  return (
    <div className="flex items-end justify-between mb-5 md:mb-12">
      <div>
        <h3 className="section_title">{props.title} </h3>
        <span className="section_subTitle">{props.subTitle}</span>
      </div>
      <Link href="#" className="section_link gap-1">
        <span className="hidden md:inline-block">
          {props.titleLeft ? props.titleLeft : "View all products"}
        </span>
        <span className="inline-block md:hidden">View all </span>
        <GoChevronRight className="w-5 h-5 " />
      </Link>
    </div>
  );
}
