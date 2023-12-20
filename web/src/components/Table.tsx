"use client";

import { Chip } from "@nextui-org/chip";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { Tooltip } from "@nextui-org/tooltip";
import { User } from "@nextui-org/user";
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { FaEye } from "@react-icons/all-files/fa/FaEye";
import { RiDeleteBinLine } from "@react-icons/all-files/ri/RiDeleteBinLine";
import React from "react";

interface DashboardPageProps {}

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const columns = [
  { name: "NAME", uid: "name" },
  { name: "ROLE", uid: "role" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];

export function MainTable({}: DashboardPageProps) {
  const renderCell = React.useCallback(
    (user: any, columnKey: string | number) => {
      const cellValue = user[columnKey];

      switch (columnKey) {
        case "name":
          return (
            <User
              avatarProps={{ radius: "lg", src: user.avatar }}
              description={user.email}
              name={cellValue}
            >
              {user.email}
            </User>
          );
        case "role":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
              <p className="text-bold text-sm capitalize text-default-400">
                {user.team}
              </p>
            </div>
          );
        case "status":
          return (
            <Chip
              className="capitalize"
              color={(statusColorMap as any)[user.status as any]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Details">
                <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                  <FaEye />
                </span>
              </Tooltip>
              <Tooltip content="Edit user">
                <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                  <FaEdit />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete user">
                <span className="cursor-pointer text-lg text-danger active:opacity-50">
                  <RiDeleteBinLine />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [],
  );

  return (
    <Table aria-label="Example table with custom cells" className="mt-10">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
