import DiaryEntryCard from "./DiaryEntryCard";
import { DiaryEntry } from "../LogicClasses";
import { useNavigate } from "react-router-dom";

interface Props {
  entries: DiaryEntry[];
}

function DiaryEntryTimeline({ entries }: Props) {
  const groupedEntries = entries.reduce((acc, entry) => {
    console.log(entry.date)
    const date = entry.date.toString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(entry);
    return acc;
  }, {} as { [date: string]: DiaryEntry[] });
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      {Object.keys(groupedEntries).map((date) => (
        <div key={date} className="bg-gradient-to-r from-purple-800 to-purple-900 p-1 rounded-lg shadow-md mb-4">
          <h2 className="text-lg font-bold text-gray-100">{date}</h2>
          <div className="flex flex-col">
            {groupedEntries[date].map((entry, index) => (
              <DiaryEntryCard key={index} entry={entry} />
            ))}
          </div>
        </div>
      ))}

      <button onClick={() => navigate(`/entries/add`)} > Add Entry </button>
    </div>
  );
}

export default DiaryEntryTimeline;
