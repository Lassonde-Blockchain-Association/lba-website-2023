export default function Home() {
  return (
    <div className="Landing w-screen h-screen relative bg-indigo-950 shadow flex flex-col justify-between">

      <div className="TopSection flex flex-row h-[20%] justify-between">
        <div className="LassondeBlockChainVariant2 w-[40%]  relative flex flex-row ml-16 mt-12">
          <div className="MainLogo   text-white text-4xl font-bold font-['Inter'] mr-4">
            LBA
          </div>
          <div className="LbaBlog  relative text-white text-opacity-80 text-3xl font-bold font-['Inter']">
            LBA-Blog
          </div>
        </div>
        <div className="flex flex-col"> 
        <div className="Rectangle1 w-12 h-1 bg-zinc-300 mr-12 mt-8" />
        <div className="Rectangle3 w-8 h-1 bg-zinc-300 ml-4 mt-4" />
        <div className="Rectangle2 w-4 h-1 bg-zinc-300 ml-8 mt-4" />

        </div>


      </div>
      
      <div className="LassondeBlockchainAssociation pb-[7%] ml-16">
        <span className="text-white text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold font-['Inter']">
          LASSONDE
          <br />
        </span>
        <span className="text-rose-400 text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold font-['Inter']">
          BLOCKCHAIN
          <br />
        </span>
        <span className="text-white text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold font-['Inter']">
          ASSOCIATION
        </span>
        <div className="Line1 w-[60%] border-2 mx-auto mt-16 border-white"></div>
      </div>
    </div>
  );
}
