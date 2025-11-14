import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import ResetGame from "../components/ResetGame";

const StatisticPage = ({ setIsOpen }) => {
  const history = useSelector((state) => state.cards.history || []);
  const playerName = useSelector((state) => state.cards.playerName);

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
    <div
      className="flex flex-col items-center gap-5 pt-10 pb-10 min-h-screen text-[#14366f]"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #d7ede1 30%, #14366f 100%)",
      }}
    >
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-5xl font-bold">Game History</h1>
        <div className="flex gap-3 font-bold uppercase">
          <p>name user: </p>
          {playerName}
        </div>
        <ResetGame setIsOpen={setIsOpen} />
      </div>

      <table className="border-collapse w-[600px] text-center bg-white rounded-2xl">
        <thead>
          <tr>
            <th className=" py-2">Move count</th>
            <th className=" py-2">Picked Item</th>
            <th className=" py-2">Points</th>
          </tr>
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-t">
              <td className="">{row.original.move}</td>
              <td className=" py-2 flex justify-center">
                <img
                  src={row.original.pickedItem}
                  className="w-15 h-15 object-cover rounded-md shadow-md"
                />
              </td>
              <td className=" py-2">{row.original.points}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={() => table.setPageIndex(0)}
          className="bg-[#14366f] text-white px-3 py-1 rounded-xl cursor-pointer hover:shadow-md"
        >
          first page
        </button>

        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="bg-[#14366f] text-white px-3 py-1 rounded-xl disabled:opacity-70 cursor-pointer hover:shadow-md"
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
          className="bg-[#14366f] text-white px-3 py-1 rounded-xl disabled:opacity-70 cursor-pointer hover:shadow-md"
        >
          next &gt;
        </button>

        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          className="bg-[#14366f] text-white px-3 py-1 rounded-xl cursor-pointer hover:shadow-md"
        >
          last page
        </button>
      </div>
    </div>
  );
};

export default StatisticPage;
