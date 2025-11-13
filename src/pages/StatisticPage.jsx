import React from "react";
import { useSelector } from "react-redux";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import ResetGame from "../components/ResetGame";

const StatisticPage = () => {
  const history = useSelector((state) => state.cards.history || []);
  const playerGame = useSelector((state) => state.cards.playerGame);

  const table = useReactTable({
    data: history,
    columns: [
      { accessorKey: "move" },
      { accessorKey: "pickedItem" },
      { accessorKey: "points" },
    ],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="flex flex-col items-center gap-5 pt-10 pb-10">
      <div className="flex flex-col items-center gap-5 pt-10 pb-10">
        <h1 className="text-3xl">Game History</h1>
        <p>name user: </p>
        {playerGame}
        <ResetGame />
      </div>

      <table className="border-collapse border w-[600px] text-center">
        <thead>
          <tr>
            <th className="border py-2">Move count</th>
            <th className="border py-2">Picked Item</th>
            <th className="border py-2">Points</th>
          </tr>
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              <td className="border">{row.original.move}</td>
              <td className="border py-2 flex justify-center">
                <img
                  src={row.original.pickedItem}
                  className="w-15 h-15 object-cover rounded-md shadow-md"
                />
              </td>
              <td className="border py-2">{row.original.points}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="bg-[#b7e3f5] px-3 py-1 rounded disabled:opacity-70 cursor-pointer hover:shadow-md"
        >
          &lt; previous
        </button>

        <span>
          page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>

        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="bg-[#b7e3f5] px-3 py-1 rounded disabled:opacity-70 cursor-pointer hover:shadow-md"
        >
          next &gt;
        </button>
      </div>
    </div>
  );
};

export default StatisticPage;
