const PageHeading = ({ title, tagline }) => {
  return (
    <>
      <h5 className="relative before:absolute before:w-8 before:h-[1px] before:bg-slate-500 before:right-full before:mr-1 before:top-1/2 before:-translate-y-1/2 text-slate-500 text-center w-fit mx-auto uppercase">
        {title}
      </h5>
      <h1 className="text-white text-lg text-center mb-4 font-medium">
        {tagline}
      </h1>
    </>
  );
};
export default PageHeading;
