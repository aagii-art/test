export const LoginDesign = () => {

    return (
        <div className=" bg-[#FBBF24] h-[100%] w-[50%] flex flex-col " >
          <p className="text-[16px] font-[700] text-[#09090B] ml-[100px] mt-[30px] " > ☕ Buy Me Coffee </p>
          <div className=" flex items-center justify-center flex-1 " >
            <div className=" w-full flex flex-col gap-[20px] justify-center items-center " >
                <img src="/cofee.png" alt="" className=" w-[30%] " />
                <p className=" font-[700] text-[24px] " >Fund your creative work</p>
                <p className=" font-[400] text-center mx-[20%] " >Accept support. Start a membership. Setup a shop. It’s easier than you think.</p>
            </div>
          </div>
        </div>
    )
}