import React from 'react';
import { Dumbbell, Activity, Heart, Flame, ChevronDown } from 'lucide-react';

const workoutDays = [
  {
    dayNumber: 1,
    title: "DAY 1: CHEST & TRICEPS",
    image: "/flatbenchpress.jpg",
    exercises: [
      {
        name: "Flat Bench Press",
        stats: "2 sets / 12 reps",
        icon: <Dumbbell className="w-5 h-5 text-slate-700" />
      },
      {
        name: "Incline Bench Press",
        stats: "3 sets / 12 reps",
        icon: <Activity className="w-5 h-5 text-slate-700" />
      },
      {
        name: "Decline Bench Press",
        stats: "3 sets / 12 reps",
        icon: <Dumbbell className="w-5 h-5 text-slate-700" />
      },
      {
        name: "Incline Machine Press",
        stats: "4 sets / 12 reps",
        icon: <Activity className="w-5 h-5 text-slate-700" />
      },
      {
        name: "Machine Fly",
        stats: "4 sets / 12 reps",
        icon: <Activity className="w-5 h-5 text-slate-700" />
      }
    ],
    buttonText: "Start Day 1",
    primaryButton: true
  },
  {
    dayNumber: 2,
    title: "DAY 2: CHEST & TRICEPS",
    image: "/flatbenchpress.jpg",
    exercises: [
      {
        name: "Flat Bench Press",
        stats: "2 sets / 12 reps",
        icon: <Flame className="w-5 h-5 text-slate-700" />
      },
      {
        name: "Incline Bench Press",
        stats: "3 sets / 12 reps",
        icon: <Dumbbell className="w-5 h-5 text-slate-700" />
      },
      {
        name: "Decline Bench Press",
        stats: "3 sets / 12 reps",
        icon: <Heart className="w-5 h-5 text-slate-700" />
      },
      {
        name: "Incline Machine Press",
        stats: "4 sets / 12 reps",
        icon: <Dumbbell className="w-5 h-5 text-slate-700" />
      },
      {
        name: "Machine Fly",
        stats: "4 sets / 12 reps",
        icon: <Dumbbell className="w-5 h-5 text-slate-700" />
      }
    ],
    buttonText: "Track Progress",
    primaryButton: false
  },
  {
    dayNumber: 3,
    title: "DAY 3: CHEST & TRICEPS",
    image: "/flatbenchpress.jpg",
    exercises: [
      {
        name: "Flat Bench Press",
        stats: "2 sets / 12 reps",
        icon: <Dumbbell className="w-5 h-5 text-slate-700" />
      },
      {
        name: "Incline Bench Press",
        stats: "3 sets / 12 reps",
        icon: <Dumbbell className="w-5 h-5 text-slate-700" />
      },
      {
        name: "Decline Bench Press",
        stats: "3 sets / 12 reps",
        icon: <Dumbbell className="w-5 h-5 text-slate-700" />
      },
      {
        name: "Incline Machine Press",
        stats: "4 sets / 12 reps",
        icon: <Dumbbell className="w-5 h-5 text-slate-700" />
      },
      {
        name: "Machine Fly",
        stats: "4 sets / 12 reps",
        icon: <Dumbbell className="w-5 h-5 text-slate-700" />
      }
    ],
    buttonText: "Start Day 3",
    primaryButton: true
  },
  {
    dayNumber: 4,
    title: "DAY 4: CHEST & TRICEPS",
    image: "/flatbenchpress.jpg",
    exercises: [
      {
        name: "Flat Bench Press",
        stats: "2 sets / 12 reps",
        icon: <Dumbbell className="w-5 h-5 text-slate-700" />
      },
      {
        name: "Incline Bench Press",
        stats: "3 sets / 12 reps",
        icon: <Dumbbell className="w-5 h-5 text-slate-700" />
      },
      {
        name: "Decline Bench Press",
        stats: "3 sets / 12 reps",
        icon: <Dumbbell className="w-5 h-5 text-slate-700" />
      },
      {
        name: "Incline Machine Press",
        stats: "4 sets / 12 reps",
        icon: <Dumbbell className="w-5 h-5 text-slate-700" />
      },
      {
        name: "Machine Fly",
        stats: "4 sets / 12 reps",
        icon: <Dumbbell className="w-5 h-5 text-slate-700" />
      }
    ],
    buttonText: "Track Progress",
    primaryButton: false
  }
];

export default function WorkoutPlan() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat font-sans text-slate-200 relative selection:bg-blue-500 selection:text-white"
      style={{ backgroundImage: `url('gym.jpg')` }}
    >
      {/* Dark Overlay blending into deep background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/85 to-slate-950/95 z-0" />

      <div className="relative z-10">
        {/* Navigation Bar */}
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-2 font-black tracking-wider text-xl text-blue-500">
            <span className="p-1.5 bg-blue-600 rounded-lg text-white">★</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">Workout <ChevronDown className="w-3 h-3" /></a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">Workouts <ChevronDown className="w-3 h-3" /></a>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Log In</a>
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-5 py-2.5 rounded-full transition-all tracking-wide shadow-lg shadow-blue-600/20">
              Track Progress
            </button>
          </div>
        </nav>

        {/* Hero Headline Section */}
        <header className="max-w-4xl mx-auto text-center mt-12 mb-14 px-4">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase mb-3">
            4-Day World-Class Online Workout Plan
          </h1>
          <p className="text-sm md:text-base text-slate-400 font-light max-w-xl mx-auto">
            Elevate your training routine with our precision engineering and structured online workout layout plan.
          </p>
        </header>

        {/* 4-Day Cards Layout Grid */}
        <main className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workoutDays.map((day) => (
              <div 
                key={day.dayNumber} 
                className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between shadow-2xl shadow-black/40 hover:border-white/20 transition-all group"
              >
                <div>
                  {/* Card Header Title */}
                  <div className="p-4 border-b border-white/5">
                    <h3 className="text-sm font-bold text-slate-200 tracking-wide uppercase">
                      {day.title}
                    </h3>
                  </div>

                  {/* Workout Card Media Representation */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <img 
                      src={day.image} 
                      alt={day.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>

                  {/* Exercises Details Segment (White background inside card) */}
                  <div className="bg-white text-slate-900 p-5 space-y-4">
                    {day.exercises.map((exercise, index) => (
                      <div key={index} className="flex items-center justify-between border-b border-slate-100 last:border-0 pb-3 last:pb-0">
                        <div className="flex gap-3 items-center">
                          <div className="p-2 bg-slate-100 rounded-xl shrink-0">
                            {exercise.icon}
                          </div>
                          <h4 className="font-extrabold text-sm text-slate-900 tracking-tight">
                            {exercise.name}
                          </h4>
                        </div>
                        <p className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg shrink-0">
                          {exercise.stats}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Button Section */}
                <div className="p-4 bg-white border-t border-slate-100">
                  <button 
                    className={`w-full font-bold text-xs py-3 rounded-xl transition-all ${
                      day.primaryButton 
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/10' 
                        : 'bg-transparent border border-slate-200 text-slate-700 hover:bg-slate-50'
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