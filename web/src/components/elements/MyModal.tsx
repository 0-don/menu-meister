import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";

interface MyModalProps {
  Trigger: JSX.Element;
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
  title: string;
  children: React.ReactNode;
  Footer: JSX.Element;
}

export const MyModal: React.FC<MyModalProps> = (props) => {
  return (
    <>
      {props.Trigger}
      <Modal isOpen={props.isOpen} onOpenChange={props.onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {props.title}
              </ModalHeader>
              <ModalBody>{props.children}</ModalBody>
              <ModalFooter>{props.Footer}</ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
