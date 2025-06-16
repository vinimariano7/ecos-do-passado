export const LoginPage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-between p-8 h-screen bg-gradient-to-t from-[#8F824C] to-[#F5DE82]">
            <h1>Ecos do Passado</h1>

            <img src='\logo192.png' width={200} height={200} />
            <div className="w-full max-w-lg flex items-center justify-center">

                <form className="w-full flex max-w-xs flex-col gap-4">
                    <fieldset className="flex flex-col w-full gap-2">
                        <label htmlFor="title">Login</label>
                        <input type="text" id="title"  className="border p-2 rounded-lg" />
                    </fieldset>

         <form className="w-full flex max-w-xs flex-col gap-4"> </form>
                    <fieldset >
                        <label htmlFor="description">Senha</label>
                        <input type="text" id="description" />
                    </fieldset>

                    <button type="submit">Entrar</button>

                </form>
            </div>
            <section className="">
                <h2>Seja bem vindo ao nosso site!</h2>
                <ul>
                </ul>
            </section>
        </div>

    )
}