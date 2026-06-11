"use client";
import React, { useState } from 'react';
import { Dumbbell, Calendar, Zap, Award, Flame, ChevronRight, Heart } from 'lucide-react';

// Premium Workout Dataset
const workoutPlan = [
  {
    day: 1,
    title: "Upper Body Power",
    duration: "45 mins",
    intensity: "High",
    calories: "450 kcal",
    focus: "Chest, Back, Shoulders",
    exercises: [
      { name: "Incline Barbell Bench Press", sets: "4", reps: "6-8", icon: "🏋️‍♂️", tip: "Keep elbows at a 45-degree angle." },
      { name: "Overhand Barbell Rows", sets: "4", reps: "8", icon: "💪", tip: "Squeeze shoulder blades at the top." },
      { name: "Seated Dumbbell Shoulder Press", sets: "3", reps: "10", icon: "⚡", tip: "Don't lock out your elbows entirely." },
      { name: "Lat Pulldowns (Wide Grip)", sets: "3", reps: "10-12", icon: "🦅", tip: "Pull down to your upper chest." }
    ]
  },
  {
    day: 2,
    title: "Lower Body Hypertrophy",
    duration: "50 mins",
    intensity: "Very High",
    calories: "550 kcal",
    focus: "Quads, Calves, Core",
    exercises: [
      { name: "Barbell Back Squats", sets: "4", reps: "8-10", icon: "🦵", tip: "Break parallel and drive through your heels." },
      { name: "Romanian Deadlifts (RDLs)", sets: "4", reps: "10", icon: "🔥", tip: "Hinge at the hips, keep back perfectly flat." },
      { name: "Walking Dumbbell Lunges", sets: "3", reps: "12 per leg", icon: "🏃‍♂️", tip: "Keep your torso upright." },
      { name: "Hanging Knee Raises", sets: "3", reps: "15", icon: "🧩", tip: "Avoid swinging your legs using momentum." }
    ]
  },
  {
    day: 3,
    title: "Upper Body Hypertrophy",
    duration: "45 mins",
    intensity: "Medium-High",
    calories: "400 kcal",
    focus: "Arms, Shoulders, Chest",
    exercises: [
      { name: "Dumbbell Bench Press", sets: "4", reps: "10-12", icon: "🎯", tip: "Get a deep stretch at the bottom." },
      { name: "Incline Dumbbell Bicep Curls", sets: "3", reps: "12", icon: "💪", tip: "Keep your elbows locked back." },
      { name: "Overhead Tricep Extensions", sets: "3", reps: "12", icon: "⚡", tip: "Keep your core tight to protect lower back." },
      { name: "Lateral Dumbbell Raises", sets: "4", reps: "15", icon: "🦚", tip: "Lead with your elbows." }
    ]
  },
  {
    day: 4,
    title: "Lower Body Power & Posterior",
    duration: "50 mins",
    intensity: "High",
    calories: "500 kcal",
    focus: "Glutes, Hamstrings, Lower Back",
    exercises: [
      { name: "Conventional Deadlifts", sets: "3", reps: "5", icon: "👑", tip: "Engage lats and push the floor away." },
      { name: "Leg Press", sets: "3", reps: "10", icon: "🚀", tip: "Don't allow lower back to round off the seat." },
      { name: "Leg Curls (Seated or Lying)", sets: "4", reps: "12", icon: "🔄", tip: "Control the eccentric (lowering) phase." },
      { name: "Plank to Side Plank Flow", sets: "3", reps: "60 secs", icon: "🛡️", tip: "Maintain a straight line head to toe." }
    ]
  }
];

