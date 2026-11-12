import "lenis/dist/lenis.css";
import "./lenis.css";
import CustomCursor from "../components/CustomCursor";
import CursorSpotlight from "../components/CursorSpotlight";

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CursorSpotlight />
      <CustomCursor />
      {children}
    </>
  );
}
