"use client";
import React from "react";

const SectionHeading = ({ badge, title, description, className = "" }) => {
    return (
        <div className={`flex flex-col items-center gap-5 ${className}`}>
            {badge && (
                <p className="text-prim bg-purple-400/10 px-3 py-1 rounded-2xl">
                    {badge}
                </p>
            )}
            {title && <h2 className="text-2xl font-semibold">{title}</h2>}
            {description && (
                <p className="text-second max-w-3xl">{description}</p>
            )}
        </div>
    );
};

export default SectionHeading;
