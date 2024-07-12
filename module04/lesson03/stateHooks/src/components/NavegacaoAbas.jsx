import { useState } from 'react';

const NavegacaoAbas = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabContents = [
        ["Harry Potter e a Pedra Filosofal ", "Harry Potter e a Câmara Secreta", "Harry Potter e o Prisioneiro de Azkaban", "Harry Potter e o Cálice de Fogo ", "Harry Potter e a Ordem da Fênix "],
        ["Harry Potter e o Enigma do Príncipe", "Harry Potter e as Relíquias da Morte", "Os Contos de Beedle, o Bardo", "Animais Fantásticos e Onde Habitam"],
        ["Quadribol Através dos Séculos", "Animais Fantásticos e Onde Habitam", "Animais Fantásticos: Os Crimes de Grindelwald", "Animais Fantásticos: Os Segredos de Dumbledore"],
        ["O Senhor dos Anéis: A Sociedade do Anel", "O Senhor dos Anéis: As Duas Torres", "O Senhor dos Anéis: O Retorno do Rei", "O Hobbit", "O Silmarillion"],
    ];

    const changeTab = (index) => {
        setActiveTab(index);
    };

    return (
        <div>
            <div className="tabs">
                <button onClick={() => changeTab(0)}>Primeira aba</button>
                <button onClick={() => changeTab(1)}>Segunda aba</button>
                <button onClick={() => changeTab(2)}>Terceira aba</button>
                <button onClick={() => changeTab(3)}>Quarta aba</button>
            </div>
            <div className="tab-content">
                <ul>
                    {tabContents[activeTab].map((text, index) => (
                        <li key={index}>{text}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavegacaoAbas;