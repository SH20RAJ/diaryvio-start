'use client';

export default function RecordingOverlay({ isRecording, setIsRecording }) {
  if (!isRecording) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl border border-indigo-100 dark:border-slate-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">Recording...</h3>
          <button 
            onClick={() => setIsRecording(false)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            aria-label="Close recording"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col items-center py-6">
          {/* Audio visualization circles */}
          <div className="relative w-32 h-32 mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 animate-ping"></div>
            <div className="absolute inset-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 opacity-40 animate-ping animation-delay-200"></div>
            <div className="absolute inset-6 rounded-full bg-gradient-to-r from-indigo-300 to-purple-300 opacity-60 animate-ping animation-delay-400"></div>
            <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
              </svg>
            </div>
          </div>

          <div className="h-6 w-48 mb-6 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-3/4 rounded-full animate-pulse"></div>
          </div>

          <p className="text-xl font-medium mb-2">I'm listening...</p>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-6">
            Speak naturally and I'll transform your voice into a beautifully formatted journal entry.
          </p>
          <div className="flex space-x-4 w-full">
            <button 
              onClick={() => setIsRecording(false)}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-medium shadow-lg shadow-indigo-500/20 transform hover:translate-y-[-2px] transition-all"
            >
              Finish Recording
            </button>
            <button className="px-4 py-3 border border-indigo-200 dark:border-slate-600 hover:bg-indigo-50 hover:border-indigo-300 dark:hover:bg-slate-700 rounded-xl font-medium text-indigo-700 dark:text-indigo-400 transform hover:translate-y-[-2px] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