export default function WorkoutDashboard() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased p-6 md:p-12">
      {/* Header Banner */}
      <div className="max-w-6xl mx-auto mb-10 flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-800 pb-8 gap-4">
        <div>
          <span className="text-emerald-400 font-semibold tracking-wider text-sm uppercase flex items-center gap-2">
            <Flame className="w-4 h-4 animate-pulse" /> Premium Fitness Blueprint
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight mt-1 bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
            4-Day Elite Split Routine
          </h1>
        </div>
        <div className="flex gap-4 bg-slate-900 p-2 rounded-xl border border-slate-800 self-start">
          <div className="text-center px-4 py-2">
            <p className="text-xs text-slate-400 uppercase">Frequency</p>
            <p className="font-bold text-lg text-emerald-400">4 Days/Wk</p>
          </div>
          <div className="w-px bg-slate-800"></div>
          <div className="text-center px-4 py-2">
            <p className="text-xs text-slate-400 uppercase">Level</p>
            <p className="font-bold text-lg text-amber-400">Intermediate</p>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Sidebar: Day Selection Navigation */}
        <div className="lg:col-span-4 space-y-3">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">Training Schedule</p>
          {workoutPlan.map((item, idx) => (
            <button
              key={item.day}
              onClick={() => setActiveDay(idx)}
              className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                activeDay === idx
                  ? 'bg-gradient-to-br from-emerald-500/20 to-teal-500/5 border-emerald-500 shadow-lg shadow-emerald-500/10'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-colors ${
                  activeDay === idx ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                }`}>
                  D{item.day}
                </div>
                <div>
                  <h3 className="font-bold text-slate-200 text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{item.focus}</p>
                </div>
              </div>
              <ChevronRight className={`w-5 h-5 text-slate-500 transition-transform ${activeDay === idx ? 'transform translate-x-1 text-emerald-400' : ''}`} />
            </button>
          ))}
        </div>

        {/* Right Pane: Active Workout Details */}
        <div className="lg:col-span-8 bg-slate-900/40 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
          
          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-8 bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-indigo-400 hidden sm:block" />
              <div>
                <p className="text-xs text-slate-400">Duration</p>
                <p className="text-sm font-semibold">{workoutPlan[activeDay].duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-amber-400 hidden sm:block" />
              <div>
                <p className="text-xs text-slate-400">Intensity</p>
                <p className="text-sm font-semibold text-amber-400">{workoutPlan[activeDay].intensity}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-rose-400 hidden sm:block" />
              <div>
                <p className="text-xs text-slate-400">Est. Burn</p>
                <p className="text-sm font-semibold text-rose-400">{workoutPlan[activeDay].calories}</p>
              </div>
            </div>
          </div>

          {/* Exercise List */}
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Dumbbell className="w-5 h-5 text-emerald-400" /> Target Protocol
          </h2>
          
          <div className="space-y-4">
            {workoutPlan[activeDay].exercises.map((ex, i) => (
              <div 
                key={i} 
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-slate-900/70 hover:bg-slate-800/50 border border-slate-800 hover:border-slate-700/80 rounded-2xl transition-all duration-250 gap-4"
              >
                <div className="flex items-start gap-4">
                  {/* Dynamic Placeholder Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-slate-700/50 flex items-center justify-center text-2xl transition-colors border border-slate-700/50">
                    {ex.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-100 text-base group-hover:text-emerald-400 transition-colors">
                      {ex.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 italic font-medium">
                      💡 {ex.tip}
                    </p>
                  </div>
                </div>

                {/* Setup Tags */}
                <div className="flex items-center gap-3 self-end sm:self-center">
                  <div className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-center min-w-[70px]">
                    <span className="block text-[10px] text-slate-500 uppercase font-bold">Sets</span>
                    <span className="text-sm font-bold text-slate-200">{ex.sets}</span>
                  </div>
                  <div className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-center min-w-[70px]">
                    <span className="block text-[10px] text-slate-500 uppercase font-bold">Reps</span>
                    <span className="text-sm font-bold text-emerald-400">{ex.reps}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Call */}
          <button className="w-full mt-8 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-4 px-6 rounded-2xl shadow-xl shadow-emerald-500/10 transition-all active:scale-[0.99] flex items-center justify-center gap-2">
            <Award className="w-5 h-5" /> Start This Workout
          </button>
        </div>

      </div>
    </div>
  );
}