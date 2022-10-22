import React from "react";

export default function LayoutSub({children, className}: {children: React.ReactNode, className?: string}) {
    return (
        <div className={`bg-navy drop-shadow-lg absolute ${className} w-full`}>
            {children}
        </div>
    )
}