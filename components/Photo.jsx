"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                    opacity: 1,
                    scale: [0.9, 1.05, 1],
                    transition: {
                        delay: 1,
                        duration: 1.2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse"
                    }
                }}
                className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] overflow-hidden"
            >
                <Image 
                    src="/assets/Large.jpeg"
                    priority 
                    quality={100} 
                    layout="fill" 
                    alt="ABDULLAH'S PHOTO" 
                    className="object-cover"
                />
                <div className="absolute inset-0">
                    <motion.div
                        className="absolute inset-0 border-4 border-[#CAE100] rounded-full"
                        style={{
                            boxShadow: '0 0 15px rgba(202, 225, 0, 0.8)',
                            opacity: 0.6,
                        }}
                        whileHover={{ 
                            scale: 1.1,
                            boxShadow: '0 0 30px rgba(202, 225, 0, 1)',
                            transition: { duration: 0.3 }
                        }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Photo;
