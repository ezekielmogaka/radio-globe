"use client";

import { useState } from "react";
import { User, Settings, LogOut, Heart, History, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function UserPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock auth state

  if (!isLoggedIn) {
    return (
      <div className="flex gap-2">
        <button className="button-secondary text-sm">Sign In</button>
        <button className="button-primary text-sm">Sign Up</button>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 p-3 glass rounded-lg hover:bg-white/20 transition-colors"
      >
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
        <div className="text-left">
          <div className="text-sm font-medium text-white">John Doe</div>
          <div className="text-xs text-gray-400">Premium</div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute right-0 top-full mt-2 w-64 glass rounded-xl overflow-hidden z-50"
          >
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-white">John Doe</div>
                  <div className="text-sm text-gray-400">john@example.com</div>
                  <div className="text-xs text-blue-400">Premium Member</div>
                </div>
              </div>
            </div>

            <div className="p-2">
              <button className="w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors">
                <Heart className="w-4 h-4 text-gray-400" />
                <span className="text-white">Favorites</span>
                <span className="ml-auto text-xs text-gray-400">24</span>
              </button>

              <button className="w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors">
                <History className="w-4 h-4 text-gray-400" />
                <span className="text-white">Listening History</span>
              </button>

              <button className="w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors">
                <Globe className="w-4 h-4 text-gray-400" />
                <span className="text-white">Discover</span>
              </button>

              <div className="border-t border-white/10 my-2"></div>

              <button className="w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors">
                <Settings className="w-4 h-4 text-gray-400" />
                <span className="text-white">Settings</span>
              </button>

              <button className="w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-lg transition-colors text-red-400">
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
