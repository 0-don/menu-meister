import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";

type Args = {
  isOpen: boolean;
  onOpenChange: () => void;
  onOpen: () => void;
};

interface MyConfirmModalProps {
  title: string;
  children: React.ReactNode;
  Trigger: (args: Args) => JSX.Element;
  Footer: (args: Args) => JSX.Element;
}

export const MyConfirmModal: React.FC<MyConfirmModalProps> = (props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {props.Trigger({ isOpen, onOpen, onOpenChange })}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {props.title}
              </ModalHeader>
              <ModalBody>{props.children}</ModalBody>
              <ModalFooter>
                {props.Footer({ isOpen, onOpen, onOpenChange })}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
