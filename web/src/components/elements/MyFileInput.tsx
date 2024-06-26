import { useTranslations } from "next-intl";
import Image from "next/image";
import React, {
  ChangeEvent,
  DragEvent,
  FormEvent,
  MouseEvent,
  useRef,
  useState,
} from "react";
import { BiImageAdd } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";

interface MyFileInputProps {
  className?: string;
  multiple?: boolean;
  files: File[] | null;
  setFiles: (files: File[]) => void;
}

export const MyFileInput: React.FC<MyFileInputProps> = (props) => {
  const t = useTranslations<"Meal">();
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // handle drag events
  const handleDrag = function (e: FormEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (inputRef.current && e.dataTransfer?.files && e.dataTransfer.files[0]) {
      inputRef.current.files = e.dataTransfer.files;
      props.setFiles(Array.from(e.dataTransfer.files));
      // handleFiles(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (
      inputRef.current &&
      (e.target as HTMLInputElement).files &&
      (e.target as HTMLInputElement).files?.[0]
    ) {
      inputRef.current.files = e.target.files;
      e.target.files && props.setFiles(Array.from(e.target.files));
      // handleFiles(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    inputRef.current?.click();
  };

  return (
    <div className={props.className}>
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
        className={`relative flex max-w-lg cursor-pointer justify-center rounded-md border-2 border-dashed p-1 ${
          dragActive ? "border-green-500" : "border-gray-300"
        }`}
      >
        <div className="space-y-1 text-center">
          <div className="flex flex-wrap justify-center">
            {!props.files?.length ? (
              <BiImageAdd className="text-3xl" />
            ) : (
              props.files.map((file) => (
                <div key={file.name} className="relative mt-1 h-20 w-20">
                  <div
                    className="rounden absolute -top-2 right-0 z-50 rounded-full bg-red-600 p-1 hover:bg-red-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      props.setFiles(
                        (props.files || []).filter((f) => f.name !== file.name),
                      );
                    }}
                  >
                    <GiCancel />
                  </div>
                  <Image
                    fill
                    alt={file.name}
                    className="object-cover px-1"
                    src={URL.createObjectURL(file)}
                  />
                </div>
              ))
            )}
          </div>

          <input
            onChange={handleChange}
            ref={inputRef}
            multiple={props.multiple || false}
            type="file"
            className="sr-only"
          />

          <p className="pl-1 text-center  text-sm">
            {t("UPLOAD_OR_DRAG_DROP")}
          </p>
          <p className="text-xs text-gray-500">{t("UPLOAD_TYPE_AND_LIMIT")}</p>
        </div>
      </div>
    </div>
  );
};
