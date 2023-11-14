"use server";

export async function myAction(prevState, formData) {
  console.log("myAction", prevState, formData);
  return "whatever!";
}
