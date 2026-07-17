type PhoneFrameProps = {
  children: React.ReactNode;
};

export const PhoneFrame = ({ children }: PhoneFrameProps) => {
  return (
    <div className="mx-auto w-full h-fit rounded-[42px] border-10 border-[#cc476c] bg-[#cc476c] shadow-2xl overflow-hidden">
      {/* <div className="flex justify-center pt-3">
        <div className="h-7 w-36 rounded-full bg-[#cc476c]" />
      </div> */}

      <div className="h-full overflow-auto rounded-t-[28px] bg-linear-to-br from-pink-100 via-rose-50 to-fuchsia-100  flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
};
