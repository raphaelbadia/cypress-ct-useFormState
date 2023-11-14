import { MyForm } from "./MyForm";
import { myAction } from "./my-action";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return <MyForm myAction={myAction} />;
}
