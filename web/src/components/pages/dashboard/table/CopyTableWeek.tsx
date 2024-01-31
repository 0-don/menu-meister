import { MyPopover } from "@/components/elements/MyPopover";
import { Button, Card, Input } from "@nextui-org/react";
import { AiTwotoneCopy } from "@react-icons/all-files/ai/AiTwotoneCopy";
import { useTranslations } from "next-intl";
import React, { FormEvent, useState } from "react";

interface CopyTableWeekProps {}

export const CopyTableWeek: React.FC<CopyTableWeekProps> = ({}) => {
  const t = useTranslations<"Dashboard">();
  const [date, setDate] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(date);
  };

  return (
    <MyPopover
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      Icon={AiTwotoneCopy}
      backdrop="opaque"
      placement="top"
      varient="light"
      color="default"
      title={t("COPY_WEEK")}
      showArrow
    >
      <Card className="p-4">
        <form onSubmit={onSubmit} className="flex flex-col space-y-5">
          <Input
            type="date"
            label={t("GROUPNAME")}
            // labelPlacement="outside"
            required
            size="sm"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <Button color="primary" type="submit">
            {t("SAVE_GROUP")}
          </Button>
        </form>
      </Card>
    </MyPopover>
  );
};
