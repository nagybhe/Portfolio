import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('carrega o hero com nome e cargo', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Nagybhe');
    await expect(page).toHaveTitle(/QA Automation Engineer/);
});

test('renderiza todas as seções principais', async ({ page }) => {
    for (const id of ['hero', 'about', 'skills', 'resume', 'portfolio']) {
        await expect(page.locator(`#${id}`)).toBeVisible();
    }
});

test('nenhuma imagem quebrada', async ({ page }) => {
    // Pega thumbnail renomeado, caminho relativo errado e arquivo removido.
    await page.waitForLoadState('networkidle');
    const quebradas = await page.evaluate(() =>
        [...document.images]
            .filter((img) => img.complete && img.naturalWidth === 0)
            .map((img) => img.currentSrc || img.src)
    );
    expect(quebradas).toEqual([]);
});

test('filtra os projetos por categoria', async ({ page }) => {
    const cards = page.locator('.portfolio-item');
    const total = await cards.count();
    expect(total).toBeGreaterThan(0);

    await page.getByRole('button', { name: 'Desafios Técnicos' }).click();
    const filtrados = await cards.count();
    expect(filtrados).toBeGreaterThan(0);
    expect(filtrados).toBeLessThan(total);

    await page.getByRole('button', { name: 'Todos' }).click();
    await expect(cards).toHaveCount(total);
});

test('abre o modal do projeto com a categoria preenchida', async ({ page }) => {
    await page.locator('.portfolio-title-btn').first().click();

    const modal = page.getByRole('dialog');
    await expect(modal).toBeVisible();

    // Regressão: essa linha saía como "Categoria:" sem valor.
    const categoria = modal.locator('li', { hasText: 'Categoria:' });
    await expect(categoria).toBeVisible();
    await expect(categoria).not.toHaveText(/Categoria:\s*$/);
});

const abrirMenu = async (page) => {
    const toggle = page.getByRole('button', { name: 'Abrir menu' });
    if (await toggle.isVisible()) await toggle.click();
};

test('abre o modal de contato pelo menu', async ({ page }) => {
    await abrirMenu(page);
    await page.getByRole('link', { name: 'Contato' }).click();

    const modal = page.getByRole('dialog');
    await expect(modal).toBeVisible();
    await expect(modal.getByLabel('Seu Nome')).toBeVisible();
    await expect(modal.getByLabel('Seu Email')).toBeVisible();
});

test('navega pelo menu até a seção de projetos', async ({ page }) => {
    await abrirMenu(page);
    await page.getByRole('link', { name: 'Projetos' }).click();
    await expect(page.locator('#portfolio')).toBeInViewport({ ratio: 0.1 });
});

test('os filtros são operáveis por teclado', async ({ page }) => {
    const filtro = page.getByRole('button', { name: 'Ferramentas QA' });
    await filtro.focus();
    await page.keyboard.press('Enter');
    await expect(filtro).toHaveAttribute('aria-pressed', 'true');
});

test('não registra erro de console ao carregar', async ({ page }) => {
    const erros = [];
    // O script do Vercel Analytics só existe quando servido pela Vercel;
    // localmente ele responde 404 e isso não é um erro da aplicação.
    // A mensagem do console não traz a URL, então filtra-se por location().
    const ruidoConhecido = /_vercel\/insights/;

    page.on('console', (msg) => {
        if (msg.type() !== 'error') return;
        const origem = `${msg.text()} ${msg.location()?.url ?? ''}`;
        if (!ruidoConhecido.test(origem)) erros.push(origem.trim());
    });
    page.on('pageerror', (err) => erros.push(err.message));

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    expect(erros).toEqual([]);
});

test('expõe as metatags de compartilhamento', async ({ page }) => {
    const og = (prop) =>
        page.locator(`meta[property="${prop}"]`).getAttribute('content');

    expect(await og('og:title')).toContain('Nagybhe');
    expect(await og('og:image')).toMatch(/og-image\.png$/);
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
});

