"use client";

import { GET_ALL_USERS_ADMIN } from "@/documents/query/user";
import { useGqlQuery } from "@/fetcher";
import { Link } from "@/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { MdEdit } from "@react-icons/all-files/md/MdEdit";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";

interface UsersPageProps {}

export default function UsersPage({}: UsersPageProps) {
  const t = useTranslations<"User">();
  const { data: { getAllUsersAdmin } = {} } = useGqlQuery(GET_ALL_USERS_ADMIN);

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
          <TableBody>
            {(getAllUsersAdmin || []).map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.firstname}</TableCell>
                <TableCell>{user.lastname}</TableCell>
                <TableCell>
                  {dayjs(user.createdAt).format("DD.MM.YYYY")}
                </TableCell>
                <TableCell className="flex justify-center">
                  <Link href={`/user/${user.id}`}>
                    <MdEdit className="hover:text-primary-500 text-xl" />
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
