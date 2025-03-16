export default function UserProfile({ params }: any) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
            <span className="text-2xl text-gray-500">
              {params.id.charAt(0).toUpperCase()}
            </span>
          </div>
          <h1 className="text-2xl font-light text-gray-800">User Profile</h1>
          <p className="text-sm text-gray-600">User ID: {params.id}</p>
        </div>
      </div>
    </div>
  );
}