test.describe('navegação mobile', () => {
    test.use({ viewport: { width: 390, height: 844 } });

    test('o menu é alcançável pelo botão toggle', async ({ page }) => {
        // Regressão: o CSS escondia a sidebar em left:-300px abaixo de 1200px e
        // o botão de toggle nunca existia no JSX — o site ficava sem navegação.
        const toggle = page.getByRole('button', { name: 'Abrir menu' });
        await expect(toggle).toBeVisible();
        await expect(toggle).toHaveAttribute('aria-expanded', 'false');

        await toggle.click();

        await expect(page.getByRole('button', { name: 'Fechar menu' })).toHaveAttribute(
            'aria-expanded',
            'true'
        );
        await expect(page.getByRole('link', { name: 'Projetos' })).toBeInViewport();
    });

    test('fecha o menu ao escolher uma seção', async ({ page }) => {
        await page.getByRole('button', { name: 'Abrir menu' }).click();
        await page.getByRole('link', { name: 'Projetos' }).click();

        await expect(page.getByRole('button', { name: 'Abrir menu' })).toHaveAttribute(
            'aria-expanded',
            'false'
        );
        await expect(page.locator('#portfolio')).toBeInViewport({ ratio: 0.1 });
    });

    test('fecha o menu com Escape', async ({ page }) => {
        await page.getByRole('button', { name: 'Abrir menu' }).click();
        await page.keyboard.press('Escape');

        await expect(page.getByRole('button', { name: 'Abrir menu' })).toBeVisible();
    });
});

test.describe('fundo de partículas', () => {
    test('cobre a viewport atrás de todo o conteúdo', async ({ page }) => {
        const camada = page.locator('.particles-layer');
        await expect(camada).toHaveCount(1);

        const estilo = await camada.evaluate((el) => {
            const cs = getComputedStyle(el);
            return {
                position: cs.position,
                zIndex: cs.zIndex,
                pointerEvents: cs.pointerEvents
            };
        });

        expect(estilo).toEqual({
            position: 'fixed',
            zIndex: '0',
            pointerEvents: 'none'
        });
        expect(await page.locator('.particle-dot').count()).toBeGreaterThan(0);
    });

    test('não intercepta cliques do conteúdo', async ({ page }) => {
        // pointer-events:none na camada; se vazar, o filtro para de responder.
        await page.getByRole('button', { name: 'Desafios Técnicos' }).click();
        await expect(
            page.getByRole('button', { name: 'Desafios Técnicos' })
        ).toHaveAttribute('aria-pressed', 'true');
    });

    test('aparece atrás das seções, que ficam transparentes', async ({ page }) => {
        for (const id of ['about', 'skills', 'resume', 'portfolio']) {
            const bg = await page
                .locator(`#${id}`)
                .evaluate((el) => getComputedStyle(el).backgroundColor);
            expect(bg, `seção ${id}`).toBe('rgba(0, 0, 0, 0)');
        }
    });
});

