import MyProfile from "@/components/profile/MyProfile";
import getCurrentUser from "@/lib/session";

const MyProfilePage = async () => {
  const user = await getCurrentUser();
  return (
    <div className="mt-10">
      <div className="flex justify-center">
        <div className="w-2/5 bg-gray-900 shadow-2xl border border-blue-400 px-8 py-6">
          <MyProfile user={user} />
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
