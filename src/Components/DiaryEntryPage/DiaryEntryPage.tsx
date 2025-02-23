import { useEffect, useState } from "react";
import { getEntries } from "../../services/APIService";
import { DiaryEntry } from "../LogicClasses";
import DiaryEntryTimeline from "./DiaryEntryTimeline";

const DiaryEntryPage = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEntries = async () => {
    try {
      const data = await getEntries();
      setEntries(data);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      else console.log("An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);
  return (
    <div className="bg-gray-900">
      <DiaryEntryTimeline entries={entries} />
    </div>
  );
};

export default DiaryEntryPage;
