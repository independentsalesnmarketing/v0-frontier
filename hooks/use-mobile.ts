import { useMedia } from "react-use"

export const useMediaQuery = (query: string) => useMedia(query, false)
