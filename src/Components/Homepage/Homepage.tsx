const Homepage = () => {
  return (
    <div
      className="h-full w-full bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="flex items-center justify-center h-full backdrop-blur-md">
        <h1 className="text-white text-4xl">Welcome user!</h1>
      </div>
    </div>
  );
};

export default Homepage;
