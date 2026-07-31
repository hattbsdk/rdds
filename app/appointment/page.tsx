import { redirect } from "next/navigation";

// The full site is on hold — send visitors back to the coming-soon page.
export default function AppointmentPage() {
  redirect("/");
}
