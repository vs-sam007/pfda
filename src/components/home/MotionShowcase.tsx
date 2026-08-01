'use client';

import { useState } from 'react';
import { Music, ArrowRight } from 'lucide-react';
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';
import { TextEffect } from '@/components/motion-primitives/text-effect';
import { TextLoop } from '@/components/motion-primitives/text-loop';
import { TextRoll } from '@/components/motion-primitives/text-roll';
import { TextShimmerWave } from '@/components/motion-primitives/text-shimmer-wave';
import { GlowEffect } from '@/components/motion-primitives/glow-effect';
import { Spotlight } from '@/components/motion-primitives/spotlight';
import { Tilt } from '@/components/motion-primitives/tilt';
import { Magnetic } from '@/components/motion-primitives/magnetic';

export function InfiniteSliderHoverSpeed() {
  return (
    <InfiniteSlider speedOnHover={20} gap={24}>
      <img
        src='https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677'
        alt='Dean blunt - Black Metal 2'
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img
        src='https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141'
        alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img
        src='https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf'
        alt='Yung Lean - Stardust'
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img
        src='https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f'
        alt='Lana Del Rey - Ultraviolence'
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img
        src='https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288'
        alt='A$AP Rocky - Tailor Swif'
        className='aspect-square w-[120px] rounded-[4px]'
      />
      <img
        src='https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520'
        alt='Midnight Miami (feat Konvy) - Nino Paid, Konvy'
        className='aspect-square w-[120px] rounded-[4px]'
      />
    </InfiniteSlider>
  );
}

export function TextEffectWithCustomDelay() {
  return (
    <div className='flex flex-col space-y-0 text-center items-center'>
      <TextEffect
        per='char'
        delay={0.5}
        variants={{
          container: {
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          },
          item: {
            hidden: {
              opacity: 0,
              rotateX: 90,
              y: 10,
            },
            visible: {
              opacity: 1,
              rotateX: 0,
              y: 0,
              transition: {
                duration: 0.2,
              },
            },
          },
        }}
      >
        Animate your ideas
      </TextEffect>
      <TextEffect per='char' delay={1.5}>
        with motion-primitives
      </TextEffect>
      <TextEffect
        per='char'
        delay={2.5}
        className='pt-12 text-xs'
        preset='blur'
      >
        (and delay!)
      </TextEffect>
    </div>
  );
}

export function TextLoopOnIndexChange() {
  const [direction, setDirection] = useState(-1);

  return (
    <TextLoop
      className='text-sm'
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 19,
        mass: 1.2,
      }}
      interval={2.5}
      onIndexChange={(index) => {
        setDirection(index === 0 ? -1 : 1);
      }}
      variants={{
        initial: {
          y: -direction * 20,
          rotateX: -direction * 90,
          opacity: 0,
          filter: 'blur(4px)',
        },
        animate: {
          y: 0,
          rotateX: 0,
          opacity: 1,
          filter: 'blur(0px)',
        },
        exit: {
          y: -direction * 20,
          rotateX: -direction * 90,
          opacity: 0,
          filter: 'blur(4px)',
        },
      }}
    >
      <span>
        <Music size={12} className='mr-1 inline-block' />A Little Lost・Arthur
        Russell
      </span>
      <span>La Trinité, Martinique</span>
    </TextLoop>
  );
}

export function TextRollBasic() {
  return (
    <TextRoll className='text-4xl text-black dark:text-white'>
      motion-primitives
    </TextRoll>
  );
}

export function TextShimmerWaveBasic() {
  return (
    <TextShimmerWave className='font-mono text-sm' duration={1}>
      Generating code...
    </TextShimmerWave>
  );
}

export function GlowEffectButton() {
  return (
    <div className='relative'>
      <GlowEffect
        colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
        mode='colorShift'
        blur='soft'
        duration={3}
        scale={0.9}
      />
      <button className='relative inline-flex items-center gap-1 rounded-md bg-zinc-950 px-2.5 py-1.5 text-sm text-zinc-50 outline outline-1 outline-[#fff2f21f]'>
        Explore <ArrowRight className='h-4 w-4' />
      </button>
    </div>
  );
}

export function SpotlightBorder() {
  return (
    <div className='relative aspect-video h-[200px] w-full max-w-[350px] overflow-hidden rounded-xl bg-zinc-300/30 p-[1px] dark:bg-zinc-700/30'>
      <Spotlight
        className='from-blue-600 via-blue-500 to-blue-400 blur-3xl dark:from-blue-200 dark:via-blue-300 dark:to-blue-400'
        size={124}
      />
      <div className='relative h-full w-full rounded-xl bg-white dark:bg-black'></div>
    </div>
  );
}

export function TiltCard1() {
  return (
    <Tilt rotationFactor={8} isRevese>
      <div
        style={{
          borderRadius: '12px',
        }}
        className='flex w-full max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
      >
        <img
          src='https://images.beta.cosmos.so/f7fcb95d-981b-4cb3-897f-e35f6c20e830?format=jpeg'
          alt='Ghost in the shell - Kôkaku kidôtai'
          className='h-48 w-full object-cover'
        />
        <div className='p-2'>
          <h1 className='font-mono leading-snug text-zinc-950 dark:text-zinc-50'>
            Ghost in the Shell
          </h1>
          <p className='text-zinc-700 dark:text-zinc-400'>Kôkaku kidôtai</p>
        </div>
      </div>
    </Tilt>
  );
}

export function MagneticNested() {
  const springOptions = { bounce: 0.1 };

  return (
    <Magnetic
      intensity={0.2}
      springOptions={springOptions}
      actionArea='global'
      range={200}
    >
      <button
        type='button'
        className='inline-flex items-center rounded-lg border border-zinc-100 bg-zinc-100 px-4 py-2 text-sm text-zinc-950 transition-all duration-200 hover:bg-zinc-200 dark:border-zinc-900 dark:bg-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-600'
      >
        <Magnetic
          intensity={0.1}
          springOptions={springOptions}
          actionArea='global'
          range={200}
        >
          <span>Submit</span>
        </Magnetic>
      </button>
    </Magnetic>
  );
}

export default function MotionShowcase() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="mb-4 inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            <TextShimmerWaveBasic />
          </div>
          <div className="text-3xl md:text-5xl font-bold mb-8 flex justify-center text-center">
            <TextEffectWithCustomDelay />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center mb-20">
          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="text-sm font-medium text-zinc-500 mb-2">Tilt Card</h3>
            <TiltCard1 />
          </div>
          
          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="text-sm font-medium text-zinc-500 mb-2">Spotlight Border</h3>
            <SpotlightBorder />
          </div>
          
          <div className="flex flex-col items-center justify-center gap-10 w-full h-full p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
            <TextRollBasic />
            <TextLoopOnIndexChange />
            <div className="flex gap-6 items-center">
              <GlowEffectButton />
              <MagneticNested />
            </div>
          </div>
        </div>

        <div className="w-full relative">
           <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
           <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
           <h3 className="text-sm font-medium text-zinc-500 mb-6 text-center">Infinite Slider (Hover to speed up)</h3>
           <InfiniteSliderHoverSpeed />
        </div>
      </div>
    </section>
  );
}
