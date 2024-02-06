"use client";

import { UserProfile } from "@/components/pages/user/settings/UserProfile";
import { GET_USER_ADMIN } from "@/documents/query/user";
import { useGqlQuery } from "@/fetcher";
import { User } from "@/gql/graphql";

interface UserDetailsPageProps {
  params: { id: number };
}

export default function UserDetailsPage({ params }: UserDetailsPageProps) {
  const { data: { getUserAdmin } = {}, refetch } = useGqlQuery(GET_USER_ADMIN, {
    where: { id: { equals: params.id } },
  });
  return (
    <main className="mt-5 w-full max-w-3xl rounded-lg bg-default-50 p-5">
      <UserProfile user={getUserAdmin as User} refetch={refetch} />{" "}
    </main>
  );
}
