// pages/admissions.tsx
import { useEffect, useState } from "react";
import { saveToQueue } from "@/lib/syncQueue";

const AdmissionsForm = () => {
  const [name, setName] = useState("");
  const [condition, setCondition] = useState("");
  const [status, setStatus] = useState("idle");
  useEffect(() => {
    const handleOnline = async () => {
      const { syncQueue } = await import("@/lib/syncQueue");
      await syncQueue();
    };

    window.addEventListener("online", handleOnline);
    return () => window.removeEventListener("online", handleOnline);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("saving");
    await saveToQueue({ name, condition, timestamp: Date.now() });
    setStatus("saved");
    setName("");
    setCondition("");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Admissions Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Describe your condition"
          className="border p-2 w-full"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">
          Submit
        </button>
        <div>
          {status === "saved" && "Saved locally – will sync when online"}
        </div>
      </form>
    </div>
  );
};

export default AdmissionsForm;
