
const App = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center bg-yellow-600 text-black-700">
      <div className="flex items-center">
        <h1 className="text-6xl font-thin tracking-wider">Ecos do passado</h1>
      </div>
      <p className="my-6 tracking-wide">
        Seja <code>src/App.js</code> bem vindo ao nosso site.
      </p>
      <div className="mt-6 flex justify-center">
        <a
          className="uppercase hover:underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
        <a
          className="ml-10 uppercase hover:underline"
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Criar conta
        </a>
      </div>
    </div>
  );
  return (
    <div className="flex-col h h-full items-start justify-start bg-blue-500 text-purple-600">
    </div>
  )
}

export default App;
