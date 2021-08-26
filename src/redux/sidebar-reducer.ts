export type FriendsType = {
  id: number;
  name: string;
};

export type SidebarType = {
  friends: Array<FriendsType>;
};

const initialState = {
  friends: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Nasty" },
    { id: 3, name: "Vova" },
  ] as FriendsType[],
};

export type SidebarReducerInitialStateType = typeof initialState;

export const sidebarReducer = (
  state: SidebarReducerInitialStateType = initialState,
  action: sidebarActionsType
): SidebarReducerInitialStateType => {
  switch (action.type) {
    default:
      return state;
  }
};

export type sidebarActionsType = ReturnType<typeof sidebar>;

export const sidebar = () => {
  return { type: "test" } as const;
};
