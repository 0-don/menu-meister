import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";

interface MyConfirmModalProps {
  title: string;
  children: React.ReactNode;
  Trigger: (args: { onOpen: () => void }) => JSX.Element;
  Footer: (args: { onOpen: () => void }) => JSX.Element;
}

export const MyConfirmModal: React.FC<MyConfirmModalProps> = (props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      {props.Trigger({ onOpen })}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {props.title}
              </ModalHeader>
              <ModalBody>{props.children}</ModalBody>
              <ModalFooter>{props.Footer({ onOpen })}</ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
