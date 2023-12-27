"use client";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { Member, member } from "@/member";
import { Pencil, MoreHorizontal, DeleteIcon, Delete, Trash, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<Member>[] = [
  {
    id: "select",
    header: ({ table }) => {
      return (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => {
            table.toggleAllPageRowsSelected(!!value);
          }}
        />
      );
    },
    cell: ({ row }) => {
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            row.toggleSelected(!!value);
          }}
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: ({column}) => {
      return (
        <Button variant="ghost" onClick={() => {
          column.toggleSorting(column.getIsSorted() === "asc")
        }}>
          SN
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    accessorKey: "id",
  },
  {
    header: "GCP",
    accessorKey: "gcp",
  },
  {
    header: "Company",
    accessorKey: "company_name",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Registration Date",
    accessorKey: "registration_date",
    cell: ({ row }) => {
      const registration_date = row.getValue("registration_date");
      const formatted = new Date(
        registration_date as string
      ).toLocaleDateString();
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const member = row.original
      const memberId = member.id
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
            <Pencil className="w-4 h-4" />
              <span className="pl-2 text-blue-500">Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <Trash className="w-4 h-4 text-red-500" />
              <span className="pl-2 text-blue-500">Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
