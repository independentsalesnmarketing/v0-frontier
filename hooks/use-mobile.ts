import { useMedia } from "react-use"

export const useMediaQuery = (query: string) => useMedia(query, false)

export const useIsMobile = () => useMedia("(max-width: 768px)", false)
