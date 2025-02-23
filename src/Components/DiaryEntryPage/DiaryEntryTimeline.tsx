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
    <div className="flex flex-col space-y-4 p-4 max-h-screen overflow-y-auto">
      {Object.keys(groupedEntries).map((date) => (
        <div key={date} className="bg-gradient-to-r from-purple-800 to-purple-900 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-gray-100 mb-2">{date}</h2>
          <div className="flex flex-wrap justify-start">
            {groupedEntries[date].map((entry, index) => (
              <div key={index} className="flex-1 min-w-[200px]">
                <DiaryEntryCard entry={entry} />
              </div>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={() => navigate(`/entries/add`)}
        className="mt-4 bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition"
      >
        Add Entry
      </button>
    </div>
  );
}

export default DiaryEntryTimeline;
