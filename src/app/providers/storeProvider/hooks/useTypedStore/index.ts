import { StoreType } from "@app/providers/storeProvider";
import { useStore } from "react-redux";

export const useTypedStore = useStore.withTypes<StoreType>();
