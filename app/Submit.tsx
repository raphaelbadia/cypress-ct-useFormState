"use client";
import { useFormStatus } from "react-dom";

export function Submit() {
  console.log(useFormStatus());
  return <button type="submit">Submit</button>;
}