test.describe('Hard Skills', () => {
    test('aplica o blur de vidro nos cards', async ({ page }) => {
        // Regressão: declarar -webkit-backdrop-filter na mão fazia o Lightning
        // CSS descartar a versão sem prefixo, e o blur sumia sem erro nenhum.
        const blur = await page
            .locator('.skill-card')
            .first()
            .evaluate((el) => getComputedStyle(el).backdropFilter);

        expect(blur).toContain('blur');
    });

    test('não usa barra de progresso nem porcentagem', async ({ page }) => {
        const skills = page.locator('#skills');
        await expect(skills.locator('[role="progressbar"]')).toHaveCount(0);
        await expect(skills).not.toHaveText(/\d+\s*%/);
    });

    test('mostra o nível escrito, não apenas por cor', async ({ page }) => {
        const skills = page.locator('#skills');
        for (const nivel of ['Avançado', 'Sólido', 'Em evolução']) {
            expect(
                await skills.getByText(nivel, { exact: true }).count()
            ).toBeGreaterThan(0);
        }
    });

    test('lista as skills como chips dentro das categorias', async ({ page }) => {
        // Um card por categoria; a contagem do badge tem que bater com os chips.
        const cards = page.locator('.skill-card');
        expect(await cards.count()).toBeGreaterThanOrEqual(4);

        for (let i = 0; i < (await cards.count()); i += 1) {
            const card = cards.nth(i);
            const declarado = Number(await card.locator('.skill-card-count').innerText());
            await expect(card.locator('.skill-chip')).toHaveCount(declarado);
        }
    });

    test('cobre todas as skills exibidas em "Especializações" no Sobre', async ({ page }) => {
        // As duas listas divergiam: itens do Sobre não existiam em Hard Skills.
        const equivalentes = {
            'API Testing': 'Testes de API',
            'Performance Testing': 'Testes de Performance',
            'Test Automation': 'Testes Automatizados',
            'CI/CD Pipelines': 'CI/CD'
        };

        const tags = await page.locator('#about .skill-tag').allInnerTexts();
        const chips = await page.locator('#skills .skill-chip').allInnerTexts();
        const normalizados = chips.map((c) => c.trim());

        const faltando = tags
            .map((t) => equivalentes[t.trim()] ?? t.trim())
            .filter((t) => !normalizados.includes(t));

        expect(faltando).toEqual([]);
    });
});

test.describe('movimento reduzido', () => {
    test('esconde as partículas mas mantém o fundo', async ({ page }) => {
        // emulateMedia em vez de test.use({ reducedMotion }): o valor do
        // projeto tem precedência e a emulação não chegava na página.
        await page.emulateMedia({ reducedMotion: 'reduce' });
        await page.reload({ waitUntil: 'networkidle' });

        await expect(page.locator('.particle-dot').first()).toBeHidden();
        await expect(page.locator('.particles-layer')).toHaveCount(1);
        // O conteúdo continua legível e presente.
        await expect(page.locator('#skills')).toBeVisible();
    });
});

test.describe('identidade visual', () => {
    test('a ambiência do fundo é idêntica em qualquer rolagem', async ({ page }) => {
        /*
         * Regressão: o hero tinha gradiente próprio e a camada global usava um
         * linear-gradient vertical. Como a camada é fixed, isso virava uma faixa
         * clara/escura repetida a cada tela e o topo parecia de outra página.
         */
        await page.addStyleTag({
            content:
                '.particle-dot{display:none!important}' +
                '#main .container,.header{visibility:hidden!important}'
        });

        // A coluna e a altura vêm da viewport real: no mobile um x fixo cairia
        // fora da tela.
        const { width, height } = page.viewportSize();
        const clip = {
            x: Math.floor(width / 2),
            y: 0,
            width: 2,
            height: Math.min(600, height)
        };

        const amostrar = async (scroll) => {
            await page.evaluate((y) => window.scrollTo(0, y), scroll);
            await page.waitForTimeout(250);
            return page.screenshot({ clip });
        };

        const referencia = await amostrar(0);
        for (const scroll of [1500, 3500, 6000, 9000]) {
            const atual = await amostrar(scroll);
            expect(
                atual.equals(referencia),
                `o fundo em scroll=${scroll} difere do topo da página`
            ).toBe(true);
        }
    });

    test('sidebar, cards e sidebar usam o mesmo vidro', async ({ page }) => {
        const temBlur = (sel) =>
            page.locator(sel).first().evaluate((el) => getComputedStyle(el).backdropFilter);

        for (const sel of ['.header', '.skill-card', '.resume-item', '.certificate-category']) {
            expect(await temBlur(sel), `sem blur em ${sel}`).toContain('blur');
        }
    });

    test('as linhas de certificado não empilham vidro sobre vidro', async ({ page }) => {
        // A classe .certificate-category era usada no card e no chip interno; o
        // chip herdava blur e sombra de card inteiro.
        const linha = page.locator('.certificate-card').first();
        expect(await linha.evaluate((el) => getComputedStyle(el).backdropFilter)).toBe('none');

        const chip = page.locator('.certificate-tag').first();
        expect(await chip.evaluate((el) => getComputedStyle(el).backdropFilter)).toBe('none');
        expect(await chip.evaluate((el) => getComputedStyle(el).boxShadow)).toBe('none');
    });

    test('o hero não tem fundo próprio competindo com a camada global', async ({ page }) => {
        const bg = await page
            .locator('#hero')
            .evaluate((el) => getComputedStyle(el).backgroundColor);
        expect(bg).toBe('rgba(0, 0, 0, 0)');
        await expect(page.locator('.hero-gradient')).toHaveCount(0);
    });

    test('Qualificações mantém toda a informação exibida', async ({ page }) => {
        const resumo = page.locator('#resume');
        // Títulos, cards, chips e certificados continuam presentes.
        for (const titulo of ['Experiência Profissional', 'Formação Acadêmica', 'Certificações']) {
            await expect(resumo.getByRole('heading', { name: titulo })).toBeVisible();
        }
        expect(await resumo.locator('.resume-item').count()).toBeGreaterThan(5);
        expect(await resumo.locator('.certificate-card').count()).toBeGreaterThan(10);
        expect(await resumo.locator('.period').count()).toBeGreaterThan(5);
    });
});

