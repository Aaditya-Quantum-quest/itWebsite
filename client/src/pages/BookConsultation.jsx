import React, { useState } from 'react';
import { Calendar as CalIcon, Clock, Video, ArrowRight } from 'lucide-react';

export default function BookConsultation() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.requested_date = days[selectedDate].toLocaleDateString();
    data.requested_time = selectedTime;

    try {
      const response = await fetch("https://formsubmit.co/ajax/skyzenitservices@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('idle');
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus('idle');
      alert("Something went wrong. Please try again.");
    }
  };

  // Fake calendar data
  const days = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d;
  }).filter(d => d.getDay() !== 0 && d.getDay() !== 6); // Skip weekends

  const times = ["09:00 AM", "10:30 AM", "01:00 PM", "03:30 PM", "05:00 PM"];

  return (
    <div className="min-h-screen bg-bgPrimary pt-20 pb-24 border-t border-surfaceElevated">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row gap-16">

        {/* Left Side Info */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-32">
            <h1 className="text-4xl font-hero font-medium uppercase mb-4">Book Your Free Consultation</h1>
            <p className="text-textSecondary mb-8 text-lg">Schedule a 30-minute discovery call with our technical experts. No commitment. 100% free.</p>

            <div className="glass p-6 rounded-2xl mb-8 border-neonPrimary/20">
              <h3 className="font-heading font-semibold mb-4 text-white">What to expect</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-textSecondary">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-neonPrimary/20 flex flex-shrink-0 items-center justify-center text-neonPrimary text-xs">✓</div>
                  Discuss your project goals and requirements
                </li>
                <li className="flex items-start gap-3 text-sm text-textSecondary">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-neonPrimary/20 flex flex-shrink-0 items-center justify-center text-neonPrimary text-xs">✓</div>
                  Get initial technical advice & architecture insights
                </li>
                <li className="flex items-start gap-3 text-sm text-textSecondary">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-neonPrimary/20 flex flex-shrink-0 items-center justify-center text-neonPrimary text-xs">✓</div>
                  Understand timeline and budget estimates
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-3 text-sm text-textMuted bg-surfaceElevated px-4 py-3 rounded-lg border border-white/5">
              <Clock className="w-4 h-4 text-neonPrimary" /> We're in GMT+5:30 (India)
            </div>
          </div>
        </div>

        {/* Right Side Calendar/Booking (Custom mock UI) */}
        <div className="w-full lg:w-2/3">
          <div className="glass p-6 md:p-10 rounded-3xl border-white/10 shadow-2xl relative min-h-[500px]">

            {!selectedTime ? (
              <>
                <h3 className="text-2xl font-heading font-medium mb-8 flex items-center gap-3">
                  <CalIcon className="text-neonPrimary" /> Select a Date & Time
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Calendar List (Simplified Mock) */}
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-textMuted mb-4">Upcoming Availability</h4>
                    <div className="flex flex-col gap-2 h-[300px] overflow-y-auto custom-scrollbar pr-2">
                      {days.map((date, i) => {
                        const isSelected = selectedDate === i;
                        return (
                          <button
                            key={i}
                            onClick={() => setSelectedDate(i)}
                            className={`px-4 py-4 rounded-xl border flex items-center justify-between transition-all text-left ${isSelected ? 'bg-neonPrimary/10 border-neonPrimary text-neonPrimary' : 'bg-surfaceElevated border-white/5 hover:border-white/20 text-textPrimary'}`}
                          >
                            <span className="font-heading font-medium">
                              {date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Times */}
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-textMuted mb-4">
                      {selectedDate !== null ? "Available Times" : "Select a date first"}
                    </h4>
                    {selectedDate !== null && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {times.map((time, i) => (
                          <button
                            key={i}
                            onClick={() => setSelectedTime(time)}
                            className="px-4 py-3 rounded-xl border border-neonPrimary/30 text-neonPrimary hover:bg-neonPrimary hover:text-bgPrimary font-mono transition-colors font-semibold"
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              // Details Form Step
              <div className="animate-fade-in relative z-10">
                <button onClick={() => setSelectedTime(null)} className="text-sm text-textMuted hover:text-white mb-6">← Back to calendar</button>
                <h3 className="text-2xl font-heading font-medium mb-6">Confirm Details</h3>

                <div className="flex items-center gap-4 bg-surfaceElevated p-4 rounded-xl mb-8 border border-white/5">
                  <div className="bg-neonPrimary/10 p-3 rounded-lg text-neonPrimary"><Video /></div>
                  <div>
                    <p className="font-semibold text-textPrimary">30 Minute Strategy Call</p>
                    <p className="text-sm text-textSecondary">{days[selectedDate || 0].toLocaleDateString()} at {selectedTime}</p>
                  </div>
                </div>

                {status === 'success' ? (
                  <div className="bg-surfaceElevated border border-success/30 p-8 rounded-xl text-center shadow-[0_0_30px_rgba(0,255,136,0.1)]">
                    <h3 className="text-2xl font-bold text-success mb-3 flex justify-center items-center gap-2">
                       <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center">✓</div> Confirmed!
                    </h3>
                    <p className="text-textSecondary">Your consultation request for <strong className="text-white">{selectedTime}</strong> on <strong className="text-white">{days[selectedDate].toLocaleDateString()}</strong> has been submitted. A calendar invite will be sent to your email.</p>
                    <button onClick={() => { setSelectedTime(null); setStatus('idle'); }} className="mt-6 px-6 py-2 rounded-lg bg-bgPrimary hover:bg-surfaceCard transition-colors text-sm text-textMuted border border-white/5">Book another time</button>
                  </div>
                ) : (
                <form action="https://formsubmit.co/skyzenitservices@gmail.com" method="POST" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="first_name" placeholder="First Name *" className="w-full bg-surfaceCard border border-white/10 px-4 py-3 rounded-lg focus:border-neonPrimary outline-none" required />
                    <input type="text" name="last_name" placeholder="Last Name *" className="w-full bg-surfaceCard border border-white/10 px-4 py-3 rounded-lg focus:border-neonPrimary outline-none" required />
                  </div>
                  <input type="email" name="email" placeholder="Email Address *" className="w-full bg-surfaceCard border border-white/10 px-4 py-3 rounded-lg focus:border-neonPrimary outline-none" required />
                  <textarea name="message" placeholder="Please share anything that will help prepare for our meeting." className="w-full h-24 bg-surfaceCard border border-white/10 px-4 py-3 rounded-lg focus:border-neonPrimary outline-none resize-none" />

                  <button type="submit" disabled={status === 'loading'} className="w-full py-4 mt-4 bg-gradient-cyan-purple rounded-xl font-medium text-white shadow-btn-glow flex justify-center items-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-75 disabled:hover:scale-100">
                    {status === 'loading' ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Schedule Event <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>
                </form>
                )}
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
