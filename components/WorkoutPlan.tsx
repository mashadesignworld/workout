import React from 'react';
import { Dumbbell, Activity, Heart, Flame, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const workoutDays = [
  {
    dayNumber: 1,
    title: "DAY 1: CHEST & TRICEPS",
    image: "/flatbenchpress.jpg",
    exercises: [
      {
        name: "Flat Bench Press",
        stats: "2 sets / 12 reps",
        icon: <Dumbbell className="w-5 h-5 text-red-500" />
      },
      {
        name: "Incline Bench Press",
        stats: "3 sets / 12 reps",
        icon: <Activity className="w-5 h-5 text-red-500" />
      },
      {
        name: "Decline Bench Press",
        stats: "3 sets / 12 reps",
        icon: <Dumbbell className="w-5 h-5 text-red-500" />
      },
      {
        name: "Incline Machine Press",
        stats: "4 sets / 12 reps",
        icon: <Activity className="w-5 h-5 text-red-500" />
      },
      {
        name: "Machine Fly",
        stats: "4 sets / 12 reps",
        icon: <Activity className="w-5 h-5 text-red-500" />
      }
    ],
    buttonText: "Start Day 1",
    primaryButton: true
  },
  {
    dayNumber: 2,
    title: "DAY 2: BACK & BICEPS",
    image: "/Inclined.jpg",
    exercises: [
      {
        name: "Lat Pull Down",
        stats: "3 sets / 15 reps",
        icon: <Flame className="w-5 h-5 text-red-500" />
      },
      {
        name: "T-Bar Row",
        stats: "3 sets / 15 reps",
        icon: <Dumbbell className="w-5 h-5 text-red-500" />
      },
      {
        name: "One arm Rowing",
        stats: "3 sets / 15 reps",
        icon: <Heart className="w-5 h-5 text-red-500" />
      },
      {
        name: "Bend OverRow",
        stats: "3 sets / 15 reps",
        icon: <Dumbbell className="w-5 h-5 text-red-500" />
      },
      {
        name: "Barbell Rowing",
        stats: "3 sets / 15 reps",
        icon: <Dumbbell className="w-5 h-5 text-red-500" />
      }
    ],
    buttonText: "Track Progress",
    primaryButton: false
  },
  {
    dayNumber: 3,
    title: "DAY 3: LEGS",
    image: "/legs2.jpg",
    exercises: [
      {
        name: "Walking Lunges",
        stats: "3 sets / 15 reps",
        icon: <Dumbbell className="w-5 h-5 text-red-500" />
      },
      {
        name: "Leg Extension",
        stats: "3 sets / 15 reps",
        icon: <Dumbbell className="w-5 h-5 text-red-500" />
      },
      {
        name: "Leg Curl",
        stats: "3 sets / 15 reps",
        icon: <Dumbbell className="w-5 h-5 text-red-500" />
      },
      {
        name: "Leg Press",
        stats: "3 sets / 15 reps",
        icon: <Dumbbell className="w-5 h-5 text-red-500" />
      },
      {
        name: "Front Dumbbell Press",
        stats: "4 sets / 15 reps",
        icon: <Dumbbell className="w-5 h-5 text-red-500" />
      }
    ],
    buttonText: "Start Day 3",
    primaryButton: true
  },
  {
    dayNumber: 4,
    title: "DAY 4: Full Body",
    image: "/squat.jpg",
    exercises: [
      {
        name: "Squats to Shoulder Press",
        stats: "4sets / 15 reps",
        icon: <Dumbbell className="w-5 h-5 text-red-500" />
      },
      {
        name: "Alternate Dumbbell Press",
        stats: "4 sets / 15 reps",
        icon: <Dumbbell className="w-5 h-5 text-red-500" />
      },
      {
        name: "Kettle bell Swings",
        stats: "4 sets / 15 reps",
        icon: <Dumbbell className="w-5 h-5 text-red-500" />
      },
      {
        name: "Bulgarian Bag Swing ",
        stats: "3sets / 20 reps",
        icon: <Dumbbell className="w-5 h-5 text-red-500" />
      },
      {
        name: "Planks Variations",
        stats: "3 sets / 20 reps",
        icon: <Dumbbell className="w-5 h-5 text-red-500" />
      }
    ],
    buttonText: "Track Progress",
    primaryButton: false
  }
];

export default function WorkoutPlan() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat font-sans text-zinc-200 relative selection:bg-red-600 selection:text-white"
      style={{ backgroundImage: `url('gym.jpg')` }}
    >
      {/* Dark Overlay blending into deep background matching logo void */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/95 via-neutral-950/90 to-neutral-900/95 z-0" />

      <div className="relative z-10">
        {/* Navigation Bar */}
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-2 font-black tracking-wider text-xl">
            <div className="relative w-32 h-32">
              <Image 
                src="/bravo.png" 
                alt="Bravo Logo" 
                fill
                sizes="128px"
                className="object-contain"
                priority 
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#" className="hover:text-red-500 transition-colors">Home</a>
            <a href="#" className="hover:text-red-500 transition-colors flex items-center gap-1">Workout <ChevronDown className="w-3 h-3" /></a>
            <a href="#" className="hover:text-red-500 transition-colors flex items-center gap-1">Workouts <ChevronDown className="w-3 h-3" /></a>
            <a href="#" className="hover:text-red-500 transition-colors">Blog</a>
            <a href="#" className="hover:text-red-500 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Log In</a>
            <button className="bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs px-5 py-2.5 rounded-full transition-all tracking-wide shadow-lg shadow-red-600/20 uppercase">
              Track Progress
            </button>
          </div>
        </nav>

        {/* Hero Headline Section */}
        <header className="max-w-4xl mx-auto text-center mt-12 mb-14 px-4">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase mb-3">
            4-Day World-Class <span className="text-red-600">Bravo Fitness</span> Workout Plan
          </h1>
          <p className="text-sm md:text-base text-zinc-400 font-light max-w-xl mx-auto">
            Everyday is a choice. Elevate your training routine with our precision engineering and structured workout plan.
          </p>
        </header>

        {/* 4-Day Cards Layout Grid */}
        <main className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workoutDays.map((day) => (
              <div 
                key={day.dayNumber} 
                className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl overflow-hidden flex flex-col justify-between shadow-2xl shadow-black/60 hover:border-red-600/30 transition-all group"
              >
                <div>
                  {/* Card Header Title */}
                  <div className="p-4 border-b border-zinc-800">
                    <h3 className="text-sm font-bold text-zinc-100 tracking-wide uppercase group-hover:text-red-500 transition-colors">
                      {day.title}
                    </h3>
                  </div>

                  {/* Workout Card Media Representation */}
                  <div className="relative aspect-video w-full overflow-hidden bg-neutral-950">
                    <Image 
                      src={day.image} 
                      alt={day.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                    />
                  </div>

                  {/* Exercises Details Segment */}
                  <div className="bg-zinc-900 text-zinc-100 p-5 space-y-4">
                    {day.exercises.map((exercise, index) => (
                      <div key={index} className="flex items-center justify-between border-b border-zinc-800/60 last:border-0 pb-3 last:pb-0">
                        <div className="flex gap-3 items-center">
                          <div className="p-2 bg-zinc-950 border border-zinc-800 rounded-xl shrink-0">
                            {exercise.icon}
                          </div>
                          <h4 className="font-bold text-sm text-zinc-200 tracking-tight">
                            {exercise.name}
                          </h4>
                        </div>
                        <p className="text-xs font-bold text-red-400 bg-red-950/40 border border-red-900/30 px-2.5 py-1 rounded-lg shrink-0">
                          {exercise.stats}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Button Section */}
                <div className="p-4 bg-zinc-900 border-t border-zinc-800">
                  <button 
                    className={`w-full font-extrabold text-xs py-3 rounded-xl transition-all uppercase tracking-wider ${
                      day.primaryButton 
                        ? 'bg-red-600 hover:bg-red-500 text-white shadow-md shadow-red-600/10' 
                        : 'bg-transparent border border-zinc-700 text-zinc-300 hover:border-red-500 hover:text-red-400'
                    }`}
                  >
                    {day.buttonText}
                  </button>
                </div>

              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}