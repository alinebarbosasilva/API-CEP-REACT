import { useState } from 'react';

export default function App() {
//consumir api
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
 
  const handleClick = () => {
    let cepLimpo = cep.replace('-', '');


    if(cepLimpo.length  != 8) {
      alert("Cep informado está com um formato inválido")
      return;
    }

    fetch(`https://viacep.com.br/ws/${cepLimpo}/json`)
    .then(response => response.json())
    .then(data => {
      setRua(data.logradouro);
      setComplemento(data.complemento);
      setBairro(data.bairro);
      setCidade(data.localidade);
      setEstado(data.uf);
    })
    .catch(error => alert('Cep informado não encontrado'));
  }

  return (
   <div className='form'>
     <div className='procurar'>
      <input type="text" placeholder="Digite seu cep" onChange={(event) => setCep(event.target.value)}/>
      <button onClick={handleClick}>Procurar</button>
     </div>

    <div className='dados'> 

      <div className='dados-form'>
          <label>Rua</label>
          <input type="text" value={rua} disabled />
      </div>
      
      <div className='dados-form'>
          <label>Complemento</label>
          <input type="text" value={complemento} disabled />
      </div>    

      <div className='dados-form'>
          <label>Bairro</label>
          <input type="text"  value={bairro} disabled />
      </div>

      <div className='dados-form'>
          <label>Cidade</label>
          <input type="text" value={cidade} disabled />
      </div>

      <div className='dados-form'>
          <label>Estado</label>
          <input type="text"  value={estado} disabled/>
      </div>
     
    </div>
 </div>
  );
}