test.describe('modais', () => {
    const abrirProjeto = async (page) => {
        await page.locator('.portfolio-title-btn').first().click();
        await expect(page.getByRole('dialog')).toBeVisible();
    };

    const abrirContato = async (page) => {
        const toggle = page.getByRole('button', { name: 'Abrir menu' });
        if (await toggle.isVisible()) await toggle.click();
        await page.getByRole('link', { name: 'Contato' }).click();
        await expect(page.getByRole('dialog')).toBeVisible();
    };

    const luminancia = ([r, g, b]) => 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const rgb = (valor) => valor.match(/\d+/g).slice(0, 3).map(Number);

    for (const [nome, abrir] of [
        ['projeto', abrirProjeto],
        ['contato', abrirContato]
    ]) {
        test(`o modal de ${nome} usa o vidro escuro da página`, async ({ page }) => {
            // Regressão: os dois modais eram claros (#fff / #f8f9fa) e destoavam
            // completamente do restante do site.
            await abrir(page);

            const conteudo = page.locator('.modal-content');
            const estilo = await conteudo.evaluate((el) => {
                const cs = getComputedStyle(el);
                return { bg: cs.backgroundColor, blur: cs.backdropFilter };
            });

            expect(estilo.blur).toContain('blur');
            expect(
                luminancia(rgb(estilo.bg)),
                `fundo do modal de ${nome} está claro: ${estilo.bg}`
            ).toBeLessThan(60);
        });
    }

    test('nenhum painel interno do modal volta a ser claro', async ({ page }) => {
        await abrirProjeto(page);

        for (const sel of ['.project-info', '.modal-header-custom', '.modal-body']) {
            /*
             * Compõe o fundo do elemento sobre o dos ancestrais até chegar num
             * opaco: os painéis são branco com alfa baixíssimo sobre o vidro
             * escuro, então olhar só o backgroundColor daria falso positivo.
             */
            const efetivo = await page.locator(sel).first().evaluate((el) => {
                let [r, g, b, a] = [0, 0, 0, 0];
                let no = el;

                while (no && a < 0.999) {
                    const cor = getComputedStyle(no).backgroundColor.match(/[\d.]+/g);
                    if (cor) {
                        const [cr, cg, cb, ca = 1] = cor.map(Number);
                        const peso = (1 - a) * ca;
                        r += cr * peso;
                        g += cg * peso;
                        b += cb * peso;
                        a += peso;
                    }
                    no = no.parentElement;
                }
                return [r, g, b];
            });

            expect(
                luminancia(efetivo),
                `${sel} renderiza claro: rgb(${efetivo.map(Math.round)})`
            ).toBeLessThan(90);
        }
    });

    test('os botões do modal são legíveis sobre o fundo escuro', async ({ page }) => {
        await abrirProjeto(page);

        // outline-dark deixava o botão do GitHub invisível no modal escuro.
        const botao = page.getByRole('link', { name: /GitHub/ });
        await expect(botao).toBeVisible();
        const cor = await botao.evaluate((el) => getComputedStyle(el).color);
        expect(luminancia(rgb(cor))).toBeGreaterThan(120);
    });
});

