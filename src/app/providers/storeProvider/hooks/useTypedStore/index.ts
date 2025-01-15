import { useStore } from "react-redux";
import { StoreType } from "@app/providers/storeProvider";

export const useTypedStore = useStore.withTypes<StoreType>();
