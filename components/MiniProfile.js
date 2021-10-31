import { signOut, useSession } from "next-auth/react";

function MiniProfile() {
    const { data: session } = useSession();
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img src="https://i.pinimg.com/originals/cc/9d/f8/cc9df871da7299b05bd481847fcfc983.jpg" alt="" className=" w-16 h-16 rounded-full border p-[2px]"/>

            <div className="flex-1 mx-4">
                <h2 className="font-blod">Aditi</h2>
                <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
            </div>

            <button className="text-blue-400 font-semibold">Sign Out</button>
        </div>
    );
}

export default MiniProfile
