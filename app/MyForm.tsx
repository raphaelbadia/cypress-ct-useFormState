"use client";
import { useFormState } from "react-dom";
import { myAction } from "./my-action";
import { Submit } from "./Submit";

export function MyForm({ myAction }) {
  const [state, action] = useFormState(myAction);

  return (
    <form action={action}>
      I'm a form
      <Submit />
    </form>
  );
}
