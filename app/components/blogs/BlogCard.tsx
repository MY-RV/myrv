import Link from "next/link";
import React from "react";
import Image from "next/image";

import { ExternalLinks } from "../externalLinks/ExternalLinks";

interface Item {
    url: string;
    icon: string;
    description: string;
}

interface Props {
    time: string,
    name: string,
    items: Item[]
}

export const BlogCard = ({ time, name, items }: Props) => {
    return (
        <div className="group flex flex-col lg:flex-row  gap-4 rounded w-full mb-4 lg:p-4 border border-transparent custom-border-gradient lg:hover:shadow-sm lg:hover:bg-[#928ec40a] transition-colors duration-200">
            <div>
                <div className="flex flex-col">
                    <h3 className="group-hover:text-[#2ecd58] font-medium leading-snug text-slate-200">{time}</h3>
                    <p className="mt-2 text-sm leading-normal text-[#787878]">{name}</p>
                </div>
                <ExternalLinks items={items}/>
            </div>
        </div>
    )
}
