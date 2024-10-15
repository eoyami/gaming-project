import { Header } from "./header";
import { Cards } from "./cards";
export function Content() {
  return (
    <div className="flex flex-col w-full p-4">
      <Header />
      <Cards />
    </div>
  );
}
