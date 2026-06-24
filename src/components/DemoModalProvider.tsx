"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import DemoModal from "./DemoModal";

interface DemoModalContextType {
    openDemoModal: () => void;
    closeDemoModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined);

export function DemoModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <DemoModalContext.Provider value={{ openDemoModal: () => setIsOpen(true), closeDemoModal: () => setIsOpen(false) }}>
            {children}
            <DemoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </DemoModalContext.Provider>
    );
}

export function useDemoModal() {
    const context = useContext(DemoModalContext);
    if (context === undefined) {
        throw new Error("useDemoModal must be used within a DemoModalProvider");
    }
    return context;
}
