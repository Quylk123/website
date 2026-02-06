import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Button from "@/components/Button";

interface ImagePreviewProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string | null;
    alt?: string;
}

export default function ImagePreview({ isOpen, onClose, imageSrc, alt = "Preview" }: ImagePreviewProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Handle Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && imageSrc && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                >

                    {/* Close Button */}
                    <div className="absolute top-4 right-4 z-50">
                        <Button
                            variant="ghost"
                            onClick={onClose}
                            className="p-2 h-auto rounded-full bg-white/10 text-white hover:bg-white/20 border-none"
                        >
                            <X className="w-6 h-6" />
                        </Button>
                    </div>

                    {/* Image Container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-7xl max-h-[90vh] flex items-center justify-center p-2"
                        onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing
                    >
                        <div className="relative w-auto h-auto max-w-full max-h-[85vh] overflow-hidden rounded-lg shadow-2xl">
                            <img
                                src={imageSrc}
                                alt={alt}
                                className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
