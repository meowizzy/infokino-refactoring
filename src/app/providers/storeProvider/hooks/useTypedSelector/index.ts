import { RootStateType } from "@app/providers/storeProvider";
import { useSelector } from "react-redux";

export const useTypedSelector = useSelector.withTypes<RootStateType>();
