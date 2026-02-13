"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeCardProps {
    title: string;
    icon: LucideIcon;
    bgClass: string;
    textClass: string;
    onClick: () => void;
    index: number;
}

export function ThemeCard({
    title,
    icon: Icon,
    bgClass,
    textClass,
    onClick,
    index,
}: ThemeCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                }
            }}
            whileHover={{
                y: -10,
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative flex flex-col items-center justify-center p-6 rounded-2xl shadow-xl cursor-pointer transition-all duration-300 aspect-[3/4] border-2 border-white/60 backdrop-blur-md overflow-hidden group",
                bgClass,
                textClass
            )}
            onClick={onClick}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute top-4 right-4 opacity-50">
                <Icon size={24} />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-6 text-center z-10">
                <motion.div
                    animate={{
                        y: [0, -5, 0],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: index * 0.2
                    }}
                    className="p-5 rounded-full bg-white/40 backdrop-blur-md shadow-sm ring-1 ring-white/50"
                >
                    <Icon size={48} strokeWidth={1.5} />
                </motion.div>

                <h3 className="font-display text-2xl md:text-3xl leading-tight drop-shadow-sm">{title}</h3>
            </div>

            <div className="mt-auto w-full z-10">
                <div className="h-1 w-12 bg-current opacity-30 mx-auto rounded-full group-hover:w-20 transition-all duration-300" />
            </div>
        </motion.div>
    );
}
