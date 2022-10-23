import React from "react";

export default function LayoutSub({children, className}: {children: React.ReactNode, className?: string}) {
    return (
        <div className={`bg-navy absolute ${className} w-full z-10`}>
            {children}
        </div>
    )
}