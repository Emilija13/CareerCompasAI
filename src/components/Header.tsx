export const Header = () => {
  return (
    <div className="w-full flex justify-between inria-sans-bold text-white px-11 pt-7 pb-4 border-b border-white">
      <div className="text-3xl">CareerCompassAI</div>
      <div>
        <button className="px-7 py-2 text-xl bg-[#0071C7] rounded-3xl">Sign up</button>
        <button className="ml-4 px-7 py-2 text-xl bg-[#B1B1B1] rounded-3xl">Sign in</button>
      </div>
    </div>
  );
};
