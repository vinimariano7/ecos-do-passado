export const LoginPage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-between p-8 h-dvh">
            <img src='/Logo.png' width={200} height={200} />
            <h2>Seja bem vindo ao nosso site!</h2>
            <div className="w-full max-w-lg flex flex-col items-center justify-center">
                <form className="w-full flex max-w-xs flex-col gap-4">
                    <fieldset className="flex flex-col w-full gap-2">
                        <input placeholder="Login" type="text" id="title" className="border p-2 rounded-lg" />
                    </fieldset>

                    <fieldset className="flex flex-col w-full gap-2">
                        <input placeholder="Senha" type="password" id="description" className="border p-2 rounded-lg" />
                    </fieldset>

                    <button className="mb-10 bottom-0 bg-gray-300/50 text-gray-950 p-4 border-gray-900 rounded-full max-w-2xl min-w-md w-full text-lg font-bold italic" type="submit">Entrar</button>

                </form>
            </div>
            <section className="">
                <ul>
                </ul>
            </section>
        </div>

    )
}
