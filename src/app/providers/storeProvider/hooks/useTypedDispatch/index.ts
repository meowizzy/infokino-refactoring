import { TypedDispatch } from "@app/providers/storeProvider";
import { useDispatch } from "react-redux";

export const useTypedDispatch = useDispatch.withTypes<TypedDispatch>();
