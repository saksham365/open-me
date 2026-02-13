"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface OpenWhenModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    themeColor: string; // Tailwind bg class for the header/accent
    children: React.ReactNode;
}

export function OpenWhenModal({ isOpen, onClose, title, themeColor, children }: OpenWhenModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                    />
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="pointer-events-auto relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
                        >
                            <div className={`p-6 ${themeColor} text-white flex justify-between items-center`}>
                                <h2 className="text-3xl font-display">{title}</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-white/20 transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="p-8 max-h-[70vh] overflow-y-auto">
                                <div className="prose prose-pink max-w-none font-sans text-lg leading-relaxed text-gray-700">
                                    {children}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
