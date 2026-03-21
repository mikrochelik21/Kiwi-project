export const SettingsPage = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      
      <div className="bg-white rounded-2xl border border-base-200 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-base-200">
          <h2 className="text-lg font-bold mb-4">Notifications</h2>
          <div className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <div className="font-medium">Daily Reminders</div>
                <div className="text-sm text-base-content/60">Keep your streak alive with a daily nudge.</div>
              </div>
              <input type="checkbox" className="toggle toggle-primary" defaultChecked />
            </label>
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <div className="font-medium">New Content Alerts</div>
                <div className="text-sm text-base-content/60">Get notified when we add new lessons or tasks.</div>
              </div>
              <input type="checkbox" className="toggle toggle-primary" defaultChecked />
            </label>
          </div>
        </div>
        
        <div className="p-6 border-b border-base-200">
          <h2 className="text-lg font-bold mb-4">Account</h2>
          <div className="space-y-4">
            <div>
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" className="input input-bordered w-full max-w-md" defaultValue="alex@example.com" disabled />
            </div>
            <button className="btn btn-outline btn-sm">Change Password</button>
          </div>
        </div>
      </div>
    </div>
  );
};
