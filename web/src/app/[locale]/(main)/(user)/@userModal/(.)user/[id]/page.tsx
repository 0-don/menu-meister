"use client";
import { MyModal } from "@/components/elements/MyModal";
import { UserProfile } from "@/components/pages/user/settings/UserProfile";
import { GET_USER_ADMIN } from "@/documents/query/user";
import { useGqlQuery } from "@/fetcher";
import { User } from "@/gql/graphql";

interface UserDetailsModalProps {
  params: { id: number };
}

export default function IdPage({ params }: UserDetailsModalProps) {
  const { data: { getUserAdmin } = {}, refetch } = useGqlQuery(GET_USER_ADMIN, {
    where: { id: { equals: params.id } },
  });
  return (
    <MyModal>
      <UserProfile user={getUserAdmin as User} refetch={refetch} />
    </MyModal>
  );
}
