import { useDispatch } from "react-redux";
import { TypedDispatch } from "@app/providers/storeProvider";

export const useTypedDispatch = useDispatch.withTypes<TypedDispatch>();
