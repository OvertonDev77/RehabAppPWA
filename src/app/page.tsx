import EligibilityForm from "@/components/EligibilityForm";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">Rehab Eligibility Checker</h1>
      <EligibilityForm />
    </main>
  );
}
