import { RightSide } from "./rightside";
import { LeftSide } from "./leftside";
export function Cards() {
  return (
    <div className="flex py-4">
      <LeftSide />
      <RightSide />
    </div>
  );
}
