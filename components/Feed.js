import { useSession } from "next-auth/react"
import MiniProfile from "./MiniProfile"
import Posts from "./Posts"
import Stories from "./Stories"
import Suggestions from "./Suggestions"

function Feed() {
    const { data: session } = useSession();
    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>
            {/* section 1 */}
            <section className="col-span-2">
                {/* storie */}
                <Stories/>
                {/* posts */}
                <Posts/>
            </section>

            {session && (
                <section className="hidden xl:inline md:col-span-1">
                <div className="fixed top-20">
                    {/* mini profile */}
                    <MiniProfile/>
                    {/* suggestion */}
                    <Suggestions/>
                </div>
                
            </section>
            )}
            {/* section 2 */}
            
        </main>
    )
}

export default Feed
