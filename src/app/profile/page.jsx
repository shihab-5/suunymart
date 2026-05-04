'use client'
import Update from "@/component/Update";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

export  function Profile() {
    
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user

    if (isPending) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-lg">Loading...</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-lg text-red-600">Please log in to view your profile</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-sky-50 py-6 sm:py-10 md:py-12 px-4 sm:px-6">
            <div className="w-full max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">My Profile</h1>
                    
                    <div className="flex flex-col items-center gap-6 sm:gap-8">
                        <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40">
                            {user.image ? (
                                <Image
                                    src={user.image}
                                    alt={user.name || "Profile"}
                                    fill
                                    className="object-cover rounded-full"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center">
                                    <span className="text-lg sm:text-2xl md:text-3xl font-bold text-white">
                                        {user.name?.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="w-full bg-base-100 rounded-xl p-4 sm:p-6 border border-base-300">
                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex flex-col gap-2">
                                    <label className="font-bold text-sm sm:text-base md:text-lg text-gray-700">Full Name</label>
                                    <p className="text-sm sm:text-base md:text-lg px-3 sm:px-4 py-2 bg-gray-50 rounded-lg">
                                        {user.name || "Not provided"}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="font-bold text-sm sm:text-base md:text-lg text-gray-700">Email Address</label>
                                    <p className="text-sm sm:text-base md:text-lg px-3 sm:px-4 py-2 bg-gray-50 rounded-lg break-all">
                                        {user.email || "Not provided"}
                                    </p>
                                </div>
                                
                            </div>
                        </div>

                    <div className="w-full">
                    <Update></Update>
                    </div>                     
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;