"use client";
import { motion } from "framer-motion";

export default function FadeUp({
    children,
    direction = "up", 
    delay = 0,
    distance = 50
}) {

    const getDirection = () => {
        switch (direction) {
            case "down":
                return { x: 0, y: -distance };
            case "left":
                return { x: distance, y: 0 };
            case "right":
                return { x: -distance, y: 0 };
            case "up":
            default: // ✅ fallback (important)
                return { x: 0, y: distance };
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...getDirection() }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
}