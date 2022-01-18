export const updateObjectInArray = <T, P extends keyof T>(
    items: T[],
    itemId: T[P],
    objPropName: P,
    newObjProps: Partial<T>
) => {
    return items.map((u) =>
        u[objPropName] === itemId ? { ...u, ...newObjProps } : u
    );
};
