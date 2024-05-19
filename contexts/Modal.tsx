"use client";
import { createContext, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/modal";
import { Drawer } from "@/components/layout";
import { Heading } from "@/components/typography";
import Link from "next/link";
import { Contact } from "@/components/container";
import { Button } from "@/components";

interface ModalContextType {
  openDrawer: () => void;
  openContact: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openDrawer: () => {},
  openContact: () => {},
});

const ModalProvider = (props: any) => {
  const [drawerContent, setDrawerContent] = useState<string>("Drawer");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const openDrawer = () => {
    setDrawerContent("Drawer");
    onOpen();
  };

  const openContact = () => {
    setDrawerContent("Contact");
    onOpen();
  };

  const sendMessage = () => {
    setDrawerContent("Done");
    onOpen();
  };

  return (
    <ModalContext.Provider value={{ openDrawer, openContact }}>
      {props.children}
      <Modal
        isOpen={isOpen}
        placement="auto"
        onOpenChange={onOpenChange}
        size={`${
          drawerContent === "Drawer"
            ? "5xl"
            : drawerContent === "Contact"
            ? "lg"
            : "md"
        }`}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                {drawerContent === "Drawer" ? (
                  <>
                    <section className="flex flex-col gap-4">
                      <Heading type="h3" text="Any place do you like?" />
                      <Drawer onClose={onClose} />
                    </section>
                    <section className="flex flex-col gap-4 pt-4 pb-8">
                      <Heading type="h3" text="Perhaps contacting us?" />
                      <Link href="#" onClick={() => openContact()}>
                        Contact Us
                      </Link>
                    </section>
                  </>
                ) : drawerContent === "Contact" ? (
                  <section className="flex flex-col gap-8 py-8 px-4">
                    <Heading type="h3" text="Something to tell us?" />
                    <Contact onClose={sendMessage} />
                  </section>
                ) : (
                  <section className="py-8 px-4  text-center">
                    <Heading
                      type="h3"
                      text="We have received your message, Thank you!"
                    />
                  </section>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
