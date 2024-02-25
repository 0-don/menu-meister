"use client";
import { MyModal } from "@/components/elements/MyModal";
import { UserProfile } from "@/components/pages/user/settings/UserProfile";
import { GET_USER_ADMIN } from "@/documents/query/user";
import { useGqlQuery } from "@/fetcher";
import { ResultOf } from "gql.tada";

interface UserDetailsModalProps {
  params: { id: number };
}

export default function IdPage({ params }: UserDetailsModalProps) {
  const { data: { getUserAdmin } = {}, refetch } = useGqlQuery(GET_USER_ADMIN, {
    where: { id: { equals: Number(params.id) } },
  });
  return (
    <MyModal className="md:w-2/5">
      <main className="mt-5 w-full rounded-lg bg-default-50 p-5">
        <UserProfile
          user={getUserAdmin as ResultOf<typeof GET_USER_ADMIN>["getUserAdmin"]}
          refetch={refetch}
        />
      </main>
    </MyModal>
  );
}
