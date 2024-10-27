import React from "react";
import { GoChevronRight } from "react-icons/go";

export default function HeaderSection(props) {
  return (
    <div className="flex items-end justify-between mb-5 md:mb-12">
      <div>
        <h3 className="section_title">{props.title} </h3>
        <span className="section_subTitle">{props.subTitle}</span>
      </div>
      <a href="#" className="section_link">
        <span className="hidden md:inline-block">View all products </span>
        <span className="inline-block md:hidden">View all </span>
        <GoChevronRight className="w-5 h-5 transform rotate-180" />
      </a>
    </div>
  );
}
