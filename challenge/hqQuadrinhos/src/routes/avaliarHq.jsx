import React, { useState, useEffect } from 'react';
import pencil from '../assets/pencil.png';
import trash from '../assets/trash-can.png';
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";


function AvaliarHQ() {
    const [database, setDatabase] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            const response = await fetch('dadosAvaliacoes.json');
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados');
            }
            const jsonData = await response.json();
            const avaliacoes = jsonData.avaliacoes; 
            setDatabase(avaliacoes);
        } catch (error) {
            console.error('Erro:', error.message);
        }
    }

    function createData() {
        const novaAvaliacao = {};

        novaAvaliacao.historia = prompt("Qual o nome da história que deseja avaliar?");
        if (!novaAvaliacao.historia) {
            return; 
        }

        novaAvaliacao.avaliacao = parseInt(prompt("Digite uma nota de 1 a 5:"), 10);
        if (isNaN(novaAvaliacao.avaliacao) || novaAvaliacao.avaliacao <= 0 || novaAvaliacao.avaliacao > 5) {
            alert("Quantidade inválida!");
            return; 
        }

        novaAvaliacao.comentario = prompt("Como podemos melhorar sua experiência?");
        if (!novaAvaliacao.comentario) {
            return; 
        }

        novaAvaliacao.id = database.length + 1; 

        setDatabase([...database, novaAvaliacao]);
    }

    function readData() {
      return database.map(item => (
          <tr key={item.id} className='tr-body'>
              <td>{item.historia}</td>
              <td>{item.avaliacao}</td>
              <td>{item.comentario}</td>
              <td>
                    <BsFillPencilFill className='icon' onClick={() => updateData(item.id)} />
              </td>
              <td>
                    <BsFillTrash3Fill className='icon' onClick={() => deleteData(item.id)}/>
              </td>
          </tr>
      ));
  }
  

    function updateData(id) {
        const index = database.findIndex(item => item.id === id);
        if (index !== -1) {
            const novaAvaliacao = {};

            novaAvaliacao.historia = prompt("Qual o nome da história que deseja avaliar?");
            if (!novaAvaliacao.historia) {
                return; 
            }
    
            novaAvaliacao.avaliacao = parseInt(prompt("Digite uma nota de 1 a 5:"), 10);
            if (isNaN(novaAvaliacao.avaliacao) || novaAvaliacao.avaliacao <= 0 || novaAvaliacao.avaliacao > 5) {
                alert("Quantidade inválida!");
                return; 
            }
    
            novaAvaliacao.comentario = prompt("Como podemos melhorar sua experiência?");
            if (!novaAvaliacao.comentario) {
                return; 
            }
    
            const updatedDatabase = [...database];
            updatedDatabase[index] = { ...database[index], ...novaAvaliacao };
            setDatabase(updatedDatabase);
        }
    }

    function deleteData(id) {
        const updatedDatabase = database.filter(item => item.id !== id);
        setDatabase(updatedDatabase);
    }

    return (
      <div className="avaliacoes-container">
        <div className='teste'> 

          <h1 className="semItalico">Avaliações</h1>

          <table className="avaliacoes-table">
              <thead>
                  <tr className='tr-header'>
                      <th className='header-item' >História</th>
                      <th className='header-item' >Nota</th>
                      <th className='header-item' >Comentário</th>
                      <th className='header-item' >Editar</th>
                      <th className='header-item' >Deletar</th>
                  </tr>
              </thead>
              <tbody className='table-body'>
                  {readData()}
              </tbody>
              <div className="button-cadastro">
          </div>

          </table>

          <button className="semItalico btnAvaliarHq" onClick={createData}>Avaliar HQ</button>

          </div>
      </div>
  );  
}

export default AvaliarHQ;
