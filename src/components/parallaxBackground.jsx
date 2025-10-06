import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const parallax3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  // const parallax2Y = useTransform(x, [0, 0.5], ["0%", "40%"]);
  const parallax1Y = useTransform(x, [0, 0.5], ["0%", "20%"]);

  return (
    <section className="absolute inset-0">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/parallax-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Parallax Layer 3 - Background */}
        <motion.div
          className="absolute inset-0 -z-40 opacity-80"
          style={{
            backgroundImage: "url(/assets/parallax-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: parallax3Y,
          }}
        />
        {/* Parallax Layer 1 - Foreground */}
        <motion.div
          className="absolute inset-0 -z-10 "
          style={{
            backgroundImage: "url(/assets/parallax-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: parallax1Y,
          }}
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 -z-5 bg-gradient-to-r from-black/70 via-black/50 to-black/60" />
        {/* Text area overlay - strongest contrast where text appears */}
        <div className="absolute top-0 left-0 w-full h-full -z-5 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
        {/* Bottom to top black fade overlay */}
        <div className="absolute inset-0 -z-4 bg-gradient-to-t from-black via-black/80 to-transparent" />
        {/* Additional white glow overlay for dominant white theme */}
        <div className="absolute inset-0 -z-5 bg-gradient-to-t from-transparent via-white/5 to-white/10" />
      </div>
    </section>
  );
};

export default ParallaxBackground;
