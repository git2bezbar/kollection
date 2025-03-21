export default function Home () {
  return (
    <div
      className={'flex flex-col gap-8 items-center justify-center ' +
      'min-h-screen p-16'}
    >
      <h1 className="text-5xl font-normal">Kollection</h1>
      <p className="text-center">
        Choose which part of the kollection you wanna see.
      </p>
      <div className="flex justify-center items-center gap-12">
        <a className="" href="/vinyl">Vinyl</a>
        <a href="/cd">CD</a>
      </div>
    </div>
  );
}