test.describe('espaçamento entre seções', () => {
    test('todas as seções usam o mesmo respiro vertical', async ({ page }) => {
        /*
         * Regressão: cada arquivo declarava o próprio padding (80px aqui, 60px
         * ali) e o hero, sendo 100vh com conteúdo centralizado, somava ~200px de
         * vazio. Agora a fonte é única: --section-space em App.css.
         */
        const paddings = await page.evaluate(() =>
            ['about', 'skills', 'resume', 'portfolio'].map((id) => {
                const cs = getComputedStyle(document.getElementById(id));
                return { id, top: cs.paddingTop, bottom: cs.paddingBottom };
            })
        );

        const referencia = paddings[0].top;
        for (const { id, top, bottom } of paddings) {
            expect(top, `padding-top de #${id}`).toBe(referencia);
            expect(bottom, `padding-bottom de #${id}`).toBe(referencia);
        }
    });

    test('o hero não abre um vazio maior que o das outras seções', async ({ page }) => {
        const medida = await page.evaluate(() => {
            const abs = (sel) => {
                const b = document.querySelector(sel).getBoundingClientRect();
                return { top: b.top + window.scrollY, bottom: b.bottom + window.scrollY };
            };
            return {
                heroAteSobre:
                    abs('#about .section-title h2').top - abs('.hero-stats').bottom,
                entreSecoes:
                    abs('#skills .section-title h2').top - abs('#about .row').bottom
            };
        });

        // O hero pode respirar um pouco mais, mas não o dobro.
        expect(medida.heroAteSobre).toBeLessThan(medida.entreSecoes * 1.5);
    });
});

test.describe('seção Sobre', () => {
    test('usa o mesmo vidro das demais seções', async ({ page }) => {
        for (const sel of ['.profile-card', '.about-content']) {
            const blur = await page
                .locator(sel)
                .evaluate((el) => getComputedStyle(el).backdropFilter);
            expect(blur, `sem blur em ${sel}`).toContain('blur');
        }
    });

    test('mantém todos os dados de contato e especializações', async ({ page }) => {
        const sobre = page.locator('#about');
        await expect(sobre.getByText('Amapá, Macapá, AP')).toBeVisible();
        await expect(
            sobre.getByRole('link', { name: 'andre.nagybhe.ramos@gmail.com' })
        ).toBeVisible();
        await expect(sobre.getByText('28 Anos')).toBeVisible();
        expect(await sobre.locator('.skill-tag').count()).toBeGreaterThan(15);
    });

    test('o e-mail nunca quebra no meio da palavra', async ({ page }) => {
        // Antes saía "gmail.co / m". O <wbr> depois do @ é o único ponto de
        // quebra, então no pior caso vira "...ramos@ / gmail.com".
        const link = page.locator('.info-item a').first();

        expect(await link.innerText()).toContain('andre.nagybhe.ramos@gmail.com');

        const linhas = await link.evaluate((el) => {
            const lh = parseFloat(getComputedStyle(el).lineHeight) || 20;
            return Math.round(el.getBoundingClientRect().height / lh);
        });
        expect(linhas).toBeLessThanOrEqual(2);
    });
});
