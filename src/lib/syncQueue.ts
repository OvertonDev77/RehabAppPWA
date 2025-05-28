// lib/syncQueue.ts
import { openDB } from "idb";

const DB_NAME = "rehab-app-db";
const STORE_NAME = "admissionsQueue";

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "timestamp" });
      }
    },
  });
};

export const saveToQueue = async (entry: any) => {
  const db = await initDB();
  await db.put(STORE_NAME, entry);
};

export const getAllQueued = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};

export const clearQueue = async () => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  await tx.objectStore(STORE_NAME).clear();
};

export const syncQueue = async () => {
  const entries = await getAllQueued();
  for (const entry of entries) {
    try {
      const res = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      });
      if (!res.ok) throw new Error("Failed sync");
    } catch (err) {
      console.error("Retry sync failed", err);
      return;
    }
  }
  await clearQueue();
};
