"use client";

import { useUsersHook } from "@/components/hooks/useUsersHook";
import { Link } from "@/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import { MdEdit } from "react-icons/md";

interface UsersPageProps {}

export default function UsersPage({}: UsersPageProps) {
  const t = useTranslations<"User">();
  const { allUsers } = useUsersHook();

  return (
    <>
      <main className="mt-5 w-full max-w-6xl rounded-lg bg-default-50 p-5">
        <Table aria-label={t("USERS")} isStriped>
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>{t("EMAIL")}</TableColumn>
            <TableColumn>{t("FIRSTNAME")}</TableColumn>
            <TableColumn>{t("LASTNAME")}</TableColumn>
            <TableColumn>{t("CREATED_AT")}</TableColumn>
            <TableColumn className="flex items-center justify-center">
              {t("ACTION")}
            </TableColumn>
          </TableHeader>
          <TableBody emptyContent={t("NO_USER")}>
            {allUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <p className="w-12 truncate">{user.id}</p>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.firstname}</TableCell>
                <TableCell>{user.lastname}</TableCell>
                <TableCell>
                  {dayjs(user.createdAt).format("DD.MM.YYYY")}
                </TableCell>
                <TableCell className="flex justify-center">
                  <Link href={`/user/${user.id}`}>
                    <MdEdit className="text-xl hover:text-primary-500" />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </>
  );
}
