export const homeTemplate = `
<section>
    <h2>Quem Somos?</h2>
    <p class="paragrafo-home">
        Somos uma ONG sem fins lucrativos, onde visamos ajudar animais que foram vítimas de maus-tratos,
        fazendo esses animais passar por um programa de reestruturação social, onde eles recebem amor,
        carinho e cuidados veterinários.
        Tratamos todos os portes: pequenos, médios e grandes.
        Caso tenha interesse, você também pode ajudar sendo voluntário: 
        <a href="#" onclick="navegar('cadastro')">Cadastre-se aqui.</a>
    </p>

    <picture class="primeira-imagem">
        <source srcset="../IMAGENS/cachorro1.webp" type="image/webp">
        <img src="../IMAGENS/cachorro1.webp" class="img" alt="Cachorro" width="800" height="500">
    </picture>
</section>

<section>
    <h2>Objetivo da ONG</h2>
    <p class="paragrafo">
        Ressocialização dos animais para que possam voltar a conviver normalmente em sociedade,
        garantindo um novo recomeço.
    </p>
</section>
`;

export const projetoTemplate = `
<section>
    <h2>Nosso Projeto</h2>
    <p class="paragrafo">
        Nosso projeto visa a resocialização de animais que foram vítimas de maus-tratos,
        proporcionando-lhes um ambiente seguro e amoroso para sua recuperação.
        Através de cuidados veterinários, alimentação adequada e muito carinho,
        buscamos preparar esses animais para uma nova vida em sociedade.
    </p>

    <picture class ="segunda-imagem">
        <source srcset="../IMAGENS/golden1.webp" type="image/webp">
        <source srcset="../IMAGENS/golden2.jpg" type="image/jpg">
        <source srcset="../IMAGENS/golden3.png" type="image/png">
        <img src="../IMAGENS/golden1.jpg" class="img" alt="Cachorro" width="800" height="500">
    </picture>
</section>
`;

export const cadastroTemplate = `
<section>

    <body class="cadastroBody">
        <form id="formCadastro" class="form">
            <fieldset>
                <legend class="legendCadastro">Cadastro de Voluntário</legend>

                <label for="nome">Nome Completo:</label>
                <input type="text" id="nome" required>

                <label for="email">E-mail:</label>
                <input type="email" id="email" required>

                <label for="cpf">CPF:</label>
                <input type="text" id="cpf" placeholder="123.456.789-00" required>

                <label for="telefone">Telefone:</label>
                <input type="text" id="telefone" placeholder="(41) 91234-1234" required>

                <label for="data_nasc">Data de Nascimento:</label>
                <input type="date" id="data_nasc" required>

                <label for="endereco">Endereço:</label>
                <input type="text" id="endereco" placeholder="Rua, bairro, número" required>

                <label for="cep">CEP:</label>
                <input type="text" id="cep" placeholder="12345-678" required>

                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" required>

                <label for="estado">Estado:</label>
                <input type="text" id="estado" required>

                <div class="button-container">
                    <button class="Button" type="submit">Enviar</button>
                    <button class="Button" type="reset">Limpar</button>
                </div>

                <div id="alerta" class="alert" style="display:none;"></div>
            </fieldset>
        </form>
    </body>
</section>
`;
