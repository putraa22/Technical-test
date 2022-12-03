import CatsCard from "../../components/catsCard/CatsCard";

const MainPage = () => {

  return (
    <div className="flex flex-col h-full mx-5 md:mx-0 lg:mx-0 items-center">
      <div className="mt-10 md:mt-20 lg:mt-20 w-full md:w-1/2">
        <CatsCard  />
      </div>
    </div>
  );
};

export default MainPage;
