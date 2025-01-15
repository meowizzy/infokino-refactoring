import { Provider } from "react-redux";
import { store } from "../index";
import { ReactNode } from "react";

type StoreProviderPropsType = {
  children?: ReactNode;
};

export const StoreProvider = (props: StoreProviderPropsType) => {
  return <Provider store={store}>{props.children}</Provider>;
};
