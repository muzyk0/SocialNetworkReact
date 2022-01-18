import React from "react";
import { Preloader } from "../Components/common/Preloader/Preloader";

export function withSuspense<T>(Component: React.FC | React.ComponentClass) {
    return (props: T) => {
        return (
            <React.Suspense fallback={<Preloader />}>
                <Component {...props} />
            </React.Suspense>
        );
    };
}
