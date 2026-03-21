export const HelpPage = () => {
    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
        <p className="text-base-content/60">Having issues? We're here to help.</p>

        <div className="bg-white rounded-2xl border border-base-200 p-6 shadow-sm space-y-6">
            <div>
                <h2 className="text-lg font-bold mb-2">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <details className="collapse collapse-arrow bg-base-100 border border-base-200 rounded-xl">
                        <summary className="collapse-title font-medium">How is XP calculated?</summary>
                        <div className="collapse-content text-sm text-base-content/70">
                            <p>XP is awarded for completing lessons, finishing practice tasks, and maintaining your daily learning streak.</p>
                        </div>
                    </details>
                    <details className="collapse collapse-arrow bg-base-100 border border-base-200 rounded-xl">
                        <summary className="collapse-title font-medium">Is Kiwi free to use?</summary>
                        <div className="collapse-content text-sm text-base-content/70">
                            <p>Kiwi operates on a freemium model. Core learning paths are free, while premium interview prep and complex models require a subscription.</p>
                        </div>
                    </details>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-bold mb-4">Contact Us</h2>
                <form className="space-y-4">
                    <textarea className="textarea textarea-bordered h-24 w-full" placeholder="Describe your issue..."></textarea>
                    <button className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
      </div>
    )
}