import { useSelector } from "react-redux";
import { RootStateType } from "@app/providers/storeProvider";

export const useTypedSelector = useSelector.withTypes<RootStateType>();
