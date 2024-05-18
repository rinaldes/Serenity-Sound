"use client";
import { createContext } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Drawer } from "@/components/layout";
import { Heading } from "@/components/typography";
import { Button } from "@/components";
import Link from "next/link";

interface ModalContextType {
  onOpen: () => void;
}

const ModalContext = createContext<ModalContextType>({
  onOpen: () => {},
});

const ModalProvider = (props: any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <ModalContext.Provider value={{ onOpen }}>
      {props.children}
      <Modal
        isOpen={isOpen}
        placement="auto"
        onOpenChange={onOpenChange}
        size="5xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <section className="flex flex-col gap-4">
                  <Heading type="h3" text="Any place do you like?" />
                  <Drawer onClose={onClose} />
                </section>
                <section className="flex flex-col gap-4 py-4">
                  <Heading type="h3" text="Perhaps you'd like to contact us?" />
                  <Link href="#">Contact Us </Link>
                </section>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
